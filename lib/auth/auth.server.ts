import { createDBClient } from "@/lib/db/db.server";

export async function getUser() {
    const supabase = await createDBClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user || null;
}
