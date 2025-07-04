import { getUser } from "@/actions/authActions";
import { redirect } from "next/navigation";
import React from "react";
import Header from "./Header";
import AsideMenuBigScreen from "./AsideMenuBigScreen";
import { cn } from "@/lib/utils";
import { geist } from "@/utils/fonts";

interface Props {
  children: React.ReactNode;
}

async function DashboardLayout({ children }: Props) {
  const user = await getUser();

  if (!user) redirect("/authentification");

  return (
    <div
      className={cn(
        "relative w-full lg:h-screen overflow-x-hidden lg:overflow-y-auto",
        `${geist.className}`
      )}
    >
      {/* top haeder */}
      <Header />

      <div className="pt-20 lg:flex lg:min-h-full lg:items-start w-full  ">
        {/* Aside big screen Nav */}
        <AsideMenuBigScreen />

        {/* main */}
        <main className=" lg:flex-1 lg:overflow-x-hidden ">
          <div className="w-full max-w-7xl mx-auto lg:pl-[280px] lg:pr-14 px-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
