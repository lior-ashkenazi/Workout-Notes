export default function SidebarAddWorkoutButton({ children, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-full rounded-md bg-white px-4 py-4 border border-gray-400 shadow font-semibold sidebar-colors"
      >
        {children}
      </button>
    </div>
  );
}
