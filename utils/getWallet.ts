import { supabase } from "../lib/supabase";
import { privy } from "../lib/privy"; // Import privy
import { createWallet } from "./createWallet";
import type { Context } from "grammy";

export const getWallet = async (tg_id: number, ctx: Context) => {
  const { data: wallet, error } = await supabase
    .from("wallets")
    .select("*")
    .eq("tg_id", tg_id)
    .single();

  if (error) {
    if (error.code !== "PGRST116") {
      console.error("Error fetching wallet:", error);
      return null;
    }
  }

  let address: string;
  let chainType: string;
  let isNewWallet = false;

  if (wallet && wallet?.wallet_id) {
    const walletP = await privy.walletApi.getWallet({
      id: wallet.wallet_id,
    });

    if (!walletP) {
      if (ctx) ctx.reply("Error fetching wallet.");
      return null;
    }

    address = walletP.address;
    chainType = "ethereum";

    return { address, chainType, isNewWallet, wallet: walletP };
  } else {
    if (!ctx.chat) {
      if (ctx) ctx.reply("Chat information not available.");
      return null;
    }

    const result = await createWallet(tg_id, ctx.chat.id);
    address = result.address;
    chainType = result.chainType;
    isNewWallet = true;

    return { address, chainType, isNewWallet, wallet: result };
  }
};
