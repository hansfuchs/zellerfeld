import { getUser } from "@/lib/auth/auth.server";
import { getPosts } from "@/app/api/posts/posts";

import PostForm from "@/lib/components/shared/posts/PostForm";
import PostFeed from "@/lib/components/shared/posts/PostFeed";

export default async function Feed() {
    const user = await getUser();
    const posts = await getPosts();

    return (
        <div className="flex h-full flex-col">
            <PostForm />

            <div className="mt-16 mb-4">All posts</div>

            <PostFeed posts={posts} />
        </div>
    );
}
