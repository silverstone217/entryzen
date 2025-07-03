"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut();
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("une erreur s'est produite");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button variant={"destructive"} onClick={handleLogout} disabled={loading}>
      <LogOut />
      <span>{loading ? "en cours..." : "Deconnexion"}</span>
    </Button>
  );
};

export default LogoutButton;
