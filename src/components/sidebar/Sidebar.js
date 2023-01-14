import { useDispatch, useSelector } from "react-redux";
import { addSidebarItemThunk, deleteSidebarItemThunk } from "../../store";

import SidebarAddButton from "./SidebarAddButton";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import { useState } from "react";

export default function Sidebar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.sidebarItems);
  const [workoutAddButtonDisabled, setWorkoutButtonDisabled] = useState(false);

  const handleSidebarItemAdd = async () => {
    await dispatch(addSidebarItemThunk());
  };

  const handleSidebarItemDelete = (sidebarItemId) => {
    dispatch(deleteSidebarItemThunk(sidebarItemId));
  };

  const handleSidebarInputFocus = () => {
    setWorkoutButtonDisabled(true);
  };

  const handleSidebarInputBlur = () => {
    setWorkoutButtonDisabled(false);
  };

  const renderedSidebarItems = Object.keys(state.data).map((sidebarItemId) => (
    <SidebarItem
      key={sidebarItemId}
      sidebarItemId={sidebarItemId}
      onDelete={() => handleSidebarItemDelete(sidebarItemId)}
      onInputFocus={() => handleSidebarInputFocus()}
      onInputBlur={() => handleSidebarInputBlur()}
    />
  ));

  return (
    <div>
      <div className="sidebar">
        <div className="flex flex-col gap-y-4">
          <SidebarLogo />
          <SidebarAddButton
            onClick={handleSidebarItemAdd}
            disabled={workoutAddButtonDisabled}
          >
            Add Workout Program
          </SidebarAddButton>
        </div>
        <ul className="flex flex-col flex-1 font-medium gap-4 overflow-y-auto mt-8">
          {renderedSidebarItems}
        </ul>
      </div>
      <div className="navbar">
        <SidebarAddButton onClick={handleSidebarItemAdd}>
          Add Workout Program
        </SidebarAddButton>
        <ul className="flex flex-row flex-1 font-medium gap-1 overflow-x-auto overflow-y-hidden">
          {renderedSidebarItems}
        </ul>
      </div>
    </div>
  );
}
