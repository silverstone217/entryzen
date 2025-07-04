"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAuthUser } from "@/hooks/useAuthUser";
import { DashboardLinksHelp, DashboardLinksPage } from "@/utils/links";
import Link from "next/link";
import UserAvatar from "@/components/UserAvatar";
import LogoutButton from "@/components/LogoutButton";
import ThemeSwap from "@/components/ThemeSwap";

const SheetMenuSmallScreen = () => {
  const pathname = usePathname();
  const { user } = useAuthUser();

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AlignJustify className="h-6 w-6 shrink-0" />
      </SheetTrigger>
      <SheetContent className="w-[90%] flex flex-col overflow-x-hidden overflow-y-auto pb-4">
        <SheetHeader>
          <SheetTitle>Entryzen</SheetTitle>
          <SheetDescription>
            Plateforme de gestion des evenements et achat de billets.
          </SheetDescription>
        </SheetHeader>

        {/* menu nav */}
        <nav className="flex flex-col w-full gap-4 px-2 flex-1 border-y py-4">
          {[...DashboardLinksPage, ...DashboardLinksHelp].map((link, idx) => (
            <Link
              href={link.value}
              key={idx}
              className={`flex items-center justify-start gap-4 py-2
            hover:bg-gray-200 px-2 dark:hover:bg-gray-800
            transition-all duration-500 ease-in-out rounded
            hover:text-gray-900 dark:hover:text-gray-300

            ${
              pathname.includes(link.value)
                ? "bg-primary text-primary-foreground"
                : ""
            }

            `}
            >
              <link.icon className="w-6 h-6 shrink-0" />
              <span className="text-sm font-medium">{link.label}</span>
            </Link>
          ))}
          {/* theme */}
          <div className="px-2">
            <ThemeSwap />
          </div>
        </nav>

        {/* other part profile and logout btn */}
        <div className="px-4 space-y-2">
          {/* profile avatar */}
          {user && (
            <Link href={"/"} className="flex items-center gap-4 mt-1">
              <UserAvatar image={user.image} name={user.name} />
              <div className="text-xs">
                <p className="font-bold line-clamp-1">{user.name}</p>
                <p className="line-clamp-1 text-gray-600">{user.email}</p>
              </div>
            </Link>
          )}
          {/* log out */}
          {user && (
            <LogoutButton
              className="px-2 mt-1 flex items-center gap-4 text-sm 
          font-medium text-destructive
          hover:bg-destructive hover:text-white
          transition-all duration-500 ease-in-out rounded
          py-2
          "
            />
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetMenuSmallScreen;
