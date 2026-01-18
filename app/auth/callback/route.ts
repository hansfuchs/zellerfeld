import { NextResponse } from "next/server";
import { createDBClient } from "@/lib/db/db.server";
import type { EmailOtpType } from "@supabase/supabase-js";

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const token_hash = searchParams.get("token_hash");
    const type = searchParams.get("type") as EmailOtpType | null;

    if (!token_hash || !type) {
        return NextResponse.redirect(`${origin}/?error=auth_callback_error`);
    }

    const supabase = await createDBClient();

    const { error } = await supabase.auth.verifyOtp({ token_hash, type });
    if (error) {
        return NextResponse.redirect(`${origin}/?error=auth_callback_error`);
    }

    return NextResponse.redirect(`${origin}/`);
}
