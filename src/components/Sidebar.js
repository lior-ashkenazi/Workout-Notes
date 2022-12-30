import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { workoutsActions } from "../store/index";

import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.workouts);
  console.log(state);
  const [workoutsText, setWorkoutsText] = useState([]);

  useEffect(() => {
    console.log(state.data);
  }, [state.data]);

  const handleNewWorkout = () => {
    const newWorkoutTexts = [
      ...workoutsText,
      { text: "New Workout", editable: true },
    ];
    setWorkoutsText(newWorkoutTexts);
  };

  const handleWorkoutChange = (text, i) => {
    const newWorkoutsText = [...workoutsText];
    newWorkoutsText[i].text = text;
    setWorkoutsText(newWorkoutsText);
  };

  const handleWorkoutSave = (i) => {
    const newWorkoutsText = [...workoutsText];
    newWorkoutsText[i].editable = false;
    dispatch(
      workoutsActions.addWorkout({
        text: workoutsText[i],
      })
    );
  };

  const handleEditWorkout = () => {};

  const renderedWorkouts = workoutsText.map((workout, i) => {
    return (
      <>
        {workout.editable ? (
          <input
            type="text"
            value={workoutsText[i].text}
            onChange={(e) => handleWorkoutChange(e.target.value, i)}
            onBlur={() => handleWorkoutSave(i)}
          />
        ) : (
          <SidebarButton secondary>{workout.text}</SidebarButton>
        )}
      </>
    );
  });

  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white bg-opacity-65 border-r font-roboto">
      <SidebarButton onClick={handleNewWorkout} primary>
        New Workout
      </SidebarButton>
      <div className="flex flex-col flex-1 mt-6 font-medium">
        {renderedWorkouts}
        <SidebarButton secondary>Workout Golan</SidebarButton>
        <SidebarButton secondary>Workout Jeremy</SidebarButton>
      </div>
    </div>
  );
}
