import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

export default function SharedLayout() {
  return (
    <div className="screen flex md:flex-row flex-col background-image h-screen w-full overflow-x-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
}
