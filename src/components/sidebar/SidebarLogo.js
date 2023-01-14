import { Link } from "react-router-dom";

export default function SidebarLogo() {
  return (
    <div className="self-center justify-self-center">
      <Link to="/workout-notes/">
        <button className="relative background-logo bg-gray-50 rounded-full border border-stone-400 overflow-hidden group hover:drop-shadow-md transition-all ease-out duration-1000">
          <span className="absolute top-0 right-0 w-8 h-32 transition-all duration-1000 transform translate-x-12 rotate-12 bg-white opacity-20 group-hover:-translate-x-40 ease"></span>
        </button>
      </Link>
    </div>
  );
}
