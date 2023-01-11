export default function SidebarInput(props) {
  return (
    // container for input field
    <div className="sidebar-padding">
      <input
        {...props}
        className="bg-transparent outline-none border-b-2 border-stone-700 w-full"
        placeholder="Workout Program"
      />
    </div>
  );
}
