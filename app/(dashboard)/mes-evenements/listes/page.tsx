import { getUser } from "@/actions/authActions";
import { getAllMyEvents } from "@/actions/eventActions";
import AlertComponent from "@/components/AlertComponent";
import React, { Suspense } from "react";
import EventsDataTable from "./data-table";

async function page() {
  const user = await getUser();

  if (!user) return null;

  const { data, error, message } = await getAllMyEvents();

  if (error) {
    return (
      <AlertComponent
        title="Erreur survenue"
        description={message}
        type="error"
      />
    );
  }
  const events = data;

  return (
    <div>
      <Suspense fallback={<p>Chargement...</p>}>
        <EventsDataTable data={events} />
      </Suspense>
    </div>
  );
}

export default page;
