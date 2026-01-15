export type PageProps = {
    params: Promise<{ category: string }>;
    searchParams: Promise<{ page: string | undefined }>;
};
