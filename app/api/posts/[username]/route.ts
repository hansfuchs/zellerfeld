import { createDBClient } from "@/lib/db/db.server";
import type { NextRequest } from "next/server";

export async function GET(
    _: NextRequest,
    { params }: { params: Promise<{ username: string }> }
) {
    const { username } = await params;

    const client = await createDBClient();

    const { data: posts, error } = await client
        .from("posts")
        .select(
            `
            *,                                                                    
            profiles!inner (                                                            
            username,                                                           
            avatar                                                              
            )`
        )
        .eq("profiles.username", username)
        .order("created_at", { ascending: false });
    if (error) {
        return new Response(
            `Unable to fetch posts of user with username ${username}`,
            {
                status: 400,
            }
        );
    }

    return Response.json(posts || []);
}
