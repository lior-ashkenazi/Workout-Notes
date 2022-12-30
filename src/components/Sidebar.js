import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { workoutsActions } from "../store/index";

import SidebarAddWorkoutButton from "./SidebarAddWorkoutButton";
import SidebarWorkoutButton from "./SidebarWorkoutButton";
import SidebarInput from "./SidebarInput";

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
      <Fragment key={i}>
        {workout.editable ? (
          <SidebarInput
            type="text"
            value={workoutsText[i].text}
            autoFocus
            onChange={(e) => handleWorkoutChange(e.target.value, i)}
            onBlur={() => handleWorkoutSave(i)}
          />
        ) : (
          <SidebarWorkoutButton secondary>{workout.text}</SidebarWorkoutButton>
        )}
      </Fragment>
    );
  });

  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white bg-opacity-65 border-r font-roboto">
      <SidebarAddWorkoutButton onClick={handleNewWorkout}>
        New Workout
      </SidebarAddWorkoutButton>
      <div className="flex flex-col flex-1 mt-8 font-medium gap-4">
        <SidebarWorkoutButton>Workout Golan</SidebarWorkoutButton>
        <SidebarWorkoutButton>Workout Jeremy</SidebarWorkoutButton>
        {renderedWorkouts}
      </div>
    </div>
  );
}
