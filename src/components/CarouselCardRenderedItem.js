import {
  HiPencilAlt,
  HiPlus,
  HiTrash,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";
import { ButtonsDisabledContext } from "./Carousel";
import { useContext, useEffect, useState } from "react";
import CarouselCardItemYouTubeDiv from "./CarouselCardItemYouTubeDiv";

export default function CarouselCardRenderedItem({
  name,
  sets,
  reps,
  techniqueUrl,
  onAdd,
  onDelete,
  cardItemDeletable,
  onEdit,
}) {
  const { buttonsDisabledState } = useContext(ButtonsDisabledContext);
  const [techniqueUrlDropdownOpen, setTechniqueUrlDropdownOpen] =
    useState(false);

  const handleTechniqueUrlDropdownClick = () => {
    setTechniqueUrlDropdownOpen(!techniqueUrlDropdownOpen);
  };

  useEffect(() => {}, [techniqueUrlDropdownOpen]);

  return (
    <div
      className={`${
        techniqueUrlDropdownOpen ? "h-12 mb-[24rem]" : "h-12"
      } transition-height duration-250 ease-in-out`}
    >
      <div className="relative group carousel-card-padding rounded-md carousel-card-item-colors">
        <span className="absolute opacity-0 top-0 -left-12 pt-2.5 pb-2 ml-1.5 rounded-md transition-all duration-300 transform bg-stone-100 group-hover:opacity-100 group-hover:bg-stone-200">
          <button
            disabled={
              buttonsDisabledState.buttonsDisabled || techniqueUrlDropdownOpen
            }
            className={`mr-0.5   ${
              !(
                buttonsDisabledState.buttonsDisabled || techniqueUrlDropdownOpen
              ) && "hover:text-stone-800"
            }`}
            onClick={onAdd}
          >
            <HiPlus />
          </button>
          <button
            disabled={
              buttonsDisabledState.buttonsDisabled ||
              !cardItemDeletable ||
              techniqueUrlDropdownOpen
            }
            className={`mr-0.5 ${
              !(
                buttonsDisabledState.buttonsDisabled ||
                !cardItemDeletable ||
                techniqueUrlDropdownOpen
              ) && "hover:text-stone-800"
            }`}
            onClick={onDelete}
          >
            <HiTrash />
          </button>
          <button
            disabled={
              buttonsDisabledState.buttonsDisabled || techniqueUrlDropdownOpen
            }
            className={`${
              !(
                buttonsDisabledState.buttonsDisabled || techniqueUrlDropdownOpen
              ) && "hover:text-stone-800"
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
              disabled={!techniqueUrl}
              className={`relative md:text-base text-xs col-span-2 pr-3.5 rounded-md bg-stone-50 text-stone-900 border border-stone-800 transition-colors duration-300 transform group-hover:bg-stone-200 ${
                techniqueUrl && "hover:!bg-stone-300 active:bg-stone-200"
              }`}
              onClick={handleTechniqueUrlDropdownClick}
            >
              <b>Technique</b>
              {techniqueUrlDropdownOpen ? (
                <HiChevronUp className="absolute top-1.5 right-0.5" />
              ) : (
                <HiChevronDown className="absolute top-1.5 right-0.5" />
              )}
            </button>
          </div>
        </div>
        <div>
          <CarouselCardItemYouTubeDiv
            techniqueUrl={techniqueUrl}
            isOpen={techniqueUrlDropdownOpen}
          />
        </div>
      </div>
    </div>
  );
}
