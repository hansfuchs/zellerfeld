"use client";

import { useAuth } from "@/lib/auth/auth.context";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Avatar from "@/lib/components/shared/Avatar";
import Button from "@/lib/components/ui/Button";

export default function Header() {
    const { user, loading, signOut } = useAuth();
    const router = useRouter();

    async function logout() {
        try {
            await signOut();
            router.push("/");
        } catch (e) {
            console.error("Oops... Unable to logout???");
        }
    }

    return (
        <div className="mb-8 flex w-full justify-between">
            <Link href="/">
                <Button>Feed</Button>
            </Link>

            {loading ? (
                "..."
            ) : (
                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            <Link href={`/user/${user.username}`}>
                                <Button>Profile</Button>
                            </Link>

                            <Button onClick={logout}>Logout</Button>

                            <Avatar
                                username={user.username}
                                avatar={user.avatar}
                                size="S"
                            />
                        </>
                    ) : (
                        <>
                            <Link href="/auth/login">
                                <Button>Login</Button>
                            </Link>
                            <Link href="/auth/signup">
                                <Button>Sign Up</Button>
                            </Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
