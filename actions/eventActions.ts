"use server";

import { prisma } from "@/lib/prisma";
import { getUser } from "./authActions";
import { EventFormData } from "@/app/(dashboard)/mes-evenements/nouveau/NewEventForm";

export const getAllMyEvents = async () => {
  try {
    const user = await getUser();

    if (!user) {
      return {
        error: true,
        message: "Veuillez vous connecter",
        data: [],
      };
    }

    const events = await prisma.event.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      error: false,
      message: "Events récupérés avec succès",
      data: events,
    };
  } catch (e) {
    console.log(e);
    return {
      error: true,
      message: "Erreur lors de la récupération des événements",
      data: [],
    };
  }
};

// create new event
export const createEvent = async (data: EventFormData) => {
  try {
    const user = await getUser();
    if (!user) {
      return {
        error: true,
        message: "Veuillez vous connecter",
        data: null,
      };
    }

    const newEvent = await prisma.event.create({
      data: {
        userId: user.id,
        address: data.address,
        startTime: data.startTime,
        eventdate: data.eventDate,
        cover: data.cover,
        description: data.description,
        name: data.name,
        price: BigInt(data.price),
        addressName: data.addressName ?? undefined,
        participantLimit: Number(data.participantLimit) ?? 0,
      },
    });

    if (!newEvent) {
      return {
        error: true,
        message: "Erreur lors de la création de l'événement",
        data: null,
      };
    }

    return {
      error: false,
      message: "Événement créé avec succès",
      data: newEvent,
    };
  } catch (e) {
    console.log(e);
    return {
      error: true,
      message: "Erreur lors de la création de l'événement",
      data: null,
    };
  }
};
