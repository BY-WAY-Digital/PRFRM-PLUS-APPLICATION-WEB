import { useAuth } from "@/components/providers/auth-provider";
import { Button } from "@/components/ui/button";
import { easeIn, motion } from "motion/react";

import Link from "next/link";

export default function WelcomeHero() {
  const { user } = useAuth();
  return (
    <section className="min-h-screen">
      <header className="mx-auto max-w-screen-xl p-8">
        <nav className="shadow border dark:bg-primary-dark opacity-80 p-5 flex items-center justify-between max-w-screen-lg mx-auto rounded-2xl">
          <Link
            href={"/"}
            className="text-primary-purple font-bold text-2xl tracking-wider"
          >
            PRFRM+
          </Link>
          <div className=" items-center space-x-3 flex">
            <Button asChild className="font-bold text-white bg-primary-purple ">
              <Link href={user ? "/dashboard" : "/sign-in"}>
                {user ? "Go to dashboard" : "Get started today"}
              </Link>
            </Button>
          </div>
        </nav>
      </header>
      <motion.div
        animate={{ y: 100 }}
        transition={{ duration: 0.5, ease: easeIn }}
        className="flex flex-col items-center space-y-6 justify-center max-w-screen-md mx-auto px-4 mt-20"
      >
        <h1 className="dark:text-white text-4xl lg:text-6xl font-bold text-center">
          Unlock a new level, <br /> with PRFRM+.
        </h1>
        <p className="dark:text-white text-lg text-center">
          Take your performance to the next level with PRFRM+. <br /> Get access
          to the tools you need to succeed.
        </p>
        <div className="flex space-x-3">
          <Button className="font-bold bg-primary-purple" size="cta">
            Get started today
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
