import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CarouselCard from "./CarouselCard";
import CarouselArrow from "./CarouselArrow";

export default function Carousel({ carouselId }) {
  const state = useSelector((state) => state.reducer.carousels);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const validPrevArrow = currentCardIndex > 0;
  const validNextArrow = currentCardIndex < state.data[carouselId].length - 1;

  function handlePrevClick() {
    validPrevArrow > 0 && setCurrentCardIndex(currentCardIndex - 1);
  }

  function handleNextClick() {
    validNextArrow && setCurrentCardIndex(currentCardIndex + 1);
  }

  return (
    <div className="carousel-colors carousel-bg flex shrink items-center justify-center gap-12 w-full">
      <CarouselArrow
        onClick={handlePrevClick}
        isDefaultDirection
        showArrow={validPrevArrow}
      />
      <CarouselCard cardId={state.data[carouselId][currentCardIndex]} />
      <CarouselArrow onClick={handleNextClick} showArrow={validNextArrow} />
    </div>
  );
}
