"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth/auth.context";
import { useRouter } from "next/navigation";
import Input from "@/lib/components/ui/Input";
import Button from "@/lib/components/ui/Button";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();

    const { user, signIn } = useAuth();

    useEffect(() => {
        if (!user) return;

        router.push("/");
    }, [user, router]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        try {
            await signIn(email, password);
            router.push("/");
            setError("");
        } catch (error) {
            console.error("Login error:", error);

            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex w-60 flex-col border border-white"
            >
                <Input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(value) => setEmail(value)}
                />
                <Input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(value) => setPassword(value)}
                />

                <Button type="submit" disabled={loading}>
                    {loading ? "Signing in..." : "Sign In"}
                </Button>
            </form>

            {error && <div className="mt-4 text-red-500">{error}</div>}
        </>
    );
}
