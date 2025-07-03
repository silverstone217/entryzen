import { getUser } from "@/actions/authActions";
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
    </div>
  );
}

export default page;
