import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "./db.types";

export async function createDBClient() {
    const cookieStore = await cookies();

    const dbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const dbKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

    if (!dbUrl || !dbKey) throw new Error("Missing DB env variables");

    return createServerClient<Database>(dbUrl, dbKey, {
        cookies: {
            getAll() {
                return cookieStore.getAll();
            },
            setAll(cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        cookieStore.set(name, value, options)
                    );
                } catch {
                    // The `setAll` method was called from a Server Component.
                    // This can be ignored if you have middleware refreshing
                    // user sessions.
                }
            },
        },
    });
}
