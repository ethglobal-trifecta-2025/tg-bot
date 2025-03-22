import type { CommandContext, Context } from "grammy";
import { getWallet } from "../utils/getWallet";

export const wallet = async (ctx: CommandContext<Context>) => {
  if (!ctx.from) {
    return ctx.reply("User not found.");
  }

  try {
    const wallet = await getWallet(ctx.from.id);

    if (!wallet) {
      return ctx.reply("Error fetching wallet.");
    }

    const { address, chainType, isNewWallet } = wallet;

    const message = isNewWallet
      ? `✅ New wallet created!\n\nNetwork: ${wallet.chainType.toUpperCase()}\nAddress: \`${address}\`\n\n(The full address has been copied to your clipboard)`
      : `Your ${chainType.toUpperCase()} wallet:\n\nAddress: \`${address}\`\n\n(Use this address to receive tokens)`;

    ctx.reply(message, { parse_mode: "Markdown" });
  } catch (error) {
    console.error("Wallet command error:", error);
    ctx.reply(
      "Sorry, there was an error processing your wallet request. Please try again later."
    );
  }
};
