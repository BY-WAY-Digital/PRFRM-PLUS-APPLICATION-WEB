"use client";

import SignInCard from "@/features/auth/components/sign-in-card";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-primary-white dark:bg-primary-black flex items-center justify-center flex-col">
      <div className="w-full md:w-[360px]">
        <SignInCard />;
      </div>
    </div>
  );
}
