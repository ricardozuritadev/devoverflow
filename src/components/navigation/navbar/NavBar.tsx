import Link from "next/link";
import Image from "next/image";
import Theme from "@/components/navigation/navbar/Theme";
import MobileNavigation from "@/components/navigation/navbar/MobileNavigation";

export default function NavBar() {
    return (
        <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 dark:shadow-none sm:px-12">
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src="/images/site-logo.svg"
                    alt="DevOverflow Logo"
                    width={23}
                    height={23}
                />

                <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                    Dev<span className="text-primary-500">Overflow</span>
                </p>
            </Link>

            <p>Global Search</p>

            <div className="flex-between gap-5">
                <Theme />
                <MobileNavigation />
            </div>
        </nav>
    );
}
