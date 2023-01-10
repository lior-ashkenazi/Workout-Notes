import {
  HiPencilAlt,
  HiPlus,
  HiTrash,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";
import { ButtonsDisabledContext } from "./Carousel";
import { useContext, useState } from "react";
import CarouselCardItemYouTubeBox from "./CarouselCardItemYouTubeBox";

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
  console.log("kevingarnett");
  console.log(!!technique);
  const { buttonsDisabledState } = useContext(ButtonsDisabledContext);
  const [techniqueDropdownOpen, setTechniqueDropdownOpen] = useState(false);

  const handleTechniqueDropdownClick = () => {
    setTechniqueDropdownOpen(!techniqueDropdownOpen);
  };

  return (
    <div
      className={`${
        techniqueDropdownOpen ? "h-96" : "h-12"
      } transition-height duration-250 ease-in-out`}
    >
      <div className="relative group carousel-card-padding rounded-md carousel-card-item-colors">
        <span className="absolute opacity-0 top-0 -left-12 pt-2.5 pb-2 ml-1.5 rounded-md transition-opacity transition-all duration-300 bg-stone-100 transform group-hover:opacity-100 group-hover:bg-stone-200">
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
            disabled={
              buttonsDisabledState.buttonsDisabled || !cardItemDeletable
            }
            className={`mr-0.5 ${
              !(buttonsDisabledState.buttonsDisabled || !cardItemDeletable) &&
              "hover:text-stone-800"
            }`}
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
        <div className="">
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
            <button
              type="submit"
              disabled={!technique}
              className={`relative col-span-2 pr-3.5 rounded-md bg-stone-50 text-stone-900 border border-stone-800 transition-colors duration-300 transform ${
                technique && "hover:bg-red-900 active:bg-stone-200"
              }`}
              onClick={handleTechniqueDropdownClick}
            >
              <b>Technique</b>
              {techniqueDropdownOpen ? (
                <HiChevronUp className="absolute top-1.5 right-0.5" />
              ) : (
                <HiChevronDown className="absolute top-1.5 right-0.5" />
              )}
            </button>
          </div>
        </div>
        <div>
          <CarouselCardItemYouTubeBox
            videoId={technique}
            isOpen={techniqueDropdownOpen}
          />
        </div>
      </div>
    </div>
  );
}
