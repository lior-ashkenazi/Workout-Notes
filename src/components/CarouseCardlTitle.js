import { useState } from "react";

export default function CarouseCardlTitle({ currentTitle, onSubmit }) {
  const [titleText, setTitleText] = useState(currentTitle.text);
  const [editable, setEditable] = useState(currentTitle.editable);
  console.log("currentTitle");
  console.log(currentTitle);

  const handleTitleChange = (event) => {
    setTitleText(event.target.value);
  };

  const handleTitleClick = () => {
    setEditable(true);
  };

  const handleTitleBlur = () => {
    setEditable(false);

    onSubmit({
      text: !titleText ? "Workout Day" : titleText,
      editable: false,
    });
  };

  return (
    <div className="carousel-card-title">
      {editable ? (
        <input
          value={titleText}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          autoFocus
          className="w-full outline-0 border-b-2 border-stone-800 bg-stone-50"
          placeholder="Workout Day"
        />
      ) : (
        <h2
          onClick={handleTitleClick}
          className="w-full border-b-2 border-b-transparent transition-colors duration-300 hover:border-b-2  hover:border-stone-800"
        >
          {titleText}
        </h2>
      )}
    </div>
  );
}
