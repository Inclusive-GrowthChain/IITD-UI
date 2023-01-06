import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./style.css";
import Tab from "./TabContent/Tab";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

const FarmerInfo = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <main id="main_container" className="main_container container-fluid">
          <div className="">
            <h3>Farmer Information</h3>
          </div>
          
          <div className="list_container">
          <div className="search">
            <input
              className="search_input active"
              placeholder="Search here..."
            />
            <SearchTwoToneIcon className="search_icon" />
          </div>
            <div className="list_tab">
              <Tab />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FarmerInfo;
