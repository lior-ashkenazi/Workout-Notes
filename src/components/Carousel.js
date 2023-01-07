import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CarouselCard from "./CarouselCard";
import CarouselArrow from "./CarouselArrow";
import { addCardToCarouselThunk } from "../store";

export default function Carousel({ carouselId }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.carousels);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const validPrevArrow = currentCardIndex > 0;
  const validNextArrow = currentCardIndex < state.data[carouselId].length - 1;

  const handleAddCardToCarousel = () => {
    console.log("hellooo");
    dispatch(addCardToCarouselThunk(carouselId)).then(() => {
      setCurrentCardIndex(state.data[carouselId].length - 1);
    });
  };

  const handlePrevClick = () => {
    validPrevArrow > 0 && setCurrentCardIndex(currentCardIndex - 1);
  };

  const handleNextClick = () => {
    validNextArrow && setCurrentCardIndex(currentCardIndex + 1);
  };

  console.log("beforecarouselrender");
  console.log(state.data[carouselId]);
  console.log(state.data[carouselId][currentCardIndex]);
  return (
    <div className="carousel-colors carousel-bg flex shrink items-center justify-center gap-12 w-full">
      <CarouselArrow
        onClick={handlePrevClick}
        isDefaultDirection
        showArrow={validPrevArrow}
      />
      <CarouselCard
        cardId={state.data[carouselId][currentCardIndex]}
        onAdd={handleAddCardToCarousel}
      />
      <CarouselArrow onClick={handleNextClick} showArrow={validNextArrow} />
    </div>
  );
}
