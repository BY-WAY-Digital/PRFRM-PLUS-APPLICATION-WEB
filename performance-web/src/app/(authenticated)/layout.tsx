import Navbar from "@/components/navbar";
import ProtectedRoute from "@/components/protected-route";
import Sidebar from "@/components/sidebar";
import React, { ReactNode } from "react";

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

export default function AuthenticatedLayout({
  children,
}: AuthenticatedLayoutProps) {
  return (
    <div className="min-h-screen bg-primary-white dark:bg-primary-black relatives">
      <div className="flex w-full h-full">
        <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
          <Sidebar />
        </div>
        <div className="lg:pl-[264px] w-full ">
          <div className="mx-auto max-w-screen-2xl h-full">
            <Navbar />
            <main className="h-full py-8 px-6 flex flex-col">
              <ProtectedRoute>{children}</ProtectedRoute>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
