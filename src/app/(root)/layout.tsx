import { ReactNode } from "react";

import NavBar from "@/components/navigation/navbar/NavBar";

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <main>
            <NavBar />
            {children}
        </main>
    );
}
