import { useState } from "react";
import Card from "./Card";
import CarouselArrow from "./CarouselArrow";

export default function Carousel({ workoutId }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const [cards, setCards] = useState([
    "Card 1",
    "Card 2",
    "Card 3",
    "Card 4",
    "Card 5",
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
    <div className="carousel-colors carousel-bg flex w-full items-center justify-center gap-12">
      <CarouselArrow
        onClick={handlePrevClick}
        isDefaultDirection
        showArrow={validPrevArrow}
      />
      <Card number={mainCard} />
      <CarouselArrow onClick={handleNextClick} showArrow={validNextArrow} />
    </div>
  );
}
