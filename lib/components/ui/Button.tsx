interface Props {
    type?: "button" | "submit";
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

export default function Button({
    type = "button",
    disabled = false,
    children,
    onClick,
}: Props) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={() => onClick?.()}
            className="border border-white bg-white p-2 text-black"
        >
            {children}
        </button>
    );
}
