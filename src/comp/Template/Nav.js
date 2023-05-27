import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { useAuthStore } from "../../store/useAuthStore";
import { cookies } from "../../utils/sendApiReq";

import PersonIcon from "@mui/icons-material/Person";
import logo from "../../assets/img/logo.png";

function Nav({ title, toggleSidebar }) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const logOut = useAuthStore(s => s.logOut)

  const logout = e => {
    e.preventDefault()
    queryClient.clear()
    cookies.remove("IITD")
    logOut()
    navigate("/")
  }

  return (
    <div className="navbar_wrapper app-nav">
      <div className="hamburger_menu" onClick={toggleSidebar}>
        <div className="hamburger_menu_line"></div>
        <div className="hamburger_menu_line"></div>
        <div className="hamburger_menu_line"></div>
      </div>

      <div className="logo_img">
        <img src={logo} alt="logo" style={{ width: "35px", height: "35px" }} />
        <span>{title}</span>
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
  )
}

export default Nav;
