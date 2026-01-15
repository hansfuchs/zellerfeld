namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_ENV: "dev" | "test" | "production";
        NEXT_PUBLIC_SUPABASE_URL: string;
        NEXT_PUBLIC_SUPABASE_KEY: string;
        NEXT_PUBLIC_API_URL: string;
        NEXT_PUBLIC_BASE_URL: string;
    }
}
