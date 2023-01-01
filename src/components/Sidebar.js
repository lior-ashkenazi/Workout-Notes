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
  const [workoutsText, setWorkoutsText] = useState([]);

  useEffect(() => {
    setWorkoutsText(state.data.map((workoutsText) => workoutsText.text));
  }, [state.data]);

  const handleWorkoutAdd = () => {
    const newWorkout = {
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

  const _handleWorkoutSet = (i, isEditable) => {
    const workout = state.data[i];
    const updatedWorkout = { ...workout, editable: isEditable };
    const newWorkouts = [...state.data];
    newWorkouts[i] = updatedWorkout;

    dispatch(workoutsActions.setWorkouts(newWorkouts));
  };

  const handleWorkoutSave = (i) => {
    _handleWorkoutSet(i, false);
  };

  const handleWorkoutDelete = (i) => {
    const workout = state.data[i];

    dispatch(workoutsActions.deleteWorkout(workout.id));
  };

  const handleWorkoutEdit = (i) => {
    _handleWorkoutSet(i, true);
  };

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
            onEdit={() => handleWorkoutEdit(i)}
            pageId={workout.id}
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
        Add Workout Program
      </SidebarAddWorkoutButton>
      <div className="flex flex-col flex-1 mt-8 font-medium gap-4">
        {renderedWorkouts}
      </div>
    </div>
  );
}
