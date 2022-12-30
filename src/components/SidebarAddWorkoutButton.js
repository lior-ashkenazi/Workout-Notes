export default function SidebarAddWorkoutButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white px-8 py-4 border border-gray-400 shadow font-semibold"
    >
      {children}
    </button>
  );
}