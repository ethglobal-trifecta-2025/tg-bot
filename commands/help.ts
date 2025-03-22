import type { CommandContext, Context } from "grammy";

export const help = async (ctx: CommandContext<Context>) => {
  if (!ctx.from) {
    ctx.reply("User not found.");
    return;
  }

  try {
    const message = `Hello, ${ctx.from.first_name}!\n\nI am your friendly bot. Here are some commands you can use:\n\n/start - Start the bot\n/help - Show this help message\n/wallet - Create or view your wallet\n\nFeel free to ask me anything!`;
    ctx.reply(message);
  } catch (error) {
    console.error("Help command error:", error);
    ctx.reply(
      "Sorry, there was an error processing your help request. Please try again later."
    );
  }
};
