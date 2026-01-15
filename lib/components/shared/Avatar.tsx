import Image from "next/image";

interface Props {
    avatar: string | null;
    username: string;
}

export default function Avatar({ avatar, username }: Props) {
    return (
        <div className="h-8 w-8">
            {avatar ? (
                <Image
                    src={avatar}
                    alt={`Image of user ${username}`}
                    className="h-full w-full"
                />
            ) : (
                <div className="h-full w-full bg-amber-700"></div>
            )}
        </div>
    );
}
