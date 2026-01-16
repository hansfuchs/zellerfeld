import Author from "@/lib/components/shared/Author";
import { formatTimeStamp } from "@/lib/time";
import { Post } from "@/types";

interface Props {
    post: Post;
}

export default async function PostCard({ post }: Props) {
    return (
        <div className="border border-white p-4">
            <Author
                user={{
                    username: post.profiles.username,
                    avatar: post.profiles.avatar,
                }}
            />

            <div className="mt-4">{post.content}</div>

            <div className="mt-4 text-xs">
                {formatTimeStamp(post.created_at)}
            </div>
        </div>
    );
}
