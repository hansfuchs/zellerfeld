import { UserDetails } from "@/types";
import { getUser } from "@/lib/auth/auth.server";

import UserDetailsSection from "./components/UserDetailsSection";

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

    const userDetails: UserDetails = await getUserDetails();

    return <UserDetailsSection user={userDetails} />;
}
