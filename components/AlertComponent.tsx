"use client";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

type Props = {
  title: string;
  description: string;
  type: "error" | "success";
};

const AlertComponent = ({ description, title, type }: Props) => {
  return (
    <Alert variant={type === "error" ? "destructive" : "default"}>
      <Info />
      <AlertTitle>{title}!</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default AlertComponent;
