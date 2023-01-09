import { HiPencilAlt, HiPlus, HiTrash } from "react-icons/hi";
import { ButtonsDisabledContext } from "./Carousel";
import { useContext } from "react";

export default function CarouselCardRenderedItem({
  name,
  sets,
  reps,
  technique,
  onAdd,
  onDelete,
  cardItemDeletable,
  onEdit,
}) {
  const { buttonsDisabledState } = useContext(ButtonsDisabledContext);

  return (
    <div className="relative group carousel-card-padding rounded-md carousel-card-item-colors">
      <span className="absolute opacity-0 top-0 -left-12 pt-2.5 pb-1.5 ml-1.5 rounded-md transition-opacity transition-all duration-300 bg-stone-100 transform group-hover:opacity-100 group-hover:bg-stone-200">
        <button
          disabled={buttonsDisabledState.buttonsDisabled}
          className={`mr-0.5 ${
            !buttonsDisabledState.buttonsDisabled && "hover:text-stone-800"
          }`}
          onClick={onAdd}
        >
          <HiPlus />
        </button>
        <button
          disabled={buttonsDisabledState.buttonsDisabled || !cardItemDeletable}
          className={`mr-0.5 ${!(
            buttonsDisabledState.buttonsDisabled ||
            (!cardItemDeletable && "hover:text-stone-800")
          )}`}
          onClick={onDelete}
        >
          <HiTrash />
        </button>
        <button
          disabled={buttonsDisabledState.buttonsDisabled}
          className={`${
            !buttonsDisabledState.buttonsDisabled && "hover:text-stone-800"
          }`}
          onClick={onEdit}
        >
          <HiPencilAlt />
        </button>
      </span>
      <div className="grid grid-cols-11 justify-between">
        <span className="col-span-5">
          <b>Name</b>: {name}
        </span>
        <span className="col-span-2">
          <b>Sets</b>: {sets}
        </span>
        <span className="col-span-2">
          <b>Reps</b>: {reps}
        </span>
        <button className="col-span-2">Technique</button>
      </div>
    </div>
  );
}
