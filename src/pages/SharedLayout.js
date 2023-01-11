import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function SharedLayout() {
  return (
    <div className="screen flex bg-img h-screen w-full">
      <Sidebar />
      <Outlet />
    </div>
  );
}
