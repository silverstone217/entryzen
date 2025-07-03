import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import {
  BETTER_AUTH_SECRET,
  GOOGLE_AUTH_CLIENT_SECRET,
  GOOGLE_AUTH_CLIENT_ID,
} from "@/utils/envVariables";
import { nextCookies } from "better-auth/next-js";
import { inferAdditionalFields } from "better-auth/client/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  //   providers
  socialProviders: {
    google: {
      clientId: GOOGLE_AUTH_CLIENT_ID!,
      clientSecret: GOOGLE_AUTH_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    },
  },

  secret: BETTER_AUTH_SECRET!,
  plugins: [nextCookies(), inferAdditionalFields()],
});
