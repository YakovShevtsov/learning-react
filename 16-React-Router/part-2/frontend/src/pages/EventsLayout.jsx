import { Outlet } from "react-router";
import EventsNavigation from "../components/EventsNavigation";

export function EventsLayout() {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
