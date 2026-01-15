import { createBrowserClient } from "@supabase/ssr";
import { Database } from "./db.types";

export function createDBClient() {
    return createBrowserClient<Database>(
        import.meta.env.NEXT_PUBLIC_SUPABASE_URL,
        import.meta.env.NEXT_PUBLIC_SUPABASE_KEY
    );
}
