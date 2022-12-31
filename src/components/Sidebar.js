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

  const handleWorkoutAdd = () => {
    const newWorkout = {
      id: state.nextWorkoutId,
      text: "New Workout",
      editable: true,
    };

    const newWorkouts = [...state.data];
    setWorkoutsText([...workoutsText, "New Workout"]);
    newWorkouts.push(newWorkout);

    dispatch(workoutsActions.addWorkout(newWorkout));
  };

  const handleWorkoutChange = (text, i) => {
    const newWorkoutsText = [...workoutsText];
    newWorkoutsText[i] = text;
    setWorkoutsText(newWorkoutsText);

    const workout = state.data[i];
    const updatedWorkout = { ...workout, text };
    const newWorkouts = [...state.data];
    newWorkouts[i] = updatedWorkout;

    dispatch(workoutsActions.setWorkouts(newWorkouts));
  };

  const handleWorkoutSave = (i) => {
    const workout = state.data[i];
    const updatedWorkout = { ...workout, editable: false };
    const newWorkouts = [...state.data];
    newWorkouts[i] = updatedWorkout;

    dispatch(workoutsActions.setWorkouts(newWorkouts));
  };

  const handleWorkoutDelete = (i) => {
    const workout = state.data[i];

    dispatch(workoutsActions.deleteWorkout(workout.id));
  };

  const handleEditWorkout = () => {};

  const renderedWorkouts = state.data.map((workout, i) => {
    return (
      <Fragment key={workout.id}>
        {workout.editable ? (
          <SidebarInput
            type="text"
            value={workoutsText[i]}
            autoFocus
            onChange={(e) => handleWorkoutChange(e.target.value, i)}
            onBlur={() => handleWorkoutSave(i)}
          />
        ) : (
          <SidebarWorkoutButton
            secondary
            onDelete={() => handleWorkoutDelete(i)}
          >
            {workout.text}
          </SidebarWorkoutButton>
        )}
      </Fragment>
    );
  });

  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white bg-opacity-65 border-r font-roboto">
      <SidebarAddWorkoutButton onClick={handleWorkoutAdd}>
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
