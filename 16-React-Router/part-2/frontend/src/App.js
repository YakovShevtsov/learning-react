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
              loader: async () => {
                const response = await fetch("http://localhost:8080/events");

                if (!response.ok) {
                  //...
                } else {
                  const resData = await response.json();
                  return resData.events;
                }
              },
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
