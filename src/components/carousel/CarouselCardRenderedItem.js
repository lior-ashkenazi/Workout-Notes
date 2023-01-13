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
        <span className="absolute opacity-0 top-0 sm:-left-12 -left-8 sm:pt-2.5 sm:pb-2 pt-[1.125rem] pb-4 sm:ml-1.5 sm:text-base text-xs rounded-md transition-all duration-300 transform bg-stone-100 group-hover:opacity-100 group-hover:bg-stone-200">
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
          <div className="grid sm:grid-cols-11 grid-cols-3 justify-between">
            <span className="sm:col-span-5 col-span-full sm:text-base text-xs">
              <b>Name</b>: {name}
            </span>
            <span className="sm:col-span-2 sm:text-base text-xs">
              <b>Sets</b>: {sets}
            </span>
            <span className="sm:col-span-2 sm:text-base text-xs">
              <b>Reps</b>: {reps}
            </span>
            <button
              type="submit"
              disabled={!techniqueUrl}
              className={`relative sm:col-span-2 sm:text-base text-xs pr-3.5 rounded-md bg-stone-50 text-stone-900 border border-stone-800 transition-colors duration-300 transform group-hover:bg-stone-200 ${
                techniqueUrl && "hover:!bg-stone-300 active:bg-stone-200"
              }`}
              onClick={handleTechniqueUrlDropdownClick}
            >
              <b>Technique</b>
              {techniqueUrlDropdownOpen ? (
                <HiChevronUp className="absolute sm:top-1.5 sm:right-0.5 top-1 right-1" />
              ) : (
                <HiChevronDown className="absolute sm:top-1.5 sm:right-0.5 top-1  right-1" />
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
