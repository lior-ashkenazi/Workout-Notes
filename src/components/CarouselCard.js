import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouseCardTitle from "./CarouseCardTitle";
import CarouselCardItem from "./CarouselCardItem";
import { addCardItemToCardThunk } from "../store";
import { HiPlus, HiTrash } from "react-icons/hi";
import { ButtonsDisabledContext } from "./Carousel";

export default function CarouselCard({ cardId, onAdd }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.cards);
  const { buttonsDisabledState } = useContext(ButtonsDisabledContext);

  const handleCardItemAdd = (i) => {
    dispatch(addCardItemToCardThunk({ id: cardId, i }));
  };

  const renderedCardItems = state.data[cardId].cardItemsId.map(
    (cardItemId, i) => (
      <CarouselCardItem
        key={cardItemId}
        cardItemId={cardItemId}
        onAdd={() => handleCardItemAdd(i)}
      />
    )
  );

  return (
    <div className="relative carousel-card">
      <span className="absolute top-4 right-4 text-3xl text-stone-600">
        <button
          disabled={buttonsDisabledState.buttonsDisabled}
          className="transition-colors duration-300 transform hover:text-stone-700 active:text-stone-800"
        >
          <HiTrash />
        </button>
        <button
          disabled={buttonsDisabledState.buttonsDisabled}
          className="transition-colors duration-300 transform hover:text-stone-700 active:text-stone-800"
          onClick={onAdd}
        >
          <HiPlus />
        </button>
      </span>
      <CarouseCardTitle cardId={cardId} />
      <ul className="w-full flex flex-col gap-2">{renderedCardItems}</ul>
    </div>
  );
}
