import { useParams } from "react-router-dom";

export default function WorkoutPage() {
  const { workoutId } = useParams();

  return <div>{`hello workout ${workoutId}`}</div>;
}
