import { createDBClient } from "@/lib/db/db.server";

export async function getUser() {
    const supabase = await createDBClient();

    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();
    if (error) {
        console.error("Error fetching user:", error);
        return null;
    }

    return user;
}
