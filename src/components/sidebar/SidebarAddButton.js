export default function SidebarAddButton({ children, onClick, disabled }) {
  console.log(disabled);
  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`w-full rounded-md bg-gray-50 px-4 py-4 border border-stone-400 shadow font-semibold text-stone-700 outline-stone-700 transition-colors duration-300 transform ${
          !disabled &&
          "hover:bg-stone-200 hover:text-stone-800 active:bg-stone-300 active:text-stone-900"
        }`}
      >
        {children}
      </button>
    </div>
  );
}
