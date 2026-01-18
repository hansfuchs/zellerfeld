import { NextResponse } from "next/server";
import { createDBClient } from "@/lib/db/db.server";

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");

    if (!code) {
        return NextResponse.redirect(`${origin}/?error=auth_callback_error`);
    }

    const supabase = await createDBClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
        return NextResponse.redirect(`${origin}/?error=auth_callback_error`);
    }

    return NextResponse.redirect(`${origin}/`);
}
