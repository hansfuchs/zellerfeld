import { Database } from "@/lib/db";

export type User = Database["public"]["Tables"]["profiles"]["Row"] & {
    email: string;
};

export type UserDisplay = {
    username: User["username"];
    avatar: User["avatar"];
    created_at: User["created_at"];
};
