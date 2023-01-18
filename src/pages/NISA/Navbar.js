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
      <div className="wrapper">
        <div className="items">
          <PersonIcon className="icons" />
          <DropdownButton id="dropdown-item-button" title="">
            <Link to="" style={{ textDecoration: "none" }}>
              <Dropdown.Item as="button">Profile</Dropdown.Item>
            </Link>
            <Dropdown.Item as="button" onClick={logout}>
              Logout
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
