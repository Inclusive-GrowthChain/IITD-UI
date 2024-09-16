import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Nav from "./Nav";
import { useState } from "react";

function AppWrapper({ title = "", list = [] }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="app-wrapper">
      <Nav title={title} toggleSidebar={toggleSidebar} />
      <SideBar list={list} showSidebar={showSidebar} />
      <Outlet />
    </div>
  )
}

export default AppWrapper