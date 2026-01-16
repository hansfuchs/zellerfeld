import Link from "next/link";
import Button from "@/lib/components/ui/Button";

export default async function ConfirmPage({
    searchParams,
}: {
    searchParams: Promise<{ confirmation_url?: string }>;
}) {
    const { confirmation_url } = await searchParams;

    return (
        <>
            {confirmation_url ? (
                <Link href={confirmation_url} className="mt-8">
                    <Button>Confirm account</Button>
                </Link>
            ) : (
                <div>Invalid confirmation url.</div>
            )}
        </>
    );
}
