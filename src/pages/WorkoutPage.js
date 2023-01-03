import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function WorkoutPage() {
  const { workoutId } = useParams();

  return <Carousel />;
}
