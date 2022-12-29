import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function SharedLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <Outlet />
    </div>
  );
}
