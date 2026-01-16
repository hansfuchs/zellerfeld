import { useRouter } from "next/navigation";

import Link from "next/link";
import Button from "@/lib/components/ui/Button";

export default async function ConfirmPage({
    query,
}: {
    query: Promise<{ confirmation_url: string | undefined }>;
}) {
    const { confirmation_url } = await query;
    const router = useRouter();

    if (!confirmation_url) {
        router.push("/");
    }

    return (
        <>
            <div>Awesome! Your account was sucessfully confirmed.</div>

            <Link href="/" className="mt-8">
                <Button>Go to feed</Button>
            </Link>
        </>
    );
}
