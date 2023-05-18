import { Link } from "react-router-dom";

const EventsPage = () => {
  const DUMMY_EVENTS = [
    {
      id: "e1",
      name: "Cool party",
    },
    {
      id: "e2",
      name: "Cool party 2",
    },
    {
      id: "e3",
      name: "Cool party 3",
    },
    {
      id: "e4",
      name: "Cool party 4",
    },
  ];

  return (
    <>
      <h1>Events Page</h1>
      {DUMMY_EVENTS.map((event) => (
        <li key={event.id}>
          <Link to={event.id}>{event.name}</Link>
        </li>
      ))}
    </>
  );
};

export default EventsPage;
