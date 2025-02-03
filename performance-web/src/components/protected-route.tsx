"use client";

import { ReactNode, useEffect } from "react";
import { useAuth } from "./providers/auth-provider";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push("/sign-in");
    }
  }, [isAuthenticated, isLoading, router]);

  return isAuthenticated && <>{children}</>;
}
