import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Nav from "./Nav";

function AppWrapper({ title = "", list = [] }) {
  return (
    <div className="App">
      <div className="farmer">
        <SideBar list={list} />

        <div className="farmerContainer">
          <Nav title={title} />

          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppWrapper