import { Link } from "react-router-dom";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

export default function SidebarButton({
  children,
  onClick,
  onEdit,
  onDelete,
  pageId,
}) {
  return (
    // container for button
    <div className="relative group sidebar-colors sidebar-padding">
      {/*button itself */}
      <Link to={`/${pageId}`}>
        <button
          onClick={onClick}
          className="w-full border-b-2 border-b-transparent rounded-lg text-left"
        >
          {children}
        </button>
      </Link>
      {/*container for edit and delete buttons*/}
      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform top-0 right-0 mt-2.5 mr-2">
        <button onClick={onEdit} className="mr-1">
          <HiPencilAlt />
        </button>
        <button className="">
          <HiTrash />
        </button>
      </span>
    </div>
  );
}
