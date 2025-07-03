import { BETTER_AUTH_URL } from "@/utils/envVariables";
import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: BETTER_AUTH_URL,
});

export const { signIn, signUp, useSession, signOut } = createAuthClient();
