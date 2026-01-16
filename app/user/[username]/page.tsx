import { UserDetails } from "@/types";
import { getUser } from "@/lib/auth/auth.server";
import { getPosts } from "@/app/api/posts/posts";

import UserDetailsSection from "./components/UserDetailsSection";
import PostForm from "@/lib/components/shared/posts/PostForm";
import PostFeed from "@/lib/components/shared/posts/PostFeed";

export default async function ProfilePage({
    params,
}: {
    params: Promise<{ username: string }>;
}) {
    const { username } = await params;

    // NOTE: I know I could also just fetch the data directly in here, but I wanted to use the API route
    async function getUserDetails(): Promise<UserDetails> {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`
        );
        if (!response.ok)
            throw new Error(`Unable to fetch user with username ${username}`);

        const data = await response.json();

        return data;
    }

    const user = await getUser();
    const posts = await getPosts(username);

    const userDetails: UserDetails = await getUserDetails();

    return (
        <div className="flex h-full flex-col">
            <div className="flex flex-col gap-8">
                <PostForm />
                <UserDetailsSection user={userDetails} />
            </div>

            <div className="mt-16 mb-4">Posts</div>

            <PostFeed posts={posts} />
        </div>
    );
}
