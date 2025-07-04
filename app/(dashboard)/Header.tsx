"use client";
import { cn } from "@/lib/utils";
import { specialElite } from "@/utils/fonts";
import Link from "next/link";
import React from "react";
import SheetMenuSmallScreen from "./SheetMenuSmallScreen";

const Header = () => {
  return (
    <header className="p-4 fixed top-0 left-0 right-0 shadow backdrop-blur-2xl z-50 border-b">
      <div className=" flex items-center justify-between ">
        {/* logo */}
        <Link
          href={"/"}
          className={cn("flex items-center gap-1", `${specialElite.className}`)}
        >
          <span className="text-lg font-bold">Entryzen</span>
        </Link>

        {/* menu small screen open */}
        <SheetMenuSmallScreen />
      </div>
    </header>
  );
};

export default Header;
