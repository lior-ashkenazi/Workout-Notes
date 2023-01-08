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
  onEdit,
}) {
  const { buttonsDisabledState } = useContext(ButtonsDisabledContext);

  console.log("shimon");
  console.log(buttonsDisabledState);

  return (
    <div className="relative group carousel-card-padding transition-colors duration-300 transform rounded-md hover:bg-stone-200 hover:text-stone-900">
      <span className="absolute top-0 -left-12 pt-2.5 pb-1.5 ml-1.5 rounded-md transition-colors duration-300 transform group-hover:bg-stone-200 group-hover:text-stone-900">
        <button
          disabled={buttonsDisabledState.buttonsDisabled}
          className="mr-0.5 text-transparent transition-colors duration-300 transform group-hover:text-stone-900"
          onClick={onAdd}
        >
          <HiPlus />
        </button>
        <button
          disabled={buttonsDisabledState.buttonsDisabled}
          className="mr-0.5 text-transparent transition-colors duration-300 transform group-hover:text-stone-900"
        >
          <HiTrash />
        </button>
        <button
          disabled={buttonsDisabledState.buttonsDisabled}
          className="text-transparent transition-colors duration-300 transform group-hover:text-stone-900"
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
