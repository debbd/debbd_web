import { SignUpForm } from "@/components/authentication";

export default function LoginPage() {
  return (
    <div className="bg-background-950C flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}
