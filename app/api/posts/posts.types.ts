import { Database } from "@/lib/db";
import { UserDisplay } from "@/types";

type DBPost = Database["public"]["Tables"]["posts"]["Row"];

export type Post = DBPost & {
    profiles: UserDisplay;
};

export interface CreatePostBody {
    content: Post["content"];
}
