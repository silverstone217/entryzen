"use client";
import LogoutButton from "@/components/LogoutButton";
import ThemeSwap from "@/components/ThemeSwap";
import UserAvatar from "@/components/UserAvatar";
import { useAuthUser } from "@/hooks/useAuthUser";
import { DashboardLinksHelp, DashboardLinksPage } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AsideMenuBigScreen = () => {
  const pathname = usePathname();
  const { user } = useAuthUser();

  return (
    <aside
      className="hidden lg:flex lg:h-[92%] xl:h-[94%] overflow-x-hidden overflow-y-auto py-4
    fixed top-16 left-0 z-40  backdrop-blur-2xl w-[240px] flex-col 
    transition-all duration-500 ease-in-out border-r
    "
    >
      {/* menu nav */}
      <nav className="flex flex-col w-full gap-4 px-2 flex-1">
        {DashboardLinksPage.map((link, idx) => (
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
      </nav>

      {/* down part */}
      <div className=" py-4 border-t flex gap-4 flex-col px-2">
        {/* other links */}
        <nav className="flex flex-col w-full gap-4">
          {DashboardLinksHelp.map((link, idx) => (
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
    </aside>
  );
};

export default AsideMenuBigScreen;
