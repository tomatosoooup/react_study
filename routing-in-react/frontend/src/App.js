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
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventsDetailPage, {
  loader as eventsDetailLoader,
  action as deleteEventAction,
} from "./pages/EventsDetailPage";
import NewEvent from "./pages/NewEvent";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/ErrorPage";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

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
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":event_id",
            loader: eventsDetailLoader,
            id: "event-detail",
            children: [
              {
                index: true,
                element: <EventsDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          { path: "new", element: <NewEvent />, action: manipulateEventAction },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
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
