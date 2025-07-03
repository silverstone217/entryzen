import { getUser } from "@/actions/authActions";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
}

async function DashboardLayout({ children }: Props) {
  const user = await getUser();

  if (!user) redirect("/authentification");

  return (
    <div>
      <main>{children}</main>
    </div>
  );
}

export default DashboardLayout;
