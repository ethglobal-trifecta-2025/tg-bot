import { Bot } from "grammy";

import { config } from "dotenv";
import { wallet } from "./commands/wallet";
import { help } from "./commands/help";
import { handlePoolsNavigation, poolsCommand } from "./commands/pools";
import { poolCommand } from "./commands/pool";
import { betsCommand } from "./commands/bets";

config();

if (!process.env.BOT_ID) {
  throw new Error("Please set your bot token in the .env file");
}

const bot = new Bot(process.env.BOT_ID);

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.command("help", (ctx) => {
  help(ctx);
});

bot.command("wallet", (ctx) => {
  wallet(ctx);
});

bot.command("pools", (ctx) => {
  poolsCommand(ctx);
});

bot.command("pool", (ctx) => {
  poolCommand(ctx);
});

bot.command("bets", (ctx) => {
  betsCommand(ctx);
});

bot.command("bet", (ctx) => {
  ctx.reply("Bet command is not implemented yet.");
});

bot.command("withdraw", (ctx) => {
  ctx.reply("Withdraw command is not implemented yet.");
});

bot.callbackQuery("wallet_cmd", async (ctx) => {
  await ctx.answerCallbackQuery(); // This stops the loading animation
  await wallet(ctx); // Call your wallet function
});

bot.callbackQuery("pools_cmd", async (ctx) => {
  await ctx.answerCallbackQuery();
  await poolsCommand(ctx);
});

bot.callbackQuery("bets_cmd", async (ctx) => {
  await ctx.answerCallbackQuery();
  await betsCommand(ctx);
});

bot.callbackQuery("withdraw_cmd", async (ctx) => {
  await ctx.answerCallbackQuery();
  await ctx.reply("Withdraw command is not implemented yet.");
});

bot.callbackQuery(/^pools?_/, async (ctx) => {
  await handlePoolsNavigation(ctx);
});

bot.on("message", (ctx) => ctx.reply("Got another message!"));

bot.start();
