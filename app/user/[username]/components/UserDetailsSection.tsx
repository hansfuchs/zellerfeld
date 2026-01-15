import { formatTimeStamp } from "@/lib/time";
import { UserDetails } from "@/types";

import Avatar from "@/lib/components/shared/Avatar";

interface Props {
    user: UserDetails;
}

export default function UserDetailsSection({ user }: Props) {
    return (
        <div>
            <Avatar username={user.username} avatar={user.avatar} size="L" />

            <h1 className="mt-4">{user.username}</h1>

            <div>joined on {formatTimeStamp(user.created_at)}</div>
        </div>
    );
}
