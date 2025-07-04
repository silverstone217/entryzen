"use client";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeSwap = () => {
  const [isClient, setIsClient] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="theme switch"
        aria-hidden
        size={"icon"}
        className=""
      >
        {theme === "dark" ? <Moon /> : <Sun />}
      </Button>

      <span className="text-sm font-medium">
        {theme === "dark" ? "Sombre" : "Claire"}
      </span>
    </div>
  );
};

export default ThemeSwap;
