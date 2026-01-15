import { UserDisplay } from "@/types";

import Link from "next/link";
import Avatar from "./Avatar";

interface Props {
    user: UserDisplay;
}

export default async function Author({ user }: Props) {
    return (
        <Link
            href={`/user/${user.username}`}
            className="flex w-fit items-center gap-4"
        >
            <Avatar username={user.username} avatar={user.avatar} size="S" />

            <div>{user.username}</div>
        </Link>
    );
}
