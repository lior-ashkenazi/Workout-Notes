import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouseCardTitle from "./CarouseCardTitle";
import CarouselCardItem from "./CarouselCardItem";
import { addCardItemToCardThunk, deleteCardItemFromCardThunk } from "../store";
import { HiCheck, HiPlus, HiTrash, HiX } from "react-icons/hi";
import { ButtonsDisabledContext } from "./Carousel";

export default function CarouselCard({
  cardId,
  onAdd,
  onDelete,
  cardDeletable,
}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.cards);
  const [cardItemDeletable, setCardItemDeletable] = useState(
    1 < state.data[cardId].cardItemsId.length
  );
  const [deleteClicked, setDeleteClicked] = useState(false);

  useEffect(() => {
    setCardItemDeletable(1 < state.data[cardId].cardItemsId.length);
  }, [state.data]);

  const { buttonsDisabledState } = useContext(ButtonsDisabledContext);

  const handleCardItemAdd = (i) => {
    dispatch(addCardItemToCardThunk({ id: cardId, i }));
  };

  const handleCardItemDelete = (i) => {
    dispatch(deleteCardItemFromCardThunk({ id: cardId, i }));
  };

  const handleDeleteClicked = () => {
    setDeleteClicked(true);
  };

  const handleDeleteCanceled = () => {
    setDeleteClicked(false);
  };

  const renderedCardItems = state.data[cardId].cardItemsId.map(
    (cardItemId, i) => (
      <CarouselCardItem
        key={cardItemId}
        cardItemId={cardItemId}
        onAdd={() => handleCardItemAdd(i)}
        onDelete={() => handleCardItemDelete(i)}
        cardItemDeletable={cardItemDeletable}
      />
    )
  );

  return (
    <div className="relative carousel-card">
      <span className="absolute top-4 right-4 text-3xl text-stone-500">
        {deleteClicked ? (
          <>
            <button
              className="transition-colors duration-300 transform hover:text-stone-700 active:text-stone-800"
              onClick={() => {
                setDeleteClicked(false);
                onDelete();
              }}
            >
              <HiCheck />
            </button>
            <button
              className="transition-colors duration-300 transform hover:text-stone-700 active:text-stone-800"
              onClick={handleDeleteCanceled}
            >
              <HiX />
            </button>
          </>
        ) : (
          <>
            <button
              disabled={buttonsDisabledState.buttonsDisabled || !cardDeletable}
              className={`transition-colors duration-300 transform ${
                !buttonsDisabledState.buttonsDisabled &&
                cardDeletable &&
                "hover:text-stone-700"
              } active:text-stone-800`}
              onClick={handleDeleteClicked}
            >
              <HiTrash />
            </button>
            <button
              disabled={buttonsDisabledState.buttonsDisabled}
              className={`transition-colors duration-300 transform ${
                !buttonsDisabledState.buttonsDisabled && "hover:text-stone-700"
              } active:text-stone-800`}
              onClick={onAdd}
            >
              <HiPlus />
            </button>
          </>
        )}
      </span>
      <CarouseCardTitle cardId={cardId} />
      <ul className="w-full flex flex-col gap-2">{renderedCardItems}</ul>
    </div>
  );
}
