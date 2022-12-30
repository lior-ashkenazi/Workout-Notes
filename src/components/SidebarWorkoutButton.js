import { HiPencilAlt, HiTrash } from "react-icons/hi";
import className from "classnames";

export default function SidebarWorkoutButton({
  children,
  onClick,
  onEdit,
  onDelete,
}) {
  return (
    // container for button
    <div className="sidebar-container group">
      {/*button itself */}
      <button onClick={onClick} className="w-full text-left sidebar-padding">
        {children}
      </button>
      {/*container for edit and delete buttons*/}
      <div className="absolute top-0 right-0 mt-2.5 mr-2">
        <button className="mr-1 text-transparent transition-colors duration-300 transform group-hover:text-gray-800">
          <HiPencilAlt />
        </button>
        <button className="text-transparent transition-colors duration-300 transform group-hover:text-gray-800">
          <HiTrash />
        </button>
      </div>
    </div>
    // <button {...rest} className={classes}>
    //   {children}
    // </button>
  );
}
