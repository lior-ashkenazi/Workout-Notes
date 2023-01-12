import { MemoryRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import HomePage from "./pages/HomePage";
import WorkoutPage from "./pages/WorkoutPage";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <MemoryRouter initialEntries={["/Workout-Notes"]}>
      <Routes>
        <Route path="/Workout-Notes" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":carouselId" element={<WorkoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
