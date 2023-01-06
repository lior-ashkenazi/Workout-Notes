import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sidebarItemsActions } from "../store/index";

import SidebarAddButton from "./SidebarAddButton";
import SidebarButton from "./SidebarButton";
import SidebarInput from "./SidebarInput";

export default function Sidebar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.sidebarItems);
  const [workoutsText, setWorkoutsText] = useState([]);

  useEffect(() => {
    setWorkoutsText(state.data.map((workoutsText) => workoutsText.text));
  }, [state.data]);

  const handleWorkoutAdd = () => {
    // TODO call relevant thunk
    dispatch(sidebarItemsActions.addSidebarItem());

    setWorkoutsText([...workoutsText, ""]);

    // TODO navigate to the relevant page
  };

  const handleWorkoutChange = (text, i) => {
    const newWorkoutsText = [...workoutsText];
    newWorkoutsText[i] = text;
    setWorkoutsText(newWorkoutsText);

    const workout = state.data[i];
    const updatedWorkout = { ...workout, text };
    const newWorkouts = [...state.data];
    newWorkouts[i] = updatedWorkout;

    dispatch(sidebarItemsActions.updateSidebarItems(newWorkouts));
  };

  const _handleWorkoutEditable = (i, isEditable) => {
    const workout = state.data[i];
    const updatedWorkout = { ...workout, editable: isEditable };
    const newWorkouts = [...state.data];
    newWorkouts[i] = updatedWorkout;

    dispatch(sidebarItemsActions.updateSidebarItems(newWorkouts));
  };

  const handleWorkoutSave = (i) => {
    _handleWorkoutEditable(i, false);
  };

  const handleWorkoutDelete = (i) => {
    dispatch(sidebarItemsActions.deleteSidebarItem(i));

    // TODO navigate to homepage
  };

  const handleWorkoutEdit = (i) => {
    _handleWorkoutEditable(i, true);
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
          <SidebarButton
            secondary
            onDelete={() => handleWorkoutDelete(i)}
            onEdit={() => handleWorkoutEdit(i)}
            pageId={workout.id}
          >
            {workout.text}
          </SidebarButton>
        )}
      </Fragment>
    );
  });

  return (
    <div className="flex flex-col gap-8 shrink-0 w-72 h-screen px-4 py-8 bg-white bg-opacity-65 border-r">
      <SidebarAddButton onClick={handleWorkoutAdd}>
        Add Workout Program
      </SidebarAddButton>
      <ul className="flex flex-col flex-1 font-medium gap-4">
        {renderedWorkouts}
      </ul>
    </div>
  );
}
