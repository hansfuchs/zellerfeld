import { createBrowserClient } from "@supabase/ssr";
import { Database } from "./db.types";

export function createDBClient() {
    return createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_KEY
    );
}
