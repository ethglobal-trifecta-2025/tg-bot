import { ethers } from "ethers";
import type { Context } from "grammy";
import betAbi from "../abi/bet.json";
import { APP_ADDRESS, POINTS_ADDRESS } from "../consts/addresses";
import { privy } from "../lib/privy";
import { getWallet } from "../utils/getWallet";

export const placeBetCommand = async (ctx: Context) => {
  if (!ctx.from) {
    return ctx.reply("User not found.");
  }

  const wallet = await getWallet(ctx.from.id, ctx);
  if (!wallet) {
    return ctx.reply(
      "No wallet found. Please set up your wallet first with /setup."
    );
  }

  const params = ctx.message?.text?.split(" ").filter(Boolean) || [];
  const provider = new ethers.JsonRpcProvider("https://sepolia.base.org");

  if (params.length === 1) {
    return startBettingProcess(ctx);
  }

  if (params.length < 5) {
    return ctx.reply(
      "Missing parameters. Format: /bet <poolId> <option> <amount> <tokenType>"
    );
  }

  try {
    const [_, poolId, selectedOption, amount, tokenType] = params;
    const amountValue = parseFloat(amount || "0");

    if (isNaN(amountValue) || amountValue <= 0) {
      return ctx.reply("❌ Invalid amount. Please enter a positive number.");
    }

    const balance = await checkBalance(provider, wallet.address);

    if (balance < amountValue) {
      return ctx.reply(
        `❌ Insufficient funds! Your balance: ${balance.toFixed(2)} $POINTS\n` +
          `You need ${amountValue.toFixed(2)} $POINTS for this bet.\n\n`
      );
    }

    const statusMsg = await ctx.reply(
      `🔄 Processing your bet...\n\n` +
        `Pool: ${poolId}\n` +
        `Option: ${selectedOption}\n` +
        `Amount: ${amount} $POINTS\n` +
        `Current balance: ${balance.toFixed(2)} $POINTS`
    );

    const maxFeePerGas = "0x" + ethers.parseUnits("1.5", "gwei").toString(16);
    const maxPriorityFeePerGas =
      "0x" + ethers.parseUnits("1.5", "gwei").toString(16);
    const nonce = await provider.getTransactionCount(wallet.address);

    const tokenInterface = new ethers.Interface([
      "function approve(address spender, uint256 amount) external returns (bool)",
    ]);

    const approveData = tokenInterface.encodeFunctionData("approve", [
      APP_ADDRESS,
      ethers.parseUnits(amount || "0", 6),
    ]);

    const approveTransaction = {
      from: wallet.address,
      to: POINTS_ADDRESS,
      data: approveData,
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

    await ctx.api.editMessageText(
      ctx.chat.id,
      statusMsg.message_id,
      "🔐 Step 1/2: Approving token spending..."
    );

    const approveResult = await privy.walletApi.ethereum.sendTransaction({
      walletId: wallet.wallet.id,
      transaction: approveTransaction,
      method: "signAndSendTransaction",
      caip2: "eip155:84532",
    });

    await ctx.api.editMessageText(
      ctx.chat.id,
      statusMsg.message_id,
      `✅ Approval complete!\n` +
        `Transaction: ${getExplorerLink(approveResult.hash)}\n\n` +
        `🔄 Step 2/2: Placing your bet...`
    );

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const bettingInterface = new ethers.Interface(betAbi);

    const args = [
      BigInt(poolId || "0"),
      BigInt(selectedOption || "0"),
      ethers.parseUnits(amount || "0", 6).toString(),
      wallet.address,
      BigInt(tokenType || "0"),
    ];

    const data = bettingInterface.encodeFunctionData("placeBet", args);
    const updatedNonce = await provider.getTransactionCount(wallet.address);

    const transaction = {
      from: wallet.address,
      to: APP_ADDRESS,
      data,
      value: "0x0",
      gasLimit: "0x100000",
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce: "0x" + updatedNonce.toString(16),
      chainId: 84532,
    };

    const result = await privy.walletApi.ethereum.sendTransaction({
      walletId: wallet.wallet.id,
      transaction,
      method: "signAndSendTransaction",
      caip2: "eip155:84532",
    });

    const newBalance = balance - amountValue;

    await ctx.api.editMessageText(
      ctx.chat.id,
      statusMsg.message_id,
      `🎉 Bet placed successfully!\n\n` +
        `Pool: ${poolId}\n` +
        `Option: ${selectedOption}\n` +
        `Amount: ${amount} $POINTS\n` +
        `New balance: ${newBalance.toFixed(2)} $POINTS\n\n` +
        `Transaction: ${getExplorerLink(result.hash)}`
    );
  } catch (error) {
    console.error("Error placing bet:", error);
    let errorMessage = "❌ Failed to place bet.";

    if (error instanceof Error) {
      const errorText = error.message.substring(0, 100);
      errorMessage += ` ${errorText}${errorText.length >= 100 ? "..." : ""}`;
    }

    if (ctx.chat) {
      return ctx.reply(errorMessage);
    }
  }
};

async function startBettingProcess(ctx: Context) {
  const wallet = await getWallet(ctx.from!.id, ctx);
  const provider = new ethers.JsonRpcProvider("https://sepolia.base.org");
  const balance = await checkBalance(provider, wallet!.address);

  return ctx.reply(
    `📊 Place a Bet\n\n` +
      `Your balance: ${balance.toFixed(2)} $POINTS\n\n` +
      `Step 1: Select a betting pool or type /bet <poolId> <option> <amount> 0\n\n` +
      `Example: /bet 12 1 100 0\n\n` +
      `Available pools:`
  );
}

async function checkBalance(
  provider: ethers.JsonRpcProvider,
  address: string
): Promise<number> {
  try {
    const tokenInterface = new ethers.Interface([
      "function balanceOf(address account) external view returns (uint256)",
    ]);

    const contract = new ethers.Contract(
      POINTS_ADDRESS,
      tokenInterface,
      provider
    );

    if (!contract || !contract.balanceOf) {
      throw new Error("Address is required to check balance.");
    }

    const balanceWei = await contract.balanceOf(address);

    return parseFloat(ethers.formatUnits(balanceWei, 6));
  } catch (error) {
    console.error("Error checking balance:", error);
    return 0;
  }
}

function getExplorerLink(hash: string): string {
  return `https://sepolia.basescan.org/tx/${hash}`;
}
