"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  image?: string | null;
  name?: string;
};

const UserAvatar = ({ image, name }: Props) => {
  const shortName = name ? name.slice(0, 1).toUpperCase() : "U";
  return (
    <Avatar>
      {image ? (
        <AvatarImage src={image} />
      ) : (
        <AvatarFallback>{shortName}</AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
