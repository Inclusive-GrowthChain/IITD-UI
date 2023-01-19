import { Link, useNavigate } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import PersonIcon from "@mui/icons-material/Person";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../assets/img/logo.png";

function Nav({ title }) {
  const navigate = useNavigate()

  const logout = e => {
    e.preventDefault()
    localStorage.clear()
    sessionStorage.clear()
    navigate("/")
  }

  return (
    <div className="navbar_wrapper">
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

export default Nav