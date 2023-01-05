import { useState } from "react";

export default function CarouselCardItem({ formId }) {
  const [name, setName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [technique, setTechnique] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

    setSubmitted(true);
  }

  return (
    <>
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-4 gap-3 place-items-start"
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
              className="justify-self-end rounded-md bg-white px-2.5 py-0.5 text-stone-900 border border-stone-900 shadow font-semibold transition-colors duration-300 transform hover:bg-stone-100 active:bg-stone-200"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="flex justify-between">
          <span>
            <b>Name</b>: {name}
          </span>
          <span>
            <b>Sets</b>: {sets}
          </span>
          <span>
            <b>Reps</b>: {reps}
          </span>
          <button>Technique</button>
        </div>
      )}
    </>
  );
}
