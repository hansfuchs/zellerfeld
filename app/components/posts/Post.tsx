import Author from "@/lib/components/shared/Author";
import { formatTimeStamp } from "@/lib/time";
import { Post, UserDisplay } from "@/types";
import { useMemo } from "react";

interface Props {
    post: Post;
}

export default async function PostCard({ post }: Props) {
    const user = useMemo<UserDisplay>(
        () => ({
            avatar: post.avatar,
            username: post.username,
        }),
        [post]
    );

    return (
        <div>
            <Author user={user} />

            <div className="mt-4">{post.content}</div>

            <div className="mt-4 text-xs">
                {formatTimeStamp(post.created_at)}
            </div>
        </div>
    );
}
