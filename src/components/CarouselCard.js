import { useState } from "react";
import CarouseCardTitle from "./CarouseCardlTitle";
import CarouselCardItem from "./CarouselCardItem";

export default function CarouselCard({ number }) {
  return (
    <div className="carousel-card">
      <CarouseCardTitle />
      <ul className="w-full">
        <CarouselCardItem />
      </ul>
    </div>
  );
}
