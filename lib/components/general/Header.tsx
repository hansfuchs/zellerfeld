"use client";

import { useAuth } from "@/lib/auth/auth.context";
import Link from "next/link";
import Avatar from "@/lib/components/shared/Avatar";
import { useRouter } from "next/navigation";

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
        <div className="mb-8 flex w-full justify-end">
            {loading ? (
                "..."
            ) : (
                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            <Link href={`/user/${user.username}`}>
                                <button>Profile</button>
                            </Link>

                            <button onClick={logout}>Logout</button>

                            <Avatar
                                username={user.username}
                                avatar={user.avatar}
                                size="S"
                            />
                        </>
                    ) : (
                        <>
                            <Link href="/auth/login">
                                <button>Login</button>
                            </Link>
                            <Link href="/auth/signup">
                                <button>Sign Up</button>
                            </Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
