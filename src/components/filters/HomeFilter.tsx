"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

import { Filter } from "@/types/filter.type";
import { Button } from "@/components/ui/button";

const filters: Filter[] = [
    {
        name: "React",
        value: "react"
    },
    {
        name: "Next.js",
        value: "next.js"
    }
    // {
    //     name: "Newest",
    //     value: "newest"
    // },
    // {
    //     name: "Popular",
    //     value: "popular"
    // },
    // {
    //     name: "Unanswered",
    //     value: "unanswered"
    // },
    // {
    //     name: "Recommended",
    //     value: "recommended"
    // }
];

export default function HomeFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const filterParams = searchParams.get("filter");
    const [active, setActive] = useState<string>(filterParams || "");

    function handleTypeClick(filter: string) {
        let newUrl = "";

        if (filter === active) {
            setActive("");

            newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["filter"]
            });
        } else {
            setActive(filter);

            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "filter",
                value: filter.toLowerCase()
            });
        }

        router.push(newUrl, { scroll: false });
    }

    return (
        <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
            {filters.map((filter) => (
                <Button
                    key={filter.name}
                    onClick={() => handleTypeClick(filter.value)}
                    className={cn(
                        `body-medium rounded-lg px-6 py-3 capitalize shadow-none`,
                        active === filter.value
                            ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
                            : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
                    )}
                >
                    {filter.name}
                </Button>
            ))}
        </div>
    );
}
