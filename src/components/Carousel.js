import { useState } from "react";
import CarouselCard from "./CarouselCard";
import CarouselArrow from "./CarouselArrow";

export default function Carousel({ workoutId }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const [cards, setCards] = useState([
    "CarouselCard 1",
    "CarouselCard 2",
    "CarouselCard 3",
    "CarouselCard 4",
    "CarouselCard 5",
  ]);

  const mainCard = cards[currentCardIndex];
  const validPrevArrow = currentCardIndex > 0;
  const validNextArrow = currentCardIndex < cards.length - 1;

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
      <CarouselCard number={mainCard} />
      <CarouselArrow onClick={handleNextClick} showArrow={validNextArrow} />
    </div>
  );
}
