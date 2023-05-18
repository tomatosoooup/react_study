import { useParams } from "react-router-dom";

const EventsDetailPage = () => {
  let { event_id } = useParams();
  // const params = useParams() and params.event_id
  return (
    <>
      <h1>Events Detail Page</h1>
      <p>Event id is {event_id}</p>
    </>
  );
};

export default EventsDetailPage;
