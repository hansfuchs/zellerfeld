import { createBrowserClient } from "@supabase/ssr";

export function createDBClient() {
    return createBrowserClient(
        import.meta.env.NEXT_PUBLIC_SUPABASE_URL,
        import.meta.env.NEXT_PUBLIC_SUPABASE_KEY
    );
}
