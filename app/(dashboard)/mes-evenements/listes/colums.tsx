"use client";

import { Event } from "@/app/generated/prisma";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

export const EventsColumns: ColumnDef<Event>[] = [
  {
    accessorKey: "id",
    header: "N",
    cell: ({ row }) => {
      const index = (row.index + 1).toString().padStart(2, "0");
      return <div>{index}</div>;
    },
  },
  {
    accessorKey: "name",
    header: "Evenement",
    cell: ({ row }) => {
      const event = row.original as Event;
      return <div className="text-xs capitalize font-medium">{event.name}</div>;
    },
  },
  {
    accessorKey: "participantLimit",
    header: "Limites",
    cell: ({ row }) => {
      const event = row.original as Event;
      const limit = event.participantLimit.toString().padStart(2, "0");
      return <div className="text-xs capitalize">{limit}</div>;
    },
  },
  {
    accessorKey: "price",
    header: "prix",
    cell: ({ row }) => {
      const event = row.original as Event;
      const price = event.price.toString().padStart(2, "0");
      return (
        <div className="text-xs capitalize font-bold">
          {price} <span className="text-xs text-gray-600">FCD</span>
        </div>
      );
    },
  },
  {
    accessorKey: "eventDate",
    header: "Date",
    cell: ({ row }) => {
      const event = row.original as Event;
      const formatedDate = event.eventdate.toLocaleDateString("fr-Fr", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
      return <div className="text-xs">{formatedDate}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const event = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(event.id)}
            >
              Copy event ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View event details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
