import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import HomePage from "./pages/HomePage";
import WorkoutPage from "./pages/WorkoutPage";
import ErrorPage from "./pages/ErrorPage";

function ValidWorkoutPage() {
  const { data: workouts } = useSelector((state) => state.workouts);
  const { workoutId: workoutIdString } = useParams();
  const workoutId = parseInt(workoutIdString, 10);
  const validIds = workouts.map((workout) => workout.id);
  console.log(validIds);
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
