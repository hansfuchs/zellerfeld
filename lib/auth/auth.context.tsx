"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { createDBClient } from "@/lib/db/db.client";
import { User } from "@/types";

interface AuthContextType {
    user: User | undefined;
    session: Session | undefined;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (
        email: string,
        password: string,
        username: string
    ) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | undefined>(undefined);
    const [session, setSession] = useState<Session | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    const supabase = createDBClient();

    useEffect(() => {
        async function getSession() {
            try {
                setLoading(true);

                const {
                    data: { session },
                } = await supabase.auth.getSession();

                await setAuthContext(session);
            } finally {
                setLoading(false);
            }
        }

        async function setAuthContext(session: Session | null) {
            if (!session) {
                setSession(undefined);
                setUser(undefined);
                return;
            }

            const {
                data: { avatar, username },
            } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", session.user.id)
                .single()
                .throwOnError();

            setSession(session);
            setUser({
                created_at: session.user.created_at,
                email: session.user.email!,
                id: session.user.id,
                username,
                avatar,
            });
        }

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(async (_event, session) => {
            try {
                setLoading(true);

                await setAuthContext(session);
            } finally {
                setLoading(false);
            }
        });

        getSession();

        return () => {
            subscription.unsubscribe();
        };
    }, [supabase]);

    async function signIn(email: string, password: string) {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) throw error;
    }

    async function signUp(email: string, password: string, username: string) {
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username,
                },
            },
        });
        if (error) throw error;
    }

    async function signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    }

    return (
        <AuthContext.Provider
            value={{ user, session, loading, signIn, signUp, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");

    return context;
}
