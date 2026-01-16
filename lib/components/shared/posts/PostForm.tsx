"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth/auth.context";
import { createPost } from "@/lib/actions/posts.actions";

import TextArea from "@/lib/components/ui/TextArea";
import Button from "@/lib/components/ui/Button";

export default function PostForm() {
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { user } = useAuth();

    async function handleSubmit(e: React.FormEvent) {
        if (!user) return;

        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const result = await createPost(content);
            if (result.error) {
                setError(result.error);
            } else {
                setContent("");
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col border border-white"
            >
                <TextArea
                    value={content}
                    placeholder="Your message..."
                    maxLength={280}
                    onChange={(value) => setContent(value)}
                />
                <Button type="submit" disabled={loading}>
                    {loading ? "Posting..." : "Post"}
                </Button>
            </form>

            {error && <div className="mt-4 text-red-500">{error}</div>}
        </>
    );
}
