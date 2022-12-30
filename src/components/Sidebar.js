import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { workoutsActions } from "../store/index";

import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.workouts);
  const [workoutsText, setWorkoutText] = useState([]);

  const handleNewWorkout = () => {};
  const handleEditWorkout = () => {};

  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white bg-opacity-65 border-r font-roboto">
      <SidebarButton onClick={handleNewWorkout} primary>
        New Workout
      </SidebarButton>
      <div className="flex flex-col flex-1 mt-6">
        <SidebarButton secondary>Workout Golan</SidebarButton>
        <SidebarButton secondary>Workout Jeremy</SidebarButton>
      </div>
    </div>
  );
}
