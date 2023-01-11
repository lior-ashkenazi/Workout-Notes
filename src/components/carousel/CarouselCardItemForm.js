export default function CarouselCardItemForm({
  name,
  sets,
  reps,
  techniqueUrl,
  onSubmit,
  onNameChange,
  onSetsChange,
  onRepsChange,
  onTechniqueUrlChange,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-4 gap-3 place-items-start bg-stone-50 rounded-lg border-2 border-stone-800 px-2 py-2 ml-10 mr-6 text-stone-800 sm:text-base text-xs"
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
          placeholder={"Exercise Name"}
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
          maxLength={5}
          placeholder={"Sets"}
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
          maxLength={5}
          placeholder={"Reps"}
        />
      </div>
      <div className="col-span-full inline-flex gap-2 w-full">
        <label htmlFor="techniqueUrl" className="font-bold mr-2">
          Technique:
        </label>
        <input
          type="text"
          id="techniqueUrl"
          value={techniqueUrl}
          onChange={onTechniqueUrlChange}
          className="rounded-md w-full"
          placeholder={"YouTube Link"}
        />
        <button
          type="submit"
          className="justify-self-end rounded-md bg-white px-2.5 py-0.5 text-stone-900 border border-stone-800 transition-colors duration-300 transform hover:bg-stone-100 active:bg-stone-200"
        >
          <b>Save</b>
        </button>
      </div>
    </form>
  );
}
