import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Nav from "./Nav";

function AppWrapper({ title = "", list = [] }) {
  return (
    <div className="app-wrapper">
      <Nav title={title} />
      <SideBar list={list} />
      <Outlet />
    </div>
  )
}

export default AppWrapper