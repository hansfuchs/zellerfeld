import { PageProps } from "@/types/next";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default async function ConfirmPage({ query }: PageProps) {
    const { confirmation_url } = await query;
    const router = useRouter();

    if (!confirmation_url) {
        router.push("/");
    }

    return (
        <>
            <div>Awesome! Your account was sucessfully confirmed.</div>

            <Link href="/" className="mt-8">
                <button>Go to feed</button>
            </Link>
        </>
    );
}
