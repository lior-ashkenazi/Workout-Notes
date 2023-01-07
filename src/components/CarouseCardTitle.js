import { useState } from "react";
import { cardsActions } from "../store";
import { useDispatch, useSelector } from "react-redux";

export default function CarouseCardTitle({ cardId }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.cards);
  const [text, setText] = useState(state.data[cardId].title.text);
  const [editable, setEditable] = useState(state.data[cardId].title.editable);

  const handleTitleChange = (event) => {
    setText(event.target.value);
  };

  const handleTitleClick = () => {
    setEditable(true);
  };

  const handleTitleSubmit = () => {
    setEditable(false);

    const updatedInfo = { text, editable: false };
    dispatch(cardsActions.updateCardTitle({ id: cardId, info: updatedInfo }));
  };

  // TODO when we click is like submit
  return (
    <div className="carousel-card-title">
      {editable ? (
        <input
          value={text}
          onChange={handleTitleChange}
          onBlur={handleTitleSubmit}
          autoFocus
          className="w-full outline-0 border-b-2 border-stone-800 bg-stone-50"
          placeholder="Workout Day"
        />
      ) : (
        <h2
          onClick={handleTitleClick}
          className="w-full border-b-2 border-b-transparent transition-colors duration-300 hover:border-b-2  hover:border-stone-800"
        >
          {text}
        </h2>
      )}
    </div>
  );
}
