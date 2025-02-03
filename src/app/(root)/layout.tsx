import { ReactNode } from "react";

import NavBar from "@/components/navigation/navbar/NavBar";
import LeftSidebar from "@/components/navigation/left-sidebar/LeftSidebar";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <main>
            <NavBar />
            <LeftSidebar />
            {children}
        </main>
    );
}
