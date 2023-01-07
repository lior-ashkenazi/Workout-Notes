import { useDispatch, useSelector } from "react-redux";
import { addSidebarItemThunk } from "../store/index";

import SidebarAddButton from "./SidebarAddButton";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.sidebarItems);
  const bigstate = useSelector((state) => state);
  console.log(bigstate);

  const handleWorkoutAdd = () => {
    dispatch(addSidebarItemThunk());
  };

  const handleWorkoutDelete = (i) => {
    // dispatch(sidebarItemsActions.deleteSidebarItem(i));
    // TODO navigate to homepage
  };

  const renderedWorkouts = Object.keys(state.data).map((sidebarItemId) => (
    <SidebarItem key={sidebarItemId} sidebarItemId={sidebarItemId} />
  ));

  return (
    <div className="sidebar">
      <SidebarAddButton onClick={handleWorkoutAdd}>
        Add Workout Program
      </SidebarAddButton>
      <ul className="flex flex-col flex-1 font-medium gap-4">
        {renderedWorkouts}
      </ul>
    </div>
  );
}
