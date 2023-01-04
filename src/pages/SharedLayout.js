import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function SharedLayout() {
  return (
    <div className="flex w-full min-h-screen bg-purple-100 font-roboto">
      <Sidebar />
      <Outlet />
    </div>
  );
}
