"use server";

import { revalidatePath } from "next/cache";

import { createDBClient } from "@/lib/db/db.server";
import { getUser } from "@/lib/auth/auth.server";

export async function createPost(content: string) {
    const user = await getUser();
    if (!user) {
        return { error: "Unauthorized" };
    }

    const client = await createDBClient();
    const { error } = await client.from("posts").insert({
        content,
        userId: user.id,
    });

    if (error) {
        return { error: "Unable to create post" };
    }

    revalidatePath("/");
    revalidatePath("/user");

    return { success: true };
}
