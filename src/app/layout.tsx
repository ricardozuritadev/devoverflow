import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

import ThemeProvider from "@/context/Theme";
import { SessionProvider } from "next-auth/react";

import { Toaster } from "@/components/ui/toaster";
import { auth } from "@/auth";

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

export default async function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    return (
        <html suppressHydrationWarning lang="en">
            <SessionProvider session={session}>
                <body
                    className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>

                    <Toaster />
                </body>
            </SessionProvider>
        </html>
    );
}
