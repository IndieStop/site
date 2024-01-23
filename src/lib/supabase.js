import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	import.meta.env.SUPABASE_URL,
	import.meta.env.SUPABASE_ANON_KEY
);

let { data: User, error } = await supabase.from("User").select("*");
export { supabase, User, error };
