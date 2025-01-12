import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const inter = localFont({
    src: "./fonts/InterVf.ttf",
    variable: "--font-inter",
    weight: "100 200 300 400 500 600 700 800 900"
});

const spaceGrotesk = localFont({
    src: "./fonts/SpaceGroteskVf.ttf",
    variable: "--font-space-grotesk",
    weight: "300 400 500 600 700"
});

export const metadata: Metadata = {
    title: "DevOverflow",
    description:
        "A community-driven platform for asking and answering questions. Get help, share knowledge, and connect with others.",
    icons: {
        icon: "/images/site-logo.svg"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
