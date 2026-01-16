import { createDBClient } from "@/lib/db/db.server";
import type { NextRequest } from "next/server";

export async function GET(_: NextRequest) {
    const client = await createDBClient();

    const { data: posts, error } = await client
        .from("posts")
        .select(
            `
            *,                                                                    
            profiles (                                                            
            username,                                                           
            avatar                                                              
            )`
        )
        .order("created_at", { ascending: false });
    if (error) {
        return new Response(`Unable to fetch posts`, {
            status: 500,
        });
    }

    return Response.json(posts || []);
}
