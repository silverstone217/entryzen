"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, X } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createEvent } from "@/actions/eventActions";

export type EventFormData = {
  name: string;
  description: string;
  address: string;
  addressName: string | null;
  price: string; // on récupère en string et on convertira en bigint
  cover: string;
  participantLimit: string; // idem string -> number
  eventDate: string; // yyyy-mm-dd
  startTime: string; // HH:mm
};

export default function EventForm() {
  const [form, setForm] = useState<EventFormData>({
    name: "",
    description: "",
    address: "",
    addressName: "",
    price: "",
    cover: "",
    participantLimit: "",
    eventDate: "",
    startTime: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Gestion du changement d'image
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Veuillez sélectionner un fichier image valide.");
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setForm((prev) => ({ ...prev, cover: "" })); // on vide le champ cover url
    } else {
      setImageFile(null);
      setImagePreview("");
      setForm((prev) => ({ ...prev, cover: "" }));
    }
  };

  // Optionnel : reset image
  const resetImage = () => {
    setImageFile(null);
    setImagePreview("");
    setForm((prev) => ({ ...prev, cover: "" }));
  };

  // Fonction d'upload
  async function uploadImageToVercelBlob(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Erreur lors de l’upload de l’image");
    }

    const data = await res.json();
    return data.url;
  }

  // Fonction suppression image
  async function deleteImageFromVercelBlob(imageUrl: string): Promise<void> {
    await fetch("/api/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: imageUrl }),
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validation simple
    if (
      !form.name.trim() ||
      !form.description.trim() ||
      !form.address.trim() ||
      !form.price.trim() ||
      !form.participantLimit.trim() ||
      !form.eventDate ||
      !form.startTime
    ) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    let coverUrl = form.cover;

    try {
      // Si une image locale est sélectionnée, upload avant d’envoyer le formulaire
      if (imageFile) {
        coverUrl = await uploadImageToVercelBlob(imageFile);
      }

      const datePart = form.eventDate; // ex: "2025-07-11"
      const timePart = form.startTime; // ex: "10:30"

      const startDateTimeString = `${datePart}T${timePart}:00.000Z`; // "2025-07-11T10:30:00.000Z"
      // const startTimeISO = new Date(startDateTimeString);
      const eventDateISO = `${form.eventDate}T00:00:00.000Z`;

      // Construire l’objet complet à envoyer à votre API / base de données
      const eventToCreate = {
        ...form,
        cover: coverUrl,
        price: form.price, // conversion string -> bigint
        participantLimit: form.participantLimit,
        startTime: startDateTimeString,
        eventDate: eventDateISO,
      };

      // Appel API pour créer l’événement (à adapter)
      const res = await createEvent(eventToCreate);

      if (res.error) {
        if (coverUrl) {
          await deleteImageFromVercelBlob(coverUrl);
        }
        toast.error(res.message);

        return;
      }

      toast.success("Événement créé avec succès !");
      // Reset formulaire
      setForm({
        name: "",
        description: "",
        address: "",
        addressName: "",
        price: "",
        cover: "",
        participantLimit: "",
        eventDate: "",
        startTime: "",
      });
      setImageFile(null);
      setImagePreview("");
      router.refresh();
    } catch (error) {
      toast.error((error as Error).message || "Erreur inconnue");

      // Si image uploadée mais erreur ensuite, supprimer l’image uploadée
      if (coverUrl) {
        await deleteImageFromVercelBlob(coverUrl);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-secondary rounded-lg shadow-md space-y-6"
      noValidate
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">
        Créer un nouvel événement
      </h2>

      <div>
        <Label className="mb-1" htmlFor="name">
          {`Nom de l'événement *`}
        </Label>
        <Input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Ex: Conférence React"
          required
          autoComplete="off"
          disabled={loading}
        />
      </div>

      <div>
        <Label className="mb-1" htmlFor="description">
          Description *
        </Label>
        <Textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Décrivez votre événement"
          rows={10}
          required
          className="max-h-64 min-h-32"
          disabled={loading}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="mb-1" htmlFor="address">
            Adresse *
          </Label>
          <Input
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="123 rue Exemple, Paris"
            required
            autoComplete="off"
            disabled={loading}
          />
        </div>

        <div>
          <Label
            className="mb-1"
            htmlFor="addressName"
          >{`Nom de l'adresse (optionnel)`}</Label>
          <Input
            id="addressName"
            name="addressName"
            value={form.addressName || ""}
            onChange={handleChange}
            placeholder="Ex: Salle de conférence"
            autoComplete="off"
            disabled={loading}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label className="mb-1" htmlFor="price">
            Prix (FCD) *
          </Label>
          <Input
            id="price"
            name="price"
            type="number"
            min={0}
            step={0.01}
            value={form.price}
            onChange={handleChange}
            placeholder="1000"
            required
            disabled={loading}
          />
        </div>

        <div>
          <Label className="mb-1" htmlFor="participantLimit">
            Limite de participants *
          </Label>
          <Input
            id="participantLimit"
            name="participantLimit"
            type="number"
            min={1}
            value={form.participantLimit}
            onChange={handleChange}
            placeholder="50"
            required
            disabled={loading}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="eventDate" className="flex items-center gap-1 mb-1">
            <Calendar className="w-4 h-4" />
            {` Date de l'événement *`}
          </Label>
          <Input
            id="eventDate"
            name="eventDate"
            type="date"
            value={form.eventDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label className="mb-1" htmlFor="startTime">
            Heure de début *
          </Label>
          <Input
            id="startTime"
            name="startTime"
            type="time"
            value={form.startTime}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
      </div>

      {/* Image / Cover */}
      <div>
        <Label className="mb-1" htmlFor="cover">
          Image de couverture
        </Label>
        {imagePreview ? (
          <div className="relative w-full max-h-48 mb-2 rounded-md overflow-hidden">
            <Image
              src={imagePreview}
              alt="Aperçu de la couverture"
              className="w-full object-cover"
              priority
              width={60}
              height={60}
            />
            <button
              type="button"
              onClick={resetImage}
              className="absolute top-1 right-1 bg-black bg-opacity-50 rounded-full p-1 text-white hover:bg-opacity-75"
              aria-label="Supprimer l'image"
              disabled={loading}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : null}
        <Input
          id="cover"
          name="cover"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          disabled={loading}
        />
      </div>

      <Button type="submit" className="w-full">
        {loading ? "en cours..." : `Créer l'événement`}
      </Button>
    </form>
  );
}
