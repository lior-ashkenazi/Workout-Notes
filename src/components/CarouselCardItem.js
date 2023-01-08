import { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardItemsActions } from "../store";
import CarouselCardItemForm from "./CarouselCardItemForm";
import CarouselCardRenderedItem from "./CarouselCardRenderedItem";
import { ButtonsDisabledContext, SET_BUTTONS_DISABLED } from "./Carousel";

export default function CarouselCardItem({ cardItemId, onAdd }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.cardItems);
  const { buttonsDisabledDispatch } = useContext(ButtonsDisabledContext);
  const [name, setName] = useState(state.data[cardItemId].name);
  const [sets, setSets] = useState(state.data[cardItemId].sets);
  const [reps, setReps] = useState(state.data[cardItemId].reps);
  const [technique, setTechnique] = useState(state.data[cardItemId].technique);
  const [editable, setEditable] = useState(state.data[cardItemId].editable);

  console.log("balbalehu");
  console.log(editable);

  useEffect(() => {
    if (editable) {
      buttonsDisabledDispatch({
        type: SET_BUTTONS_DISABLED,
        payload: true,
      });
    }
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

  const handleTechniqueChange = (event) => {
    setTechnique(event.target.value);
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
      /^(https?:\/\/)?((www|m)\.)?(youtube\.com|youtu\.be)(\/\S*)?$/;

    if (!sets.match(validRangePattern) || !reps.match(validRangePattern)) {
      alert("Sets or reps are in an invalid form.");
      return;
    }

    if (technique && !technique.match(validYoutubeLinkPattern)) {
      alert("Technique must be a YouTube video link.");
      return;
    }

    buttonsDisabledDispatch({
      type: SET_BUTTONS_DISABLED,
      payload: false,
    });

    setEditable(false);

    const updatedInfo = { name, sets, reps, technique, editable: false };
    dispatch(
      cardItemsActions.updateCardItem({
        id: cardItemId,
        info: updatedInfo,
      })
    );
  };

  return (
    <>
      {editable ? (
        <CarouselCardItemForm
          name={name}
          sets={sets}
          reps={reps}
          technique={technique}
          onSubmit={handleSubmit}
          onNameChange={handleNameChange}
          onSetsChange={handleSetsChange}
          onRepsChange={handleRepsChange}
          onTechniqueChange={handleTechniqueChange}
        />
      ) : (
        <CarouselCardRenderedItem
          name={name}
          sets={sets}
          reps={reps}
          technique={technique}
          onAdd={onAdd}
          onDelete={true}
          onEdit={handleEdit}
        />
      )}
    </>
  );
}
