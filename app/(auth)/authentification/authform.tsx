// authform.jsx
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { BETTER_AUTH_URL } from "@/utils/envVariables";

const Authform = () => {
  const handleSignWithGoogle = async () => {
    try {
      await signIn.social({ provider: "google", callbackURL: "/overview" });
    } catch (error) {
      console.error(error);
      toast.error(
        "Une erreur est survenue lors de la connexion! Veuillez réessayer."
      );
    }
  };

  return (
    <div className="w-full">
      <Button
        variant="outline"
        size="lg"
        className="flex items-center justify-center gap-3 w-full py-4 hover:bg-indigo-50 transition"
        onClick={handleSignWithGoogle}
      >
        <FcGoogle className="w-6 h-6 shrink-0" />
        Continuer avec Google
      </Button>

      <Button
        onClick={() => console.log({ urlAuth: BETTER_AUTH_URL })}
        className="mt-2"
      >
        auth url
      </Button>
    </div>
  );
};

export default Authform;
