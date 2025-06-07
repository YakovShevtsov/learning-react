import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "./pages/RootLayout";
import { EventsLayout } from "./pages/EventsLayout";
import { EventsPage } from "./pages/EventsPage";
import { EventDetailsPage } from "./pages/EventDetailsPage";
import { NewEventPage } from "./pages/NewEventPage";
import { EditEventPage } from "./pages/EditEventPage";
import { HomePage } from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "events",
          element: <EventsLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
            },
            {
              path: ":id",
              element: <EventDetailsPage />,
            },
            {
              path: "new",
              element: <NewEventPage />,
            },
            {
              path: ":id/edit",
              element: <EditEventPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
