import { NextResponse } from "next/server";
import { del } from "@vercel/blob";

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "URL manquante ou invalide" },
        { status: 400 }
      );
    }

    // Extraire le chemin relatif du blob depuis l'URL
    const urlObj = new URL(url);
    // Exemple : si URL = https://<domain>/<path>, on récupère le path sans '/'
    const blobPath = urlObj.pathname.slice(1);

    // Supprimer le blob avec @vercel/blob
    await del(blobPath);

    return NextResponse.json({ message: "Fichier supprimé avec succès" });
  } catch (error) {
    console.error("Erreur suppression blob:", error);
    return NextResponse.json(
      { error: "Erreur serveur lors de la suppression" },
      { status: 500 }
    );
  }
}
