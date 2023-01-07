import SidebarInput from "./SidebarInput";
import SidebarButton from "./SidebarButton";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sidebarItemsActions } from "../store";

export default function SidebarItem({ sidebarItemId }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.sidebarItems);
  const [text, setText] = useState(state.data[sidebarItemId].text);
  const [editable, setEditable] = useState(state.data[sidebarItemId].editable);

  const handleWorkoutChange = (event) => {
    setText(event.target.value);
  };

  const handleWorkoutEdit = (i) => {
    setEditable(true);
  };

  const handleWorkoutSubmit = (i) => {
    setEditable(false);

    const updatedInfo = { text, editable: false };
    dispatch(
      sidebarItemsActions.updateSidebarItems({
        id: sidebarItemId,
        info: updatedInfo,
      })
    );
  };

  return (
    <>
      {editable ? (
        <SidebarInput
          type="text"
          value={text}
          autoFocus
          onChange={handleWorkoutChange}
          onBlur={handleWorkoutSubmit}
        />
      ) : (
        <SidebarButton
          secondary
          onEdit={handleWorkoutEdit}
          // onDelete={() => handleWorkoutDelete(i)}
          pageId={sidebarItemId}
        >
          {text}
        </SidebarButton>
      )}
    </>
  );
}
