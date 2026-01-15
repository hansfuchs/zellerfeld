import { PageProps } from "@/types/next/page.types";

export default async function Home({ params, searchParams }: PageProps) {
    return (
        <div className="w-screen h-screen p-4">
            <div>Hello world.</div>
        </div>
    );
}
