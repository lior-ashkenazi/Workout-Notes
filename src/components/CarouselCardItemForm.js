export default function CarouselCardItemForm({
  name,
  sets,
  reps,
  technique,
  onSubmit,
  onNameChange,
  onSetsChange,
  onRepsChange,
  onTechniqueChange,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-4 gap-3 place-items-start bg-stone-50 rounded-lg border-2 border-stone-800 px-2 py-2 mr-9 ml-3"
    >
      <div className="col-span-2 inline-flex gap-2">
        <label htmlFor="name" className="font-bold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          className="rounded-md w-full"
          maxLength={21}
        />
      </div>
      <div className="inline-flex gap-2">
        <label htmlFor="sets" className="font-bold">
          Sets:
        </label>
        <input
          type="text"
          id="sets"
          value={sets}
          onChange={onSetsChange}
          className="rounded-md w-full"
        />
      </div>
      <div className="inline-flex gap-2">
        <label htmlFor="reps" className="font-bold">
          Reps:
        </label>
        <input
          type="text"
          id="reps"
          value={reps}
          onChange={onRepsChange}
          className="rounded-md w-full"
        />
      </div>
      <div className="col-span-full inline-flex gap-2 w-full">
        <label htmlFor="technique" className="font-bold mr-2">
          Technique:
        </label>
        <input
          type="text"
          id="technique"
          value={technique}
          onChange={onTechniqueChange}
          className="rounded-md w-full"
        />
        <button
          type="submit"
          className="justify-self-end rounded-md bg-white px-2.5 py-0.5 text-stone-900 border border-stone-800 shadow font-semibold transition-colors duration-300 transform hover:bg-stone-100 active:bg-stone-200"
        >
          Save
        </button>
      </div>
    </form>
  );
}