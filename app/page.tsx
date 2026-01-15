import { PageProps } from "@/types/next/page.types";

export default async function Home({ params, searchParams }: PageProps) {
    return (
        <div>
            <div>Hello world.</div>
        </div>
    );
}
