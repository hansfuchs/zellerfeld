import { UserDisplay } from "@/types";

import Image from "next/image";
import Link from "next/link";

interface Props {
    user: UserDisplay;
}

export default async function Author({ user }: Props) {
    return (
        <Link
            href={`/user/${user.username}`}
            className="flex w-fit items-center gap-4"
        >
            <div className="h-8 w-8">
                {user.avatar ? (
                    <Image
                        src={user.avatar}
                        alt={`Image of user ${user.username}`}
                        className="h-full w-full"
                    />
                ) : (
                    <div className="h-full w-full bg-amber-700"></div>
                )}
            </div>

            <div>{user.username}</div>
        </Link>
    );
}
