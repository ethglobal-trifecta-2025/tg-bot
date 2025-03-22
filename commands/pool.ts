import type { CommandContext, Context } from "grammy";
import { apolloClient } from "../lib/apolloClient";
import { GET_POOL } from "../queries";
import {
  OrderDirection,
  Pool_OrderBy,
  PoolStatus,
} from "../lib/__generated__/graphql";

// Define the Pool type based on the provided schema
type Pool = {
  __typename?: "Pool";
  bets: Array<any>; // Changed from Bet to any for simplification
  betsCloseAt: string; // BigInt output as string
  chainId: string; // BigInt output as string
  chainName: string;
  closureCriteria: string;
  closureInstructions: string;
  createdAt: string; // BigInt output as string
  createdBlockNumber: string; // BigInt output as string
  createdBlockTimestamp: string; // BigInt output as string
  createdTransactionHash: string; // Bytes output as string
  gradedBlockNumber: string; // BigInt output as string
  gradedBlockTimestamp: string; // BigInt output as string
  gradedTransactionHash: string; // Bytes output as string
  id: string;
  isDraw: boolean;
  lastUpdatedBlockNumber: string; // BigInt output as string
  lastUpdatedBlockTimestamp: string; // BigInt output as string
  lastUpdatedTransactionHash: string; // Bytes output as string
  options: Array<string>;
  originalTruthSocialPostId: string;
  pointsBetTotals: Array<string>; // BigInt output as string array
  pointsVolume: string; // BigInt output as string
  poolId: string; // BigInt output as string
  question: string;
  status: PoolStatus;
  usdcBetTotals: Array<string>; // BigInt output as string array
  usdcVolume: string; // BigInt output as string
  winningOption: string; // BigInt output as string
};

export const poolCommand = async (ctx: CommandContext<Context>) => {
  // Extract pool ID from command like /pool 2
  if (!ctx.message) {
    return ctx.reply("Message not found.");
  }

  const inputPoolId = ctx.message.text.split(" ")[1];
  if (!inputPoolId) {
    return ctx.reply("Please provide a pool ID.\nUsage: /pool [pool_id]");
  }

  try {
    // Fetch pool data from Apollo client
    const poolResult = await apolloClient.query({
      query: GET_POOL,
      variables: {
        poolId: inputPoolId,
        orderBy: Pool_OrderBy.CreatedAt,
        orderDirection: OrderDirection.Desc, // Fixed variable name
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

    // Format pool data in a visually appealing way
    const message = formatPoolMessage(poolData);

    // Send the formatted message
    return ctx.reply(message, { parse_mode: "HTML" });
  } catch (error) {
    console.error("Exception in pool command:", error);
    return ctx.reply("An unexpected error occurred while fetching pool data.");
  }
};

/**
 * Format pool data into a beautiful HTML message
 */
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

  // Format numbers with commas and limit decimal places
  const formatUSD = (value: string) => {
    // Convert from wei (assuming 6 decimals for USDC)
    const dollars = parseInt(value) / 1_000_000;
    return `$${dollars.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
  };

  const formatPoints = (value: string) => {
    // Convert from wei (assuming 18 decimals for points)
    const points = parseInt(value) / 1_000_000_000_000_000_000;
    return points.toLocaleString("en-US", { maximumFractionDigits: 2 });
  };

  // Format timestamp to readable date
  const formatDate = (timestamp: string) => {
    return new Date(parseInt(timestamp) * 1000).toLocaleString();
  };

  // Format status with emoji
  const formatStatus = (status: PoolStatus) => {
    switch (status) {
      case PoolStatus.Pending:
        return "🟢 Active";
      case PoolStatus.Graded:
        return "✅ Graded";
      default:
        return status;
    }
  };

  // Calculate odds and create options display
  const optionsDisplay = options
    .map((option, index) => {
      const usdcAmount = usdcBetTotals[index] || "0";
      const pointsAmount = pointsBetTotals[index] || "0";

      // Calculate percentage of total bets
      const totalUsdcBets = usdcBetTotals.reduce(
        (sum, bet) => sum + (parseInt(bet) || 0),
        0
      );

      const percentage =
        totalUsdcBets > 0 ? (parseInt(usdcAmount) / totalUsdcBets) * 100 : 0;

      // Determine if this is the winning option
      const isWinner = winningOption && index.toString() === winningOption;

      return `• <b>${option}</b>: ${formatUSD(usdcAmount)} (${formatPoints(
        pointsAmount
      )} points) - ${percentage.toFixed(1)}%${isWinner ? " ✅" : ""}${
        isDraw ? " 🤝" : ""
      }`;
    })
    .join("\n");

  // Build a beautiful message with emoji and formatting
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
