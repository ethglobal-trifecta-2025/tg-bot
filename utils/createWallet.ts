import { privy } from "../lib/privy";
import { supabase } from "../lib/supabase";

export const createWallet = async (tg_id: number) => {
  const { id, address, chainType } = await privy.walletApi.create({
    chainType: "ethereum",
  });

  if (!id || !address || !chainType) {
    throw new Error("Error creating wallet");
  }

  const { error } = await supabase
    .from("wallets")
    .insert({ tg_id, wallet_id: id });

  if (error) {
    console.error("Error saving wallet to database:", error);
    throw new Error("Error saving wallet to database");
  }
  return { id, address, chainType };
};
