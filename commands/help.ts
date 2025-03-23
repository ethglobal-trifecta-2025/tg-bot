import type { CommandContext, Context } from "grammy";
import { InlineKeyboard } from "grammy";

export const help = async (ctx: CommandContext<Context>) => {
  if (!ctx.from) {
    ctx.reply("User not found.");
    return;
  }

  try {
    const keyboard = new InlineKeyboard()
      .text("💰 Wallet", "wallet_cmd")
      .text("🏊 Pools", "pools_cmd")
      .row()
      .text("🎲 Bets", "bets_cmd")
      .text("💸 Withdraw", "withdraw_cmd");

    const message = `🌟 *Welcome, ${ctx.from.first_name}!* 🌟

I'm your prediction market bot. Here's what I can do for you:

📋 *Available Commands:*
• /start - Begin your journey with me
• /help - Display this helpful guide
• /wallet - View or create your crypto wallet
• /pools - View available prediction pools
• /pool - View details of a specific pool
• /bets - View your active bets
• /bet - Place a new bet
• /withdraw - Withdraw your funds

💡 *Need assistance?*
Just send me a message with your question!`;

    await ctx.reply(message, {
      parse_mode: "Markdown",
      reply_markup: keyboard,
    });
  } catch (error) {
    console.error("Help command error:", error);
    ctx.reply(
      "Sorry, there was an error processing your help request. Please try again later."
    );
  }
};
