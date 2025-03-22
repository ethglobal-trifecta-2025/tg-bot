import { ethers } from "ethers";
import type { Context } from "grammy";
import betAbi from "../abi/bet.json";
import { APP_ADDRESS, POINTS_ADDRESS, USDC_ADDRESS } from "../consts/addresses";
import { privy } from "../lib/privy";
import { getWallet } from "../utils/getWallet";

// Token type enum to match the contract
enum TokenType {
  USDC = 0,
  POINTS = 1,
}

export const withdrawCommand = async (ctx: Context) => {
  if (!ctx.from) {
    return ctx.reply("User not found.");
  }

  const wallet = await getWallet(ctx.from.id);
  if (!wallet) {
    return ctx.reply(
      "No wallet found. Please set up your wallet first with /setup."
    );
  }

  const params = ctx.message?.text?.split(" ").filter(Boolean) || [];
  const provider = new ethers.JsonRpcProvider("https://sepolia.base.org");

  // If just /withdraw, show balance and options
  if (params.length === 1) {
    return showWithdrawOptions(ctx, wallet, provider);
  }

  try {
    // Parse parameters: /withdraw <option> [amount] [destination]
    const [_, option, amountOrDestination, possibleDestination] = params;

    // Check if option is undefined
    if (!option) {
      return showWithdrawOptions(ctx, wallet, provider);
    }

    // Initialize variables
    let tokenType: TokenType;
    let percentageAmount: number | null = null;
    let exactAmount: number | null = null;
    let destinationAddress: string | null = null;

    // Parse the option to determine token type and amount
    if (option.toLowerCase() === "usdc50") {
      tokenType = TokenType.USDC;
      percentageAmount = 50;
    } else if (option.toLowerCase() === "usdc100") {
      tokenType = TokenType.USDC;
      percentageAmount = 100;
    } else if (option.toLowerCase() === "usdcx") {
      tokenType = TokenType.USDC;
      if (!amountOrDestination || isNaN(parseFloat(amountOrDestination))) {
        return ctx.reply("❌ Please specify a valid amount to withdraw.");
      }
      exactAmount = parseFloat(amountOrDestination);
      destinationAddress = possibleDestination?.startsWith("0x")
        ? possibleDestination
        : null;
    } else if (option.toLowerCase() === "points50") {
      tokenType = TokenType.POINTS;
      percentageAmount = 50;
    } else if (option.toLowerCase() === "points100") {
      tokenType = TokenType.POINTS;
      percentageAmount = 100;
    } else if (option.toLowerCase() === "pointsx") {
      tokenType = TokenType.POINTS;
      if (!amountOrDestination || isNaN(parseFloat(amountOrDestination))) {
        return ctx.reply("❌ Please specify a valid amount to withdraw.");
      }
      exactAmount = parseFloat(amountOrDestination);
      destinationAddress = possibleDestination?.startsWith("0x")
        ? possibleDestination
        : null;
    } else {
      return ctx.reply(
        "❌ Invalid option. Use /withdraw to see available options."
      );
    }

    // If no exact amount but there's a potential address parameter
    if (exactAmount === null && amountOrDestination?.startsWith("0x")) {
      destinationAddress = amountOrDestination;
    }

    // Fetch user balance from contract
    const balance = await getUserBalance(provider, wallet.address, tokenType);

    if (balance <= 0) {
      return ctx.reply(
        `❌ You have no ${
          tokenType === TokenType.USDC ? "USDC" : "POINTS"
        } balance to withdraw.`
      );
    }

    // Calculate withdrawal amount
    let withdrawAmount: number;
    if (percentageAmount !== null) {
      withdrawAmount = (balance * percentageAmount) / 100;
    } else if (exactAmount !== null) {
      withdrawAmount = exactAmount;
      if (withdrawAmount > balance) {
        return ctx.reply(
          `❌ Insufficient funds! Your balance: ${balance.toFixed(6)} ${
            tokenType === TokenType.USDC ? "USDC" : "POINTS"
          }\n` + `You requested to withdraw ${withdrawAmount.toFixed(6)}.`
        );
      }
    } else {
      return ctx.reply("❌ Invalid amount specified.");
    }

    if (withdrawAmount <= 0) {
      return ctx.reply("❌ Withdrawal amount must be greater than 0.");
    }

    // Start the withdrawal process
    const tokenName = tokenType === TokenType.USDC ? "USDC" : "POINTS";
    const statusMsg = await ctx.reply(
      `🔄 Processing your withdrawal...\n\n` +
        `Amount: ${withdrawAmount.toFixed(6)} ${tokenName}\n` +
        (destinationAddress
          ? `Destination: ${destinationAddress}\n`
          : `To: Your wallet\n`) +
        `Current balance: ${balance.toFixed(6)} ${tokenName}`
    );

    // Prepare transaction
    const maxFeePerGas = "0x" + ethers.parseUnits("1.5", "gwei").toString(16);
    const maxPriorityFeePerGas =
      "0x" + ethers.parseUnits("1.5", "gwei").toString(16);
    const nonce = await provider.getTransactionCount(wallet.address);

    // Format the amount based on token type (USDC = 6 decimals, POINTS = 18 decimals)
    const tokenDecimals = tokenType === TokenType.USDC ? 6 : 18;
    const tokenAmount = ethers.parseUnits(
      withdrawAmount.toString(),
      tokenDecimals
    );

    // Encode function call
    const bettingInterface = new ethers.Interface(betAbi);
    const data = bettingInterface.encodeFunctionData("withdraw", [
      BigInt(tokenType),
      tokenAmount.toString(),
    ]);

    const transaction = {
      from: wallet.address,
      to: APP_ADDRESS,
      data,
      value: "0x0",
      gasLimit: "0x100000",
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce: "0x" + nonce.toString(16),
      chainId: 84532,
    };

    if (!ctx.chat?.id) {
      return ctx.reply("Chat ID not found.");
    }

    // Execute withdrawal transaction
    await ctx.api.editMessageText(
      ctx.chat.id,
      statusMsg.message_id,
      "🔄 Withdrawing funds from contract..."
    );

    const result = await privy.walletApi.ethereum.sendTransaction({
      walletId: wallet.wallet.id,
      transaction,
      method: "signAndSendTransaction",
      caip2: "eip155:84532",
    });

    // Wait for transaction to be processed
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // If a destination address is specified, transfer the funds
    if (destinationAddress) {
      await ctx.api.editMessageText(
        ctx.chat.id,
        statusMsg.message_id,
        `✅ Funds withdrawn to your wallet!\n` +
          `Transaction: ${getExplorerLink(result.hash)}\n\n` +
          `🔄 Now transferring to destination address...`
      );

      // Transfer to destination
      const transferResult = await transferFunds(
        provider,
        wallet,
        destinationAddress,
        withdrawAmount,
        tokenType,
        ctx,
        statusMsg
      );

      if (transferResult.success) {
        await ctx.api.editMessageText(
          ctx.chat.id,
          statusMsg.message_id,
          `🎉 Withdrawal complete!\n\n` +
            `Amount: ${withdrawAmount.toFixed(6)} ${tokenName}\n` +
            `Destination: ${destinationAddress}\n` +
            `Remaining balance: ${(balance - withdrawAmount).toFixed(
              6
            )} ${tokenName}\n\n` +
            `Withdrawal TX: ${getExplorerLink(result.hash)}\n` +
            `Transfer TX: ${getExplorerLink(transferResult.hash!)}`
        );
      } else {
        await ctx.api.editMessageText(
          ctx.chat.id,
          statusMsg.message_id,
          `⚠️ Withdrawal partially complete!\n\n` +
            `Funds were withdrawn to your wallet but the transfer to ${destinationAddress} failed.\n` +
            `You can try transferring manually.\n\n` +
            `Withdrawal TX: ${getExplorerLink(result.hash)}`
        );
      }
    } else {
      // Simple withdrawal to user's wallet
      const newBalance = balance - withdrawAmount;

      await ctx.api.editMessageText(
        ctx.chat.id,
        statusMsg.message_id,
        `🎉 Withdrawal complete!\n\n` +
          `Amount: ${withdrawAmount.toFixed(6)} ${tokenName}\n` +
          `New balance: ${newBalance.toFixed(6)} ${tokenName}\n\n` +
          `Transaction: ${getExplorerLink(result.hash)}`
      );
    }
  } catch (error) {
    console.error("Error withdrawing funds:", error);
    let errorMessage = "❌ Failed to withdraw funds.";

    if (error instanceof Error) {
      const errorText = error.message.substring(0, 100);
      errorMessage += ` ${errorText}${errorText.length >= 100 ? "..." : ""}`;
    }

    if (ctx.chat) {
      return ctx.reply(errorMessage);
    }
  }
};

async function showWithdrawOptions(
  ctx: Context,
  wallet: any,
  provider: ethers.JsonRpcProvider
) {
  try {
    // Fetch both balances
    const usdcBalance = await getUserBalance(
      provider,
      wallet.address,
      TokenType.USDC
    );
    const pointsBalance = await getUserBalance(
      provider,
      wallet.address,
      TokenType.POINTS
    );

    return ctx.reply(
      `💰 Withdraw Funds\n\n` +
        `Your balances:\n` +
        `- ${usdcBalance.toFixed(6)} USDC\n` +
        `- ${pointsBalance.toFixed(6)} POINTS\n\n` +
        `Options:\n` +
        `1. /withdraw usdc50 [destination] - Withdraw 50% of your USDC\n` +
        `2. /withdraw usdc100 [destination] - Withdraw 100% of your USDC\n` +
        `3. /withdraw usdcx [amount] [destination] - Withdraw specific USDC amount\n` +
        `4. /withdraw points50 [destination] - Withdraw 50% of your POINTS\n` +
        `5. /withdraw points100 [destination] - Withdraw 100% of your POINTS\n` +
        `6. /withdraw pointsx [amount] [destination] - Withdraw specific POINTS amount\n\n` +
        `Examples:\n` +
        `/withdraw usdc100\n` +
        `/withdraw pointsx 50\n` +
        `/withdraw points50 0x123...abc\n\n` +
        `Optional: Add a destination address at the end to withdraw to a different wallet.`
    );
  } catch (error) {
    console.error("Error fetching balances:", error);
    return ctx.reply("❌ Failed to fetch balances. Please try again later.");
  }
}

async function getUserBalance(
  provider: ethers.JsonRpcProvider,
  address: string,
  tokenType: TokenType
): Promise<number> {
  try {
    const contractInterface = new ethers.Interface(betAbi);
    const contract = new ethers.Contract(
      APP_ADDRESS,
      contractInterface,
      provider
    );

    if (!contract || !contract.userBalances) {
      throw new Error("Contract not properly initialized");
    }

    const balanceWei = await contract.userBalances(address, BigInt(tokenType));

    // Format based on token decimals (USDC = 6, POINTS = 18)
    const decimals = tokenType === TokenType.USDC ? 6 : 18;
    return parseFloat(ethers.formatUnits(balanceWei, decimals));
  } catch (error) {
    console.error("Error checking balance:", error);
    return 0;
  }
}

async function transferFunds(
  provider: ethers.JsonRpcProvider,
  wallet: any,
  destinationAddress: string,
  amount: number,
  tokenType: TokenType,
  ctx: Context,
  statusMsg: any
): Promise<{ success: boolean; hash?: string }> {
  try {
    const tokenAddress =
      tokenType === TokenType.USDC ? USDC_ADDRESS : POINTS_ADDRESS;
    const decimals = tokenType === TokenType.USDC ? 6 : 18;
    const tokenAmount = ethers.parseUnits(amount.toString(), decimals);

    const tokenInterface = new ethers.Interface([
      "function transfer(address to, uint256 amount) external returns (bool)",
    ]);

    const data = tokenInterface.encodeFunctionData("transfer", [
      destinationAddress,
      tokenAmount.toString(),
    ]);

    const maxFeePerGas = "0x" + ethers.parseUnits("1.5", "gwei").toString(16);
    const maxPriorityFeePerGas =
      "0x" + ethers.parseUnits("1.5", "gwei").toString(16);
    const nonce = await provider.getTransactionCount(wallet.address);

    const transaction = {
      from: wallet.address,
      to: tokenAddress,
      data,
      value: "0x0",
      gasLimit: "0x100000",
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce: "0x" + nonce.toString(16),
      chainId: 84532,
    };

    const result = await privy.walletApi.ethereum.sendTransaction({
      walletId: wallet.wallet.id,
      transaction,
      method: "signAndSendTransaction",
      caip2: "eip155:84532",
    });

    return { success: true, hash: result.hash };
  } catch (error) {
    console.error("Error transferring funds:", error);
    if (ctx.chat?.id) {
      await ctx.api.editMessageText(
        ctx.chat.id,
        statusMsg.message_id,
        `⚠️ Failed to transfer to destination address: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
    return { success: false };
  }
}

function getExplorerLink(hash: string): string {
  return `https://sepolia.basescan.org/tx/${hash}`;
}
