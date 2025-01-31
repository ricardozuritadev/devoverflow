import { auth, signOut } from "@/auth";

import ROUTES from "@/constants/route";

import { Button } from "@/components/ui/button";

export default async function Home() {
    const session = await auth();

    console.log(session);

    return (
        <>
            <h1 className="h1-bold">Welcome to the world of Next.js</h1>

            <form
                className="px-10 pt-[100px]"
                action={async () => {
                    "use server";

                    await signOut({
                        redirectTo: ROUTES.SIGN_IN
                    });
                }}
            ></form>
        </>
    );
}
