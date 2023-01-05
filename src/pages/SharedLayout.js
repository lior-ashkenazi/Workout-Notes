import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function SharedLayout() {
  return (
    <div className="screen flex h-screen w-full bg-purple-100 font-roboto">
      <Sidebar />
      <Outlet />
    </div>
  );
}
