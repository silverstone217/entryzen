// hooks/useAuthUser.ts
"use client";
import { useSession } from "@/lib/auth-client";

interface User {
  id: string;
  email: string;
  name?: string;
  // ajoute d'autres propriétés selon ton schéma utilisateur Better Auth
}

export function useAuthUser() {
  const { data: session, isPending, error } = useSession();

  const user = session?.user as User | undefined;
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
