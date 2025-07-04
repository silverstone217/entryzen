import { put } from "@vercel/blob";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as Blob;

  if (!file || !(file instanceof File)) {
    return new Response("Fichier manquant ou invalide", { status: 400 });
  }

  const blob = await put(`uploads/${file.name}`, file, {
    access: "public",
    addRandomSuffix: true,
  });

  return new Response(JSON.stringify(blob), { status: 200 });
}
