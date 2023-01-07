import { useDispatch, useSelector } from "react-redux";
import CarouseCardTitle from "./CarouseCardTitle";
import CarouselCardItem from "./CarouselCardItem";
import { addCardItemToCardThunk } from "../store";
import { HiPlus, HiTrash } from "react-icons/hi";
import { useEffect } from "react";

export default function CarouselCard({ cardId, onAdd }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.cards);
  console.log(state);

  const handleCardItemAdd = () => {
    dispatch(addCardItemToCardThunk(cardId));
  };

  const renderedCardItems = state.data[cardId].cardItemsId.map((cardItemId) => (
    <CarouselCardItem
      key={cardItemId}
      cardItemId={cardItemId}
      onAdd={handleCardItemAdd}
    />
  ));

  return (
    <div className="relative carousel-card">
      <span className="absolute top-4 right-4 text-3xl text-stone-600">
        <button className="transition-colors duration-300 transform hover:text-stone-700 active:text-stone-800">
          <HiTrash />
        </button>
        <button
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
