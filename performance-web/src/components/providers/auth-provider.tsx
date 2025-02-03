"use client";

import { useToast } from "@/hooks/use-toast";
import { authClient } from "@/lib/auth-client";
import { Session, User } from "better-auth/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type AuthContextProvider = {
  user?: User | null;
  session?: Session | null;
  error: string | undefined;
  isLoading: boolean;
  isAuthenticated: boolean;
  handleSignup: (
    email: string,
    password: string,
    name: string
  ) => Promise<boolean>;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleSignout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextProvider | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>();
  const [session, setSession] = useState<Session | null>();
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isAuthenticated = !!user;

  const { toast } = useToast();

  async function handleSignup(email: string, password: string, name: string) {
    setIsLoading(true);
    try {
      console.log("Signup attempt with:", { email, password, name });
      const { data, error } = await authClient.signUp.email({
        email,
        password,
        name,
      });

      if (error) {
        setError(error.message);
        toast({
          title: "Registration failed",
          description: error.message,
          variant: "destructive",
        });
        return false;
      }

      const userSession = await authClient.getSession();
      console.log("Session after login:", userSession);

      if (data?.user && userSession?.data) {
        setUser(data?.user);
        setSession(userSession?.data.session);
        toast({
          title: "Registration successful",
          variant: "default",
        });
        return true;
      }
      return false;
    } catch {
      setSession(null);
      setUser(null);
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogin(email: string, password: string) {
    setIsLoading(true);
    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        toast({
          title: "Login failed",
          description: error.message,
          variant: "destructive",
        });
      }

      const userSession = await authClient.getSession();
      console.log("Session after login:", userSession);

      if (data?.user && userSession?.data) {
        setUser(data?.user);
        setSession(userSession?.data.session);
        toast({
          title: "Registration successful",
          variant: "default",
        });
      }
    } catch {
      setSession(null);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSignout() {
    try {
      await authClient.signOut();
      setUser(null);
      setSession(null);
    } catch {
      toast({ title: "Signout failed", description: "An error occured" });
    }
  }

  useEffect(() => {
    async function checkSession() {
      try {
        const session = await authClient.getSession();
        if (session?.data) {
          setSession(session?.data.session);
          setUser(session?.data.user);
        }
      } catch {
        setSession(null);
        setUser(null);
      }
    }
    checkSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        error,
        isLoading,
        isAuthenticated,
        handleSignout,
        handleSignup,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { AuthProvider, AuthContext, useAuth };
