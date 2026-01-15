import { createDBClient } from "@/lib/db/db.server";
import type { NextRequest } from "next/server";

export async function GET(
    _: NextRequest,
    { params }: { params: Promise<{ username: string }> }
) {
    const { username } = await params;

    const client = await createDBClient();

    const { data: user, error } = await client
        .from("profiles")
        .select("*")
        .eq("username", username)
        .single();
    if (error) {
        return new Response(`No user with username ${username} exists`, {
            status: 400,
        });
    }

    return Response.json({
        username,
        avatar: user.avatar,
        created_at: user.created_at,
    });
}
