import { useState } from "react";
import CarouseCardlTitle from "./CarouseCardlTitle";
import CarouselCardForm from "./CarouselCardForm";

export default function CarouselCard({ number }) {
  return (
    <div className="carousel-card">
      <CarouseCardlTitle />
      <div className="w-full">
        <CarouselCardForm />
      </div>
    </div>
  );
}
