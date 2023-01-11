export default function SidebarAddButton({ children, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-full rounded-md bg-gray-50 px-4 py-4 border border-stone-400 shadow font-semibold sidebar-colors"
      >
        {children}
      </button>
    </div>
  );
}
