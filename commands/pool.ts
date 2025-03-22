import type { CommandContext, Context } from "grammy";
import { apolloClient } from "../lib/apolloClient";
import { GET_POOL } from "../queries";
import {
  OrderDirection,
  Pool_OrderBy,
  type Pool,
} from "../lib/__generated__/graphql";
import {
  formatDate,
  formatPoints,
  formatStatus,
  formatUSD,
} from "../utils/format";

export const poolCommand = async (ctx: CommandContext<Context>) => {
  if (!ctx.message) {
    return ctx.reply("Message not found.");
  }

  const inputPoolId = ctx.message.text.split(" ")[1];
  if (!inputPoolId) {
    return ctx.reply("Please provide a pool ID.\nUsage: /pool [pool_id]");
  }

  try {
    const poolResult = await apolloClient.query({
      query: GET_POOL,
      variables: {
        poolId: inputPoolId,
        orderBy: Pool_OrderBy.CreatedAt,
        orderDirection: OrderDirection.Desc,
      },
    });

    if (poolResult.error) {
      console.error("Error fetching pool:", poolResult.error);
      return ctx.reply("Error fetching pool data.");
    }

    if (!poolResult.data || !poolResult.data.pool) {
      return ctx.reply(`No data found for pool ID: ${inputPoolId}`);
    }

    const poolData = poolResult.data.pool as Pool;
    const message = formatPoolMessage(poolData);
    return ctx.reply(message, { parse_mode: "HTML" });
  } catch (error) {
    console.error("Exception in pool command:", error);
    return ctx.reply("An unexpected error occurred while fetching pool data.");
  }
};

function formatPoolMessage(poolData: Pool): string {
  const {
    id,
    poolId,
    question,
    options,
    status,
    chainName,
    betsCloseAt,
    usdcBetTotals,
    pointsBetTotals,
    usdcVolume,
    pointsVolume,
    winningOption,
    createdBlockTimestamp,
    isDraw,
  } = poolData;

  const totalPoints = pointsBetTotals.reduce(
    (sum, points) => sum + BigInt(points),
    BigInt(0)
  );

  const totalUsdc = usdcBetTotals.reduce(
    (sum, usdc) => sum + BigInt(usdc),
    BigInt(0)
  );

  const pointsPercentages =
    totalPoints > BigInt(0)
      ? pointsBetTotals.map((points) =>
          Number((BigInt(points) * BigInt(100)) / totalPoints)
        )
      : options.map(() => 0);

  const usdcPercentages =
    totalUsdc > BigInt(0)
      ? usdcBetTotals.map((usdc) =>
          Number((BigInt(usdc) * BigInt(100)) / totalUsdc)
        )
      : options.map(() => 0);

  const combinedPercentages = options.map((_, index) => {
    if (totalPoints > BigInt(0) && totalUsdc > BigInt(0)) {
      return Math.round(
        ((pointsPercentages[index] || 0) + (usdcPercentages[index] || 0)) / 2
      );
    } else if (totalPoints > BigInt(0)) {
      return pointsPercentages[index];
    } else if (totalUsdc > BigInt(0)) {
      return usdcPercentages[index];
    } else {
      return 0;
    }
  });

  const optionsDisplay = options
    .map((option, index) => {
      const usdcAmount = usdcBetTotals[index] || "0";
      const pointsAmount = pointsBetTotals[index] || "0";
      const percentage = combinedPercentages[index] || 0;

      const isWinner =
        winningOption !== null && index.toString() === winningOption;
      const isDrewOption =
        isDraw && winningOption !== null && index.toString() === winningOption;

      const progressBar = createProgressBar(percentage);

      return `• <b>${option}</b>: ${formatUSD(usdcAmount)} (${formatPoints(
        pointsAmount
      )} points) - ${percentage.toFixed(1)}%\n  ${progressBar}${
        isWinner ? " ✅" : ""
      }${isDrewOption ? " 🤝" : ""}`;
    })
    .join("\n\n");

  return `
<b>🔮 Prediction Pool #${poolId}</b>

<b>❓ Question:</b>
${question}

<b>📊 Options:</b>
${optionsDisplay}

💰 <b>Total Volume:</b> ${formatUSD(usdcVolume)} (${formatPoints(
    pointsVolume
  )} points)
⏰ <b>Betting Closes:</b> ${formatDate(betsCloseAt)}
🆕 <b>Created:</b> ${formatDate(createdBlockTimestamp)}
🔄 <b>Status:</b> ${formatStatus(status)}
⛓️ <b>Chain:</b> ${chainName}

<code>/pool ${id}</code>
`.trim();
}

function createProgressBar(percentage: number): string {
  const filledChar = "█";
  const emptyChar = "░";
  const barLength = 20;
  const filledCount = Math.round((percentage / 100) * barLength);

  return (
    filledChar.repeat(filledCount) +
    emptyChar.repeat(Math.max(0, barLength - filledCount)) +
    ` ${percentage.toFixed(1)}%`
  );
}
