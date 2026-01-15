import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "@/lib/auth/auth.context";

import Header from "@/lib/components/general/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Zellerfeld Challenge | Hans Fuchs",
    description: "X Clone",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <AuthProvider>
                    <div className="flex h-screen w-screen justify-center p-4">
                        <div className="flex w-3xl flex-col items-center overflow-x-hidden">
                            <Header />
                            <div className="w-full">{children}</div>
                        </div>
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
}
