import { useParams } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function WorkoutPage() {
  const state = useSelector((state) => state.reducer.carousels);
  const { carouselId } = useParams();
  return carouselId in state.data ? (
    <Carousel carouselId={carouselId} />
  ) : (
    <Navigate to={"/Workout-Notes/404"} replace />
  );
}
