import { Link } from "react-router-dom";
import { HiPencilAlt, HiTrash, HiCheck, HiX } from "react-icons/hi";
import { useState } from "react";

export default function SidebarButton({
  children,
  onClick,
  onEdit,
  onDelete,
  pageId,
}) {
  const [deleteClicked, setDeleteClicked] = useState(false);

  const handleDeleteClicked = () => {
    setDeleteClicked(true);
  };

  const handleDeleteCanceled = () => {
    setDeleteClicked(false);
  };

  return (
    // container for button
    <div className="relative group sidebar-colors sidebar-padding">
      {/*button itself */}
      <Link to={`/Workout-Notes/${pageId}`}>
        <button
          onClick={onClick}
          className="md:w-full w-28 border-b-2 border-b-transparent rounded-lg text-left px-2"
        >
          {children}
        </button>
      </Link>
      {/*container for edit and delete buttons*/}
      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform top-0 right-0 mt-2.5 mr-2">
        {deleteClicked ? (
          <>
            <Link to="/Workout-Notes/">
              <button onClick={onDelete}>
                <HiCheck />
              </button>
            </Link>
            <button onClick={handleDeleteCanceled}>
              <HiX />
            </button>
          </>
        ) : (
          <>
            <button onClick={onEdit} className="mr-1">
              <HiPencilAlt />
            </button>
            <button onClick={handleDeleteClicked}>
              <HiTrash />
            </button>
          </>
        )}
      </span>
    </div>
  );
}
