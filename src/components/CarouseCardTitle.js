import { useContext, useEffect, useState } from "react";
import { cardsActions } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { ButtonsDisabledContext } from "./Carousel";

export default function CarouseCardTitle({ cardId }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.cards);
  const { buttonsDisabledState } = useContext(ButtonsDisabledContext);
  const [text, setText] = useState(state.data[cardId].title.text);
  const [editable, setEditable] = useState(state.data[cardId].title.editable);

  useEffect(() => {
    setText(state.data[cardId].title.text);
    setEditable(state.data[cardId].title.editable);
  }, [cardId]);

  const handleTitleChange = (event) => {
    setText(event.target.value);
  };

  const handleTitleClick = () => {
    if (buttonsDisabledState.buttonsDisabled) return;
    setEditable(true);
  };

  const handleTitleSubmit = () => {
    if (!text) return;

    setEditable(false);

    const updatedInfo = { text, editable: false };
    dispatch(cardsActions.updateCardTitle({ id: cardId, info: updatedInfo }));
  };

  return (
    <div className="carousel-card-title carousel-card-padding">
      {editable ? (
        <input
          type="text"
          value={text}
          onChange={handleTitleChange}
          onBlur={handleTitleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleTitleSubmit();
          }}
          autoFocus
          className="w-full outline-0 border-b-2 border-stone-800 bg-transparent"
          placeholder="Workout Day"
        />
      ) : (
        <h2
          onClick={handleTitleClick}
          className={`w-full border-b-2 border-b-transparent transition-colors duration-300 ${
            !buttonsDisabledState.buttonsDisabled &&
            "hover:border-b-2  hover:border-stone-800"
          }`}
        >
          {text}
        </h2>
      )}
    </div>
  );
}
