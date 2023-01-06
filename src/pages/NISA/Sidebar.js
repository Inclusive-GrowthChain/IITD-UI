import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import logo from "../../assets/img/logo.png";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar_wrapper">
      <div className="top">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "35px", height: "35px" }}
          />
          <span>NISA</span>
        </div>
      </div>
      <div className="sidebar_content">
        <ul>
          <NavLink to="/nisa/crop-advisory" className={"sidebar_data"}>
            <DashboardIcon className="icon" />
              <span>Crop Advisory</span>
          </NavLink>
          <NavLink to="/nisa/training" className={"sidebar_data"}>
            <FileCopyOutlinedIcon className="icon" />
              <span>Training Programs</span>
          </NavLink>
          <NavLink to="/nisa/lab-testing" className={"sidebar_data"}>
            <ScienceTwoToneIcon className="icon" />
              <span>Lab Testing</span>
          </NavLink>
          <NavLink to="/nisa/support" className={"sidebar_data"}>
            <ScienceTwoToneIcon className="icon" />
              <span>Support</span>
          </NavLink>
          <NavLink to="/nisa/settings" className={"sidebar_data"}>
            <SettingsOutlinedIcon className="icon" />
              <span>Settings</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
