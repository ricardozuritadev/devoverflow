import Link from "next/link";

import ROUTES from "@/constants/route";
import { Question } from "@/types/question.types";

import { Button } from "@/components/ui/button";
import LocalSearch from "@/components/search/LocalSearch";
import HomeFilter from "@/components/filters/HomeFilter";

const questions: Question[] = [
    {
        _id: "1",
        title: "How to use React?",
        description: "I am new",
        tags: ["react", "javascript", "web"],
        author: {
            _id: "1",
            name: "John Doe"
        },
        upvotes: 10,
        answers: 5,
        views: 100,
        createdAt: new Date()
    },
    {
        _id: "2",
        title: "How to use Next.js?",
        description: "I am new",
        tags: ["next.js", "javascript", "web"],
        author: {
            _id: "2",
            name: "Jane Doe"
        },
        upvotes: 8,
        answers: 11,
        views: 300,
        createdAt: new Date()
    }
];

type HomeProps = {
    searchParams: Promise<{ [key: string]: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
    const { query = "", filter = "" } = await searchParams;

    const filteredQuestions = questions.filter((question) => {
        const matchesQuery = question.title
            .toLowerCase()
            .includes(query?.toLowerCase() || filter.toLowerCase());

        const matchesFilter = filter
            ? question.tags[0].toLowerCase() === filter.toLowerCase()
            : true;

        return matchesQuery && matchesFilter;
    });

    return (
        <>
            <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900">All Questions</h1>

                <Button
                    className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
                    asChild
                >
                    <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
                </Button>
            </section>

            <section className="mt-11">
                <LocalSearch
                    route="/"
                    imgSrc="/icons/search.svg"
                    placeholder="Search questions..."
                    otherClasses="flex-1"
                />
            </section>

            <HomeFilter />

            <div className="mt-10 flex w-full flex-col gap-6">
                {filteredQuestions.map((question) => (
                    <h2 key={question._id}>{question.title}</h2>
                ))}
            </div>
        </>
    );
}
