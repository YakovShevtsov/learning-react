import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router";

export function EventsPage() {
  const eventsData = useLoaderData();

  return <EventsList events={eventsData} />;
}
