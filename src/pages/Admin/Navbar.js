import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <PersonIcon className="icons" />
          <DropdownButton id="dropdown-item-button" title="">
            <Dropdown.Item as="button">Profile</Dropdown.Item>
            <Dropdown.Item as="button">Logout
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
