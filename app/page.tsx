import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-col flex gap-2 items-center justify-center h-screen">
      <h2 className="text-4xl font-bold">Binevenue sur Entryzen!</h2>
      <p className="max-w-sm mx-auto text-md text-gray-500">
        Retrouver des evenements populaires, incroyables et acheter vos billets.
      </p>
      <div className="flex items-center justify-center gap-4 flex-wrap mt-4">
        <Link href={"/"}>
          <Button>Découvrir les evenements</Button>
        </Link>

        <Link href={"/authentification"}>
          <Button variant={"secondary"}>Créer un evenement</Button>
        </Link>
      </div>
    </div>
  );
}
