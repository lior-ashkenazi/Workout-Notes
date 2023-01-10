import { useDispatch, useSelector } from "react-redux";
import { addSidebarItemThunk, deleteSidebarItemThunk } from "../store/index";

import SidebarAddButton from "./SidebarAddButton";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.sidebarItems);

  const handleSidebarItemAdd = async () => {
    const { payload: sidebarItemId } = await dispatch(addSidebarItemThunk());
    console.log("damian");
    console.log(sidebarItemId);
  };

  const handleSidebarItemDelete = (sidebarItemId) => {
    dispatch(deleteSidebarItemThunk(sidebarItemId));
  };

  const renderedSidebarItems = Object.keys(state.data).map((sidebarItemId) => (
    <SidebarItem
      key={sidebarItemId}
      sidebarItemId={sidebarItemId}
      onDelete={() => handleSidebarItemDelete(sidebarItemId)}
    />
  ));

  return (
    <div className="sidebar">
      <SidebarAddButton onClick={handleSidebarItemAdd}>
        Add Workout Program
      </SidebarAddButton>
      <ul className="flex flex-col flex-1 font-medium gap-4 overflow-y-auto">
        {renderedSidebarItems}
      </ul>
    </div>
  );
}
