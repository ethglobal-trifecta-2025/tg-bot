import { supabase } from "../lib/supabase";
import { privy } from "../lib/privy"; // Import privy
import { createWallet } from "./createWallet";

export const getWallet = async (tg_id: number, ctx?: any) => {
  const { data: wallet, error } = await supabase
    .from("wallets")
    .select("*")
    .eq("tg_id", tg_id)
    .single();

  if (error) {
    console.error("Error fetching wallet:", error);
    return null;
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
    const result = await createWallet(tg_id);
    address = result.address;
    chainType = result.chainType;
    isNewWallet = true;

    return { address, chainType, isNewWallet, wallet: result };
  }
};
