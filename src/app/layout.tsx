import "@/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nextopia",
    description: "Nextjs based app to store popular prompts used by the users",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">{children}</main>
            </body>
        </html>
    );
}
