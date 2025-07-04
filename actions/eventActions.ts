"use server";

import { prisma } from "@/lib/prisma";
import { getUser } from "./authActions";

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
