"use client";

import AuthForm from "@/components/forms/auth-form/AuthForm";
import { SignUpSchema } from "@/lib/validations";

export default function SignUp() {
    return (
        <AuthForm
            formType="SIGN_UP"
            schema={SignUpSchema}
            defaultValues={{ email: "", password: "", name: "", username: "" }}
            onSubmit={(data) => Promise.resolve({ success: true, data })}
        />
    );
}
