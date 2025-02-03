"use client";

import { Fragment } from "react";
import Link from "next/link";

import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

type NavLinksProps = {
    isMobileNav?: boolean;
};

export default function NavLinks({ isMobileNav = false }: NavLinksProps) {
    const pathname = usePathname();
    const userId = 1;

    return (
        <>
            {sidebarLinks.map((item) => {
                const isActive =
                    (pathname.includes(item.route) && item.route.length > 1) ||
                    pathname === item.route;

                if (item.route === "/profile") {
                    if (userId) item.route = `${item.route}/${userId}`;
                    else return null;
                }

                const LinkComponent = (
                    <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                            isActive
                                ? "primary-gradient rounded-lg text-light-900"
                                : "text-dark-300_light900",
                            "flex items-center justify-start gap-4 bg-transparent p-4"
                        )}
                    >
                        <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({ "invert-colors": !isActive })}
                        />

                        <p
                            className={cn(
                                isActive ? "base-bold" : "base-medium",
                                !isMobileNav && "max-lg:hidden"
                            )}
                        >
                            {item.label}
                        </p>
                    </Link>
                );

                return isMobileNav ? (
                    <SheetClose asChild key={item.route}>
                        {LinkComponent}
                    </SheetClose>
                ) : (
                    <Fragment key={item.route}>{LinkComponent}</Fragment>
                );
            })}
        </>
    );
}
