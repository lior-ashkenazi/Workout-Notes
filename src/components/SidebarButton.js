import { HiPencilAlt, HiTrash } from "react-icons/hi";
import className from "classnames";

export default function SidebarButton({
  children,
  primary,
  secondary,
  onClick,
  onEdit,
  onDelete,
  ...rest
}) {
  const classes = className("w-full", {
    "bg-white px-8 py-4 border border-gray-400 shadow font-semibold": primary,
    "text-left px-4 py-2": secondary,
  });

  let button = (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );

  // guard close
  if (primary) return button;

  return (
    // container for button
    <div className="relative group rounded-lg text-gray-700 transition-colors duration-300 transform hover:bg-gray-100 hover:text-gray-800">
      {/*button itself */}
      {button}
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
