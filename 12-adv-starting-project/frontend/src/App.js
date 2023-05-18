// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// did it
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// did it
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// did it
// 4. Add properly working links to the MainNavigation
// did it
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// yeap
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// done
// 7. Output the ID of the selected event on the EventDetailPage
// done
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
// done

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/EventsPage";
import EventsDetailPage from "./pages/EventsDetailPage";
import NewEvent from "./pages/NewEvent";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import EventsRootLayout from "./pages/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <Events /> },
          { path: ":event_id", element: <EventsDetailPage /> },
          { path: "new", element: <NewEvent /> },
          { path: ":event_id/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
