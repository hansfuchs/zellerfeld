interface Props {
    user: any;
}

export default async function Header({ user }: Props) {
    return (
        <div className="mb-8 flex justify-end">
            <div>Hello world.</div>
        </div>
    );
}
