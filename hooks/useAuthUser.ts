// hooks/useAuthUser.ts
"use client";
import { User } from "@/app/generated/prisma";
import { useSession } from "@/lib/auth-client";

export function useAuthUser() {
  const { data: session, isPending, error } = useSession();

  const user = session?.user as User | null;
  const isLoading = isPending;
  const isAuthenticated = !isPending && !!user;

  // Fonction pour déconnexion

  return {
    user,
    isLoading,
    isAuthenticated,
    error,
  };
}
