import { useState } from "react";
import CarouselCard from "./CarouselCard";
import CarouselArrow from "./CarouselArrow";

export default function Carousel({ carouselId }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const [cards, setCards] = useState(["CarouselCard 1"]);

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
