import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import WorkoutProgram from "./pages/WorkoutPage";
import Error from "./pages/Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path=":workoutId" element={<WorkoutProgram />} />
          {/*<Route path="*" element={<Error />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
