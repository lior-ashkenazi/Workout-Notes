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
    <div className="flex flex-col gap-8 shrink-0 w-72 h-screen px-4 py-8 bg-white bg-opacity-80 border-r">
      <SidebarAddButton onClick={handleWorkoutAdd}>
        Add Workout Program
      </SidebarAddButton>
      <ul className="flex flex-col flex-1 font-medium gap-4">
        {renderedWorkouts}
      </ul>
    </div>
  );
}
