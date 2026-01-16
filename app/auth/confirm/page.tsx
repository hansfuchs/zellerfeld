import { useState } from "react";

import Link from "next/link";
import Button from "@/lib/components/ui/Button";

export default async function ConfirmPage({
    query,
}: {
    query: Promise<{ confirmation_url: string | undefined }>;
}) {
    const { confirmation_url } = await query;

    const [success, setSuccess] = useState(false);

    return (
        <>
            {confirmation_url ? (
                <Link href={confirmation_url} className="mt-8">
                    <Button>Confirm account</Button>
                </Link>
            ) : (
                <div>Invalid confirmation url.</div>
            )}

            {success && (
                <>
                    <div>Awesome! Your account was sucessfully confirmed.</div>

                    <Link href="/" className="mt-8">
                        <Button>Go to feed</Button>
                    </Link>
                </>
            )}
        </>
    );
}
