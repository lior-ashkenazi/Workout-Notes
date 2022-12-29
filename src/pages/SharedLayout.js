import { Outlet } from "react-router-dom";
import Sidebar from "../components/Siderbar";

export default function SharedLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
