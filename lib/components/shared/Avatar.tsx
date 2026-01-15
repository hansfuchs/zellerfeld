import Image from "next/image";

interface Props {
    avatar: string | null;
    username: string;
    size: "L" | "S";
}

export default function Avatar({ avatar, username, size }: Props) {
    return (
        <div className={size === "L" ? "h-24 w-24" : "h-8 w-8"}>
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
