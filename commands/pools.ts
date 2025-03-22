import type { Context } from "grammy";
import { InlineKeyboard } from "grammy";
import { PoolStatus, type Pool } from "../lib/__generated__/graphql";
import { apolloClient } from "../lib/apolloClient";
import { GET_POOLS } from "../queries";

enum PoolFilterType {
  ACTIVE = "active",
  TRENDING = "trending",
  NEWEST = "newest",
  HIGHEST_VOLUME = "highest_volume",
  ENDING_SOON = "ending_soon",
}

interface PaginationState {
  offset: number;
  limit: number;
}

function formatPoolMessage(pool: Pool): string {
  const formattedDate = new Date(
    Number(pool.createdAt) * 1000
  ).toLocaleString();

  const totalBets = pool.bets?.length || 0;
  const totalVolume =
    pool.bets?.reduce((sum, bet) => sum + parseFloat(bet.amount), 0) || 0;
  const formattedVolume = totalVolume.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });

  const optionsText = pool.options
    .map((opt: string, i: number) => {
      const optionBets = pool.bets?.filter((bet) => bet.option === i) || [];
      const optionVolume = optionBets.reduce(
        (sum, bet) => sum + parseFloat(bet.amount),
        0
      );
      const odds =
        totalVolume > 0
          ? ((optionVolume / totalVolume) * 100).toFixed(1) + "%"
          : "N/A";

      return `   ${i + 1}. ${opt} (${odds})`;
    })
    .join("\n");

  let timeRemaining = "";
  if (pool.betsCloseAt) {
    const endTime = Number(pool.betsCloseAt) * 1000;
    const now = Date.now();
    const remainingMs = endTime - now;

    if (remainingMs > 0) {
      const days = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      timeRemaining = `\n⏳ *Time Remaining:* ${days}d ${hours}h`;
    } else {
      timeRemaining = "\n⏳ *Status:* Awaiting resolution";
    }
  }

  return (
    `🔷 *Pool ID:* \`${pool.poolId}\`\n\n` +
    `❓ *Question:* ${pool.question}\n\n` +
    `⚡️ *Options:*\n${optionsText}\n\n` +
    `💰 *Volume:* ${formattedVolume} tokens\n` +
    `👥 *Participants:* ${totalBets}\n` +
    `🔹 *Status:* ${pool.status}${timeRemaining}\n` +
    `🕒 *Created:* ${formattedDate}`
  );
}

function formatPoolsList(pools: Pool[]): string {
  if (pools.length === 0) {
    return "No pools found matching your criteria.";
  }

  let message = "📊 *Available Pools:*\n\n";

  pools.forEach((pool, index) => {
    const totalVolume = Number(pool.usdcVolume) + Number(pool.pointsVolume);

    message += `${index + 1}. *${pool.question}*\n`;
    message += `   ID: \`${pool.poolId}\` | Vol: ${Number(
      Number(totalVolume) / 10 ** 6
    )} | Options: ${pool.options.length}\n\n`;
  });

  message += "Use /pool [ID] to see details or select a pool below.";

  return message;
}

function getPoolQueryParams(filterType: PoolFilterType): any {
  const now = Math.floor(Date.now() / 1000);

  switch (filterType) {
    case PoolFilterType.ACTIVE:
      return {
        filter: { status: PoolStatus.Pending },
        orderBy: "createdAt",
        orderDirection: "desc",
      };

    case PoolFilterType.TRENDING:
      return {
        filter: { status: PoolStatus.Pending },
        orderBy: "volume",
        orderDirection: "desc",
      };

    case PoolFilterType.NEWEST:
      return {
        filter: {},
        orderBy: "createdAt",
        orderDirection: "desc",
      };

    case PoolFilterType.HIGHEST_VOLUME:
      return {
        filter: {},
        orderBy: "volume",
        orderDirection: "desc",
      };

    case PoolFilterType.ENDING_SOON:
      return {
        filter: {
          status: PoolStatus.Pending,
          endDate_gt: now,
          endDate_lt: now + 86400 * 3,
        },
        orderBy: "endDate",
        orderDirection: "asc",
      };

    default:
      return {
        filter: { status: PoolStatus.Pending },
        orderBy: "createdAt",
        orderDirection: "desc",
      };
  }
}

function createPoolsKeyboard(
  pools: Pool[],
  currentFilter: PoolFilterType,
  pagination: PaginationState
): InlineKeyboard {
  const keyboard = new InlineKeyboard();

  pools.slice(0, 5).forEach((pool, index) => {
    keyboard.text(`Pool ${index + 1}`, `pool_view_${pool.poolId}`).row();
  });

  keyboard
    .text("🔥 Trending", `pools_filter_${PoolFilterType.TRENDING}`)
    .text("🆕 Newest", `pools_filter_${PoolFilterType.NEWEST}`)
    .row()
    .text("💰 Highest Vol", `pools_filter_${PoolFilterType.HIGHEST_VOLUME}`)
    .text("⏱️ Ending Soon", `pools_filter_${PoolFilterType.ENDING_SOON}`)
    .row();

  if (pools.length > 0) {
    const prevOffset = Math.max(0, pagination.offset - pagination.limit);
    const nextOffset = pagination.offset + pagination.limit;

    keyboard
      .text("⬅️ Prev", `pools_page_${prevOffset}_${currentFilter}`)
      .text("➡️ Next", `pools_page_${nextOffset}_${currentFilter}`);
  }

  return keyboard;
}

async function fetchPools(
  queryParams: any,
  pagination: PaginationState
): Promise<{ pools: Pool[] | null; error: Error | null }> {
  if (!queryParams) {
    return { pools: null, error: new Error("Invalid query parameters") };
  }

  try {
    const { data, error } = await apolloClient.query({
      query: GET_POOLS,
      variables: {
        ...queryParams,
        first: pagination.limit,
        skip: pagination.offset,
      },
      fetchPolicy: "network-only",
    });

    if (error) {
      console.error("Error fetching pools:", error);
      return { pools: null, error };
    }

    return { pools: data.pools, error: null };
  } catch (err) {
    console.error("Exception while fetching pools:", err);
    return {
      pools: null,
      error: err instanceof Error ? err : new Error(String(err)),
    };
  }
}

export const poolsCommand = async (ctx: Context): Promise<void> => {
  try {
    const pagination: PaginationState = {
      offset: 0,
      limit: 10,
    };

    const queryParams = getPoolQueryParams(PoolFilterType.ACTIVE);
    const { pools, error } = await fetchPools(queryParams, pagination);

    if (error || !pools) {
      await ctx.reply(
        "Sorry, there was an error fetching pools. Please try again later."
      );
      return;
    }

    if (pools.length === 0) {
      await ctx.reply("No active pools found at the moment.");
      return;
    }

    const keyboard = createPoolsKeyboard(
      pools,
      PoolFilterType.ACTIVE,
      pagination
    );

    await ctx.reply(formatPoolsList(pools), {
      reply_markup: keyboard,
      parse_mode: "Markdown",
    });
  } catch (err) {
    console.error("Error in pools command:", err);
    await ctx.reply("An unexpected error occurred. Please try again later.");
  }
};

export const handlePoolsNavigation = async (ctx: Context): Promise<void> => {
  if (!ctx.callbackQuery?.data) return;

  await ctx.answerCallbackQuery(); // Important: Always acknowledge the callback query first

  try {
    const callbackData = ctx.callbackQuery.data.toString();

    if (callbackData.startsWith("pool_view_")) {
      const poolId = callbackData.replace("pool_view_", "");

      const { data, error } = await apolloClient.query({
        query: GET_POOLS,
        variables: {
          filter: { poolId },
          first: 1,
          orderBy: "createdAt",
          orderDirection: "desc",
        },
      });

      if (error || !data.pools || data.pools.length === 0) {
        await ctx.reply("Pool not found or error fetching details.");
        return;
      }

      const backKeyboard = new InlineKeyboard().text(
        "« Back to Pools",
        "pools_back_to_list"
      );

      await ctx.editMessageText(formatPoolMessage(data.pools[0]), {
        reply_markup: backKeyboard,
        parse_mode: "Markdown",
      });
      return;
    }

    if (callbackData.startsWith("pools_filter_")) {
      const filterType = callbackData.replace(
        "pools_filter_",
        ""
      ) as PoolFilterType;

      const pagination: PaginationState = {
        offset: 0,
        limit: 10,
      };

      const queryParams = getPoolQueryParams(filterType);
      const { pools, error } = await fetchPools(queryParams, pagination);

      if (error || !pools) {
        await ctx.reply("Error fetching pools with this filter.");
        return;
      }

      await ctx.editMessageText(formatPoolsList(pools), {
        reply_markup: createPoolsKeyboard(pools, filterType, pagination),
        parse_mode: "Markdown",
      });
      return;
    }

    if (callbackData.startsWith("pools_page_")) {
      const parts = callbackData.replace("pools_page_", "").split("_");
      const offset = parseInt(parts[0] || "0");
      const filterType = (parts[1] || "active") as PoolFilterType;

      const pagination: PaginationState = {
        offset,
        limit: 10,
      };

      const queryParams = getPoolQueryParams(filterType);
      const { pools, error } = await fetchPools(queryParams, pagination);

      if (error || !pools) {
        await ctx.reply("Error fetching more pools.");
        return;
      }

      await ctx.editMessageText(formatPoolsList(pools), {
        reply_markup: createPoolsKeyboard(pools, filterType, pagination),
        parse_mode: "Markdown",
      });
      return;
    }

    if (callbackData === "pools_back_to_list") {
      const pagination: PaginationState = {
        offset: 0,
        limit: 10,
      };

      const queryParams = getPoolQueryParams(PoolFilterType.ACTIVE);
      const { pools, error } = await fetchPools(queryParams, pagination);

      if (error || !pools) {
        await ctx.reply("Error returning to pools list.");
        return;
      }

      await ctx.editMessageText(formatPoolsList(pools), {
        reply_markup: createPoolsKeyboard(
          pools,
          PoolFilterType.ACTIVE,
          pagination
        ),
        parse_mode: "Markdown",
      });
      return;
    }
  } catch (err) {
    console.error("Error in pools navigation handler:", err);
    await ctx.reply("An error occurred. Please try again.");
  }
};
