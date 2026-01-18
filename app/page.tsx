import { getUser } from "@/lib/auth/auth.server";
import { getPosts } from "@/app/api/posts/posts";

import PostForm from "@/lib/components/shared/posts/PostForm";
import PostFeed from "@/lib/components/shared/posts/PostFeed";

export default async function Feed({
    searchParams,
}: {
    searchParams: Promise<{ error?: string }>;
}) {
    const { error } = await searchParams;
    const user = await getUser();
    const posts = await getPosts();

    return (
        <div className="flex h-full flex-col">
            {error === "auth_callback_error" && (
                <div className="mb-4 p-4 text-red-500">
                    Something went wrong during authentication. Please try
                    again.
                </div>
            )}

            {user && <PostForm />}

            <div className="mt-16 mb-4">All posts</div>

            <PostFeed posts={posts} />
        </div>
    );
}
