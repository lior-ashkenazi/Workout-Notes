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

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleTextEdit = () => {
    setEditable(true);
  };

  const handleTextSubmit = () => {
    if (!text) return;

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
          onChange={handleTextChange}
          onBlur={handleTextSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleTextSubmit();
          }}
        />
      ) : (
        <SidebarButton
          secondary
          onEdit={handleTextEdit}
          // onDelete={() => handleWorkoutDelete(i)}
          pageId={sidebarItemId}
        >
          {text}
        </SidebarButton>
      )}
    </>
  );
}
