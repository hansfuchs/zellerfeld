import { Database } from "@/lib/db";

export type User = Database["public"]["Tables"]["profiles"]["Row"] & {
    email: string;
};

export type UserDisplay = {
    id: User["id"];
    username: User["username"];
    avatar: User["avatar"];
};
