import React from "react";
import "./style.css";
import logo from "../../assets/img/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    console.log("Logout");

    localStorage.clear();
    sessionStorage.clear();

    navigate("/");
  };

  return (
    <div className="navbar_wrapper">
      <div className="logo_img">
        <img src={logo} alt="logo" style={{ width: "35px", height: "35px" }} />
        <span>Fpo</span>
      </div>
      <div className="nav_items">
        <PersonIcon className="nav_icons" />
        <DropdownButton id="dropdown-item-button" title="">
        <Link to="/fpo/settings" style={{ textDecoration: "none" }}>
          <Dropdown.Item as="button">Profile</Dropdown.Item>
          </Link>
          <Dropdown.Item as="button" onClick={logout}>
            Logout
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default Navbar;
