export default function SidebarAddWorkoutButton({ children, onClick }) {
  return (
    <div className="sidebar-colors">
      <button
        onClick={onClick}
        className="w-full rounded-md bg-white px-8 py-4 border border-gray-400 shadow font-semibold"
      >
        {children}
      </button>
    </div>
  );
}
