import { useSelector } from "react-redux";
import CarouseCardTitle from "./CarouseCardTitle";
import CarouselCardItem from "./CarouselCardItem";

export default function CarouselCard({ cardId }) {
  const state = useSelector((state) => state.reducer.cards);

  const renderedCardItems = state.data[cardId].cardItemsId.map((cardItemId) => (
    <CarouselCardItem key={cardItemId} cardItemId={cardItemId} />
  ));

  return (
    <div className="carousel-card">
      <CarouseCardTitle cardId={cardId} />
      <ul className="w-full flex flex-col gap-2">{renderedCardItems}</ul>
    </div>
  );
}
