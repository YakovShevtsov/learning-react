import { useParams } from "react-router";

export function EventDetailsPage() {
  const params = useParams();

  return <h1>{params.id}</h1>;
}
