import { useState } from "react";

const VALID_YOUTUBE_LINK_PATTERN =
  /^(?:https?:\/\/)?(?:www\.|m\.|(?:[a-z]{2}\.)?)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})(?:[^\s]*)?$/;

const VALID_RANGE_PATTERN = /^(?:[1-9]|[1-9]\d)(?:-(?:[1-9]|[1-9]\d)(?:\d)?)?$/;

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
  const [nameInvalidLabel, setNameInvalidLabel] = useState(false);

  const [setsInvalidLabel, setSetsInvalidLabel] = useState(false);
  const [setsInvalidLabelText, setSetsInvalidLabelText] = useState("");

  const [repsInvalidLabel, setRepsInvalidLabel] = useState(false);
  const [repsInvalidLabelText, setRepsInvalidLabelText] = useState("");

  const [techniqueUrlInvalidLabel, setTechniqueUrlInvalidLabel] =
    useState(false);

  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

  const renderSaveButtonDisabled = () => {
    setSaveButtonDisabled(
      !name ||
        !sets ||
        !reps ||
        nameInvalidLabel ||
        setsInvalidLabel ||
        repsInvalidLabel ||
        techniqueUrlInvalidLabel
    );
  };

  const handleNameBlur = () => {
    if (!name) setNameInvalidLabel(true);
    else setNameInvalidLabel(false);
    renderSaveButtonDisabled();
  };

  const handleSetsBlur = () => {
    if (!sets) {
      setSetsInvalidLabel(true);
      setSetsInvalidLabelText("Sets must be filled.");
    } else if (!sets.match(VALID_RANGE_PATTERN)) {
      setSetsInvalidLabel(true);
      setSetsInvalidLabelText("Sets must be valid.");
    } else setSetsInvalidLabel(false);
    renderSaveButtonDisabled();
  };

  const handleRepsBlur = () => {
    if (!reps) {
      setRepsInvalidLabel(true);
      setRepsInvalidLabelText("Reps must be filled.");
    } else if (!reps.match(VALID_RANGE_PATTERN)) {
      setRepsInvalidLabel(true);
      setRepsInvalidLabelText("Reps must be valid.");
    } else setRepsInvalidLabel(false);
    renderSaveButtonDisabled();
  };

  const handleTechniqueUrlBlur = () => {
    if (techniqueUrl && !techniqueUrl.match(VALID_YOUTUBE_LINK_PATTERN))
      setTechniqueUrlInvalidLabel(true);
    else setTechniqueUrlInvalidLabel(false);
    renderSaveButtonDisabled();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-4 sm:gap-x-3 gap-x-1 gap-y-4 place-items-start bg-stone-50 rounded-lg border-2 border-stone-800 p-2.5 sm:ml-10 sm:mr-6 mx-2 text-stone-800 sm:text-base text-xs"
    >
      <div className="relative col-span-2 inline-flex gap-2 w-full">
        <label htmlFor="name" className="font-bold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          onBlur={() => handleNameBlur()}
          className="carousel-card-item-form"
          maxLength={21}
          placeholder={"Exercise Name"}
        />
        <label
          className={`${
            !nameInvalidLabel && "hidden"
          } absolute bottom-0 text-red-500 sm:text-xs text-[0.45rem] translate-y-2/3 text-opacity-90`}
        >
          Name must be filled.
        </label>
      </div>
      <div className="relative inline-flex gap-2">
        <label htmlFor="sets" className="font-bold">
          Sets:
        </label>
        <input
          type="text"
          id="sets"
          value={sets}
          onChange={onSetsChange}
          onBlur={() => handleSetsBlur()}
          className="carousel-card-item-form"
          maxLength={5}
          placeholder={"Sets"}
        />
        <label
          className={`${
            !setsInvalidLabel && "hidden"
          } absolute bottom-0 text-red-500 sm:text-xs text-[0.45rem] translate-y-2/3 text-opacity-90`}
        >
          {setsInvalidLabelText}
        </label>
      </div>
      <div className="relative inline-flex gap-2">
        <label htmlFor="reps" className="font-bold">
          Reps:
        </label>
        <input
          type="text"
          id="reps"
          value={reps}
          onChange={onRepsChange}
          onBlur={() => handleRepsBlur()}
          className="carousel-card-item-form"
          maxLength={5}
          placeholder={"Reps"}
        />
        <label
          className={`${
            !repsInvalidLabel && "hidden"
          } absolute bottom-0 text-red-500 sm:text-xs text-[0.45rem] translate-y-2/3 text-opacity-90`}
        >
          {repsInvalidLabelText}
        </label>
      </div>
      <div className="relative col-span-full inline-flex gap-2 w-full">
        <label htmlFor="techniqueUrl" className="font-bold mr-2">
          Technique:
        </label>
        <input
          type="text"
          id="techniqueUrl"
          value={techniqueUrl}
          onChange={onTechniqueUrlChange}
          onBlur={() => handleTechniqueUrlBlur()}
          className="carousel-card-item-form"
          placeholder={"YouTube Link"}
        />
        <label
          className={`${
            !techniqueUrlInvalidLabel && "hidden"
          } absolute bottom-0 text-red-500 sm:text-xs text-[0.45rem] translate-y-2/3 text-opacity-90`}
        >
          YouTube link must be valid.
        </label>
        <button
          disabled={saveButtonDisabled}
          type="submit"
          className={`justify-self-end rounded-md bg-white px-2.5 py-0.5 text-stone-900 border border-stone-800 transition-colors duration-300 transform ${
            !saveButtonDisabled && "hover:bg-stone-100 active:bg-stone-200"
          }`}
        >
          <b>Save</b>
        </button>
      </div>
    </form>
  );
}
