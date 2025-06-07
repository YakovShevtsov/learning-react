import { NavLink } from "react-router";
import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavLink
            to="/events"
            end
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            All Events
          </NavLink>
          <NavLink
            to="new"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            New Event
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
