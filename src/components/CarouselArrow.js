import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

export default function CarouselArrow({
  onClick,
  isDefaultDirection,
  showArrow,
}) {
  if (!showArrow)
    return (
      <button className="cursor-default">
        <HiArrowCircleLeft className="arrow-icon invisible" />
      </button>
    );

  return (
    <button onClick={onClick}>
      {isDefaultDirection ? (
        <HiArrowCircleLeft className="arrow-icon" />
      ) : (
        <HiArrowCircleRight className="arrow-icon" />
      )}
    </button>
  );
}
