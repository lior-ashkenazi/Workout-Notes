import className from "classnames";

export default function SidebarButton({
  children,
  primary,
  secondary,
  ...rest
}) {
  const classes = className(
    rest.className,
    "rounded-lg",
    "text-gray-700",
    "transition-colors",
    "duration-300",
    "transform",
    "hover:bg-gray-100",
    "hover:text-gray-800",
    {
      "bg-white px-8 py-4 border border-gray-400 shadow font-semibold": primary,
      "flex items-center px-4 py-2 mt-6": secondary,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
