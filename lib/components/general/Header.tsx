"use client";

import { useAuth } from "@/lib/auth/auth.context";
import Link from "next/link";
import Avatar from "@/lib/components/shared/Avatar";

export default function Header() {
    const { user, loading } = useAuth();

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
                            <Avatar
                                username={user.username}
                                avatar={user.avatar}
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
