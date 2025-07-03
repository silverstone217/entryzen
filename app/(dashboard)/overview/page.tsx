import { getUser } from "@/actions/authActions";
import LogoutButton from "@/components/LogoutButton";
import React from "react";

async function page() {
  const user = await getUser();
  return (
    <div
      className="h-screen flex flex-col
    justify-center items-center gap-4"
    >
      <h1 className="text-md">Overview page</h1>
      <h2 className="text-3xl">
        Binevenue, <strong>{user?.name}</strong>
      </h2>
      <LogoutButton />
    </div>
  );
}

export default page;
