import { useContext } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { ButtonsDisabledContext } from "./Carousel";

export default function CarouselArrow({
  onClick,
  isDefaultDirection,
  showArrow,
}) {
  const { buttonsDisabledState } = useContext(ButtonsDisabledContext);

  console.log("rina");
  console.log(buttonsDisabledState.buttonsDisabled);

  if (!showArrow)
    return (
      <button disabled={buttonsDisabledState.buttonsDisabled}>
        <HiArrowCircleLeft className="arrow-icon invisible" />
      </button>
    );

  return (
    <button disabled={buttonsDisabledState.buttonsDisabled} onClick={onClick}>
      {isDefaultDirection ? (
        <HiArrowCircleLeft className="arrow-icon" />
      ) : (
        <HiArrowCircleRight className="arrow-icon" />
      )}
    </button>
  );
}
