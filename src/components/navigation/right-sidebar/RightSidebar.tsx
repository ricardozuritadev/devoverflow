import Link from "next/link";
import ROUTES from "@/constants/route";
import Image from "next/image";
import TagCard from "@/components/cards/TagCard";

const hotQuestions = [
    {
        id: "1",
        title: "How to create a custom hook in React?"
    },
    {
        id: "2",
        title: "What is the difference between var, let, and const in JavaScript?"
    },
    {
        id: "3",
        title: "How to use React Router?"
    },
    {
        id: "4",
        title: "How to use Redux?"
    },
    {
        id: "5",
        title: "What is the difference between state and props in React?"
    }
];

const pupularTags = [
    {
        id: "1",
        name: "React",
        questions: 100
    },
    {
        id: "2",
        name: "JavaScript",
        questions: 200
    },
    {
        id: "3",
        name: "TypeScript",
        questions: 150
    },
    {
        id: "4",
        name: "Node.js",
        questions: 100
    },
    {
        id: "5",
        name: "Next.js",
        questions: 50
    }
];

export default function RightSidebar() {
    return (
        <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
            <div>
                <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

                <div className="mt-7 flex w-full flex-col gap-[30px]">
                    {hotQuestions.map((question) => (
                        <Link
                            key={question.id}
                            href={ROUTES.QUESTION(question.id)}
                            className="flex cursor-pointer items-center justify-between gap-7"
                        >
                            <p className="body-medium text-dark500_light700">
                                {question.title}
                            </p>

                            <Image
                                src="/icons/chevron-right.svg"
                                alt="Chevron"
                                width={20}
                                height={20}
                                className="invert-colors"
                            />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="mt-16">
                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                <h3 className="h3-bold text-dark-200_light900">Popular Tags</h3>

                <div className="mt-7 flex flex-col gap-4">
                    {pupularTags.map(({ id, name, questions }) => (
                        <TagCard
                            key={id}
                            id={id}
                            name={name}
                            questions={questions}
                            showCount
                            compact
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
