import { SupabaseClient } from "@supabase/supabase-js";

const client = new SupabaseClient(
  Bun.env.SUPABASE_URL!,
  Bun.env.SUPABASE_ANON_KEY!,
);

export default client;
