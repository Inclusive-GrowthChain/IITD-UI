import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { useAuthStore } from "../../store/useAuthStore";
import { cookies } from "../../utils/sendApiReq";

import PersonIcon from "@mui/icons-material/Person";
import logo from "../../assets/img/logo.png";

function Nav({ title, toggleSidebar }) {
  const { pathname } = useLocation()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const logOut = useAuthStore(s => s.logOut)

  console.log(pathname.split("/")[1]);

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
        <span style={{ fontSize: "1.3rem" }}>{title}</span>
      </div>

      <div className="nav_items">
        <PersonIcon className="nav_icons" />

        {/* to="/fpo/settings" */}

        <DropdownButton id="dropdown-item-button" title="">
          <Link to={`/${pathname.split("/")[1]}/settings`}  style={{ textDecoration: "none" }}>
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
