"use client";
import React, { useState } from "react";
// import { Button } from "./ui/button";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
};

const LogoutButton = ({ className }: Props) => {
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
    <button
      // variant={"destructive"}
      onClick={handleLogout}
      disabled={loading}
      className={`${className} flex items-center gap-4 text-sm 
          font-medium text-destructive`}
    >
      <LogOut />
      <span>{loading ? "en cours..." : "Deconnexion"}</span>
    </button>
  );
};

export default LogoutButton;
