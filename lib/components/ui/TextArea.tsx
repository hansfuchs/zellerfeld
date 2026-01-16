"use client";

interface Props {
    value: string;
    placeholder: string;
    maxLength: number;
    onChange: (value: string) => void;
}

export default function TextArea({
    value,
    placeholder,
    maxLength,
    onChange,
}: Props) {
    return (
        <textarea
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            required
            maxLength={maxLength}
            className="border-collapse border border-white p-2"
        />
    );
}
