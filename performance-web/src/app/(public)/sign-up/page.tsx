"use client";

import SignUpCard from "@/features/auth/components/sign-up-card";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-white dark:bg-primary-black">
      <div className="grid md:grid-cols-2">
        <div className="dark:text-white hidden md:flex md:items-center md:w-[460px]">
          Left side
        </div>
        <div className="w-full md:w-[360px]">
          <SignUpCard />;
        </div>
      </div>
    </div>
  );
}
