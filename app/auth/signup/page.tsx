"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth/auth.context";
import { useRouter } from "next/navigation";

import Input from "@/lib/components/ui/Input";
import Button from "@/lib/components/ui/Button";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();

    const { user, signUp } = useAuth();

    useEffect(() => {
        if (!user) return;

        router.push("/");
    }, [user, router]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        try {
            await signUp(email, password, username);
            setSuccess(true);
            setError("");
        } catch (error) {
            console.error("Signup error:", error);

            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {!success && (
                <form
                    onSubmit={handleSubmit}
                    className="flex w-60 flex-col border border-white"
                >
                    <Input
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={(value) => setUsername(value)}
                    />
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
                        {loading ? "Creating account..." : "Sign Up"}
                    </Button>
                </form>
            )}

            {error && <div className="mt-4 text-red-500">{error}</div>}

            {success && (
                <div className="mt-16">
                    <div>Awesome! Your account was sucessfully created.</div>
                    <div>Please check your mail for a confirmation link.</div>
                    <div>Be sure to check the spam folder, too.</div>
                </div>
            )}
        </>
    );
}
