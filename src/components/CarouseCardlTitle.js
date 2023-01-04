import { useState } from "react";

export default function CarouseCardlTitle() {
  const [title, setTitle] = useState("Workout Day");
  const [editingTitle, setEditingTitle] = useState(false);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleTitleClick() {
    setEditingTitle(true);
  }

  function handleTitleBlur() {
    setEditingTitle(false);
  }

  return (
    <div className="carousel-card-title">
      {editingTitle ? (
        <input
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          autoFocus
          className="grow-0 outline-0 border-b-2 border-stone-800 bg-stone-50"
          placeholder="Workout Day"
        />
      ) : (
        <h2
          onClick={handleTitleClick}
          className="w-full hover:border-b-2 transition-colors duration-300 hover:border-stone-800"
        >
          {title}
        </h2>
      )}
    </div>
  );
}
