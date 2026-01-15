interface Props {
    type: string;
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
}

export default function Input({ type, value, placeholder, onChange }: Props) {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            required
            className="border-collapse border border-white p-2"
        />
    );
}
