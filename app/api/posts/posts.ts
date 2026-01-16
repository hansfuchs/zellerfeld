import { Post } from "@/types";

export async function getPosts(username?: string): Promise<Post[]> {
    const url = username
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${username}`
        : `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`;

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Unable to fetch posts`);

    const data = await response.json();

    return data;
}
