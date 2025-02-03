"use client";
import WelcomeHero from "@/features/welcome/components/welcome-hero";
import React from "react";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-primary-white dark:bg-primary-black">
      <WelcomeHero />
    </main>
  );
}
