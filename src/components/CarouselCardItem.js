import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardItemsActions } from "../store";
import { HiPencilAlt, HiTrash, HiPlus } from "react-icons/hi";

export default function CarouselCardItem({ cardItemId, onAdd }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.cardItems);
  const [name, setName] = useState(state.data[cardItemId].name);
  const [sets, setSets] = useState(state.data[cardItemId].sets);
  const [reps, setReps] = useState(state.data[cardItemId].reps);
  const [technique, setTechnique] = useState(state.data[cardItemId].technique);
  const [editable, setEditable] = useState(state.data[cardItemId].editable);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSetsChange(event) {
    setSets(event.target.value);
  }

  function handleRepsChange(event) {
    setReps(event.target.value);
  }

  function handleTechniqueChange(event) {
    setTechnique(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setEditable(false);

    const updatedInfo = { name, sets, reps, technique, editable: false };
    dispatch(
      cardItemsActions.updateCardItem({
        id: cardItemId,
        info: updatedInfo,
      })
    );
  }

  return (
    <>
      {editable ? (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-4 gap-3 place-items-start bg-stone-50 rounded-lg border-2 border-stone-800 px-2 py-2 mr-9 ml-3"
        >
          <div className="col-span-2 inline-flex gap-2">
            <label htmlFor="name" className="font-bold">
              Name:
            </label>
            <input
              id="name"
              value={name}
              onChange={handleNameChange}
              className="rounded-sm w-full"
              maxLength={21}
            />
          </div>
          <div className="inline-flex gap-2">
            <label htmlFor="sets" className="font-bold">
              Sets:
            </label>
            <input
              id="sets"
              value={sets}
              onChange={handleSetsChange}
              className="rounded-sm w-full"
            />
          </div>
          <div className="inline-flex gap-2">
            <label htmlFor="reps" className="font-bold">
              Reps:
            </label>
            <input
              id="reps"
              value={reps}
              onChange={handleRepsChange}
              className="rounded-sm w-full"
            />
          </div>
          <div className="col-span-full inline-flex gap-2 w-full">
            <label htmlFor="technique" className="font-bold mr-2">
              Technique:
            </label>
            <input
              id="technique"
              value={technique}
              onChange={handleTechniqueChange}
              className="rounded-sm w-full"
            />
            <button
              type="submit"
              className="justify-self-end rounded-md bg-white px-2.5 py-0.5 text-stone-900 border border-stone-800 shadow font-semibold transition-colors duration-300 transform hover:bg-stone-100 active:bg-stone-200"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="relative group carousel-card-padding transition-colors duration-300 transform rounded-md hover:bg-stone-200 hover:text-stone-900">
          <span className="absolute top-0 -left-12 pt-2.5 pb-1.5 ml-1.5 rounded-md transition-colors duration-300 transform group-hover:bg-stone-200 group-hover:text-stone-900">
            <button
              className="mr-0.5 text-transparent transition-colors duration-300 transform group-hover:text-stone-900"
              onClick={onAdd}
            >
              <HiPlus />
            </button>
            <button className="mr-0.5 text-transparent transition-colors duration-300 transform group-hover:text-stone-900">
              <HiTrash />
            </button>
            <button className="text-transparent transition-colors duration-300 transform group-hover:text-stone-900">
              <HiPencilAlt />
            </button>
          </span>
          <div className="grid grid-cols-11 justify-between">
            <span className="col-span-5">
              <b>Name</b>: {name}
            </span>
            <span className="col-span-2">
              <b>Sets</b>: {sets}
            </span>
            <span className="col-span-2">
              <b>Reps</b>: {reps}
            </span>
            <button className="col-span-2">Technique</button>
          </div>
        </div>
      )}
    </>
  );
}
