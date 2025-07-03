// authentification.jsx
import React from "react";
import Authform from "./authform";
import { Card } from "@/components/ui/card"; // shadcn-ui card
import { Separator } from "@/components/ui/separator";
import { getUser } from "@/actions/authActions";
import { redirect } from "next/navigation";

async function authentification() {
  const user = await getUser();

  if (user) redirect("/overview");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <Card className="max-w-lg w-full p-8 shadow-lg">
        <h2 className="text-center text-4xl lg:text-5xl font-extrabold text-gray-900">
          Bienvenue sur <strong className="text-indigo-600">Entryzen</strong>
        </h2>

        <p className="mt-4 text-center text-gray-600 text-base lg:text-lg max-w-md mx-auto">
          {` Connectez-vous pour retrouver, gérer des milliers d'événements ou
          acheter des billets.`}
        </p>

        <Separator className="my-6" />

        <Authform />
      </Card>
    </div>
  );
}

export default authentification;
