import SidebarInput from "./SidebarInput";
import SidebarButton from "./SidebarButton";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sidebarItemsActions } from "../../store";
import { useNavigate } from "react-router-dom";

export default function SidebarItem({
  sidebarItemId,
  onDelete,
  onInputFocus,
  onInputBlur,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    onInputBlur();

    const updatedInfo = { text, editable: false };
    dispatch(
      sidebarItemsActions.updateSidebarItem({
        id: sidebarItemId,
        info: updatedInfo,
      })
    );

    navigate(`/Workout-Notes/${sidebarItemId}`);
  };

  return (
    <>
      {editable ? (
        <SidebarInput
          type="text"
          value={text}
          autoFocus
          onFocus={onInputFocus}
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
          onDelete={onDelete}
          pageId={sidebarItemId}
        >
          {text}
        </SidebarButton>
      )}
    </>
  );
}
