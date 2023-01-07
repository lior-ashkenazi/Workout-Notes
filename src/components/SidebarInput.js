export default function SidebarInput(props) {
  return (
    // container for input field
    <div className="sidebar-padding">
      <input
        {...props}
        className="outline-none focus:border-b-2 focus:border-stone-700 focus:w-full focus:bg-transparent"
        placeholder="Workout Program"
      />
    </div>
  );
}
