import { ReactNode } from "react";

import NavBar from "@/components/navigation/navbar/NavBar";
import LeftSidebar from "@/components/navigation/left-sidebar/LeftSidebar";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <main className="background-light850_dark100 relative">
            <NavBar />

            <div className="flex">
                <LeftSidebar />

                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                    <div className="mx-auto w-full max-w-5xl">{children}</div>
                </section>
            </div>
        </main>
    );
}
