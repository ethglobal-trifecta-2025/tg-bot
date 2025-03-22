import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/database.types";

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  throw new Error("Supabase URL and Anon Key must be provided");
}

export const supabase = createClient<Database>(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);
