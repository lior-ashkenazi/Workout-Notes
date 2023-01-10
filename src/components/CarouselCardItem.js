import { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardItemsActions } from "../store";
import CarouselCardItemForm from "./CarouselCardItemForm";
import CarouselCardRenderedItem from "./CarouselCardRenderedItem";
import { ButtonsDisabledContext, SET_BUTTONS_DISABLED } from "./Carousel";

export default function CarouselCardItem({
  cardItemId,
  onAdd,
  onDelete,
  cardItemDeletable,
}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.cardItems);
  const { buttonsDisabledDispatch } = useContext(ButtonsDisabledContext);
  const [name, setName] = useState(state.data[cardItemId]?.name);
  const [sets, setSets] = useState(state.data[cardItemId]?.sets);
  const [reps, setReps] = useState(state.data[cardItemId]?.reps);
  const [techniqueUrl, setTechniqueUrl] = useState(
    state.data[cardItemId]?.technique
  );
  const [editable, setEditable] = useState(state.data[cardItemId]?.editable);

  useEffect(() => {
    const payload = editable;
    buttonsDisabledDispatch({
      type: SET_BUTTONS_DISABLED,
      payload,
    });
  }, [editable]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSetsChange = (event) => {
    setSets(event.target.value);
  };

  const handleRepsChange = (event) => {
    setReps(event.target.value);
  };

  const handleTechniqueUrlChange = (event) => {
    setTechniqueUrl(event.target.value);
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !sets || !reps) {
      alert("The name, sets and reps fields must be filled.");
      return;
    }

    const validRangePattern =
      /^(?:[1-9]|[1-9]\d)(?:-(?:[1-9]|[1-9]\d)(?:\d)?)?$/;
    const validYoutubeLinkPattern =
      /^(?:https?:\/\/)?(?:www\.|m\.|(?:[a-z]{2}\.)?)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})(?:[^\s]*)?$/;

    if (!sets.match(validRangePattern) || !reps.match(validRangePattern)) {
      alert("Sets or reps are in an invalid form.");
      return;
    }

    if (techniqueUrl && !techniqueUrl.match(validYoutubeLinkPattern)) {
      alert("Technique must be a YouTube video link.");
      return;
    }

    const updatedInfo = { name, sets, reps, techniqueUrl, editable: false };
    dispatch(
      cardItemsActions.updateCardItem({
        id: cardItemId,
        info: updatedInfo,
      })
    );

    setEditable(false);
  };

  return (
    <>
      {editable ? (
        <CarouselCardItemForm
          name={name}
          sets={sets}
          reps={reps}
          techniqueUrl={techniqueUrl}
          onSubmit={handleSubmit}
          onNameChange={handleNameChange}
          onSetsChange={handleSetsChange}
          onRepsChange={handleRepsChange}
          onTechniqueUrlChange={handleTechniqueUrlChange}
        />
      ) : (
        <CarouselCardRenderedItem
          name={name}
          sets={sets}
          reps={reps}
          techniqueUrl={techniqueUrl}
          onAdd={onAdd}
          onDelete={onDelete}
          onEdit={handleEdit}
          cardItemDeletable={cardItemDeletable}
        />
      )}
    </>
  );
}
