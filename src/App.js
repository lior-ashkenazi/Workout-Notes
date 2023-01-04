import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import HomePage from "./pages/HomePage";
import WorkoutPage from "./pages/WorkoutPage";
import ErrorPage from "./pages/ErrorPage";

function ValidWorkoutPage() {
  const { data: workouts } = useSelector((state) => state.workouts);
  const { workoutId } = useParams();
  const validIds = workouts.map((workout) => workout.id);
  console.log(useParams());
  console.log(validIds);
  console.log(validIds.includes(workoutId));
  return validIds.includes(workoutId) ? <WorkoutPage /> : <ErrorPage />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":workoutId" element={<ValidWorkoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
