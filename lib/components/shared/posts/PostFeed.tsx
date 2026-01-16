import { Post } from "@/types";
import PostCard from "./PostCard";

interface Props {
    posts: Post[];
}

export default async function PostFeed({ posts }: Props) {
    return (
        <div className="flex flex-col gap-4 overflow-y-auto">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}
