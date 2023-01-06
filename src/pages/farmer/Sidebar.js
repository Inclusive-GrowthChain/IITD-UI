import React from "react";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import PaymentsTwoToneIcon from '@mui/icons-material/PaymentsTwoTone';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import logo from "../../assets/img/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="top">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "35px", height: "35px" }}
          />
          <span>Farmer</span>
        </div>
      </div>
      <div className="center">
        <ul>
          <NavLink to="/farmer/dashboard" className={"data_wrapper"}>
            <HomeTwoToneIcon className="icon" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/farmer/store" className={"data_wrapper"}>
            <LocalGroceryStoreTwoToneIcon className="icon" />
            <span>Store</span>
          </NavLink>
          <NavLink to="/farmer/selling-price" className={"data_wrapper"}>
            <CreditScoreTwoToneIcon className="icon" />
            <span>Selling Price</span>
          </NavLink>
          <NavLink to="/farmer/loan" className={"data_wrapper"}>
            <PaymentsTwoToneIcon className="icon" />
            <span>Loan</span>
          </NavLink>
          <NavLink to="/farmer/transaction-history" className={"data_wrapper"}>
            <AccountBalanceWalletTwoToneIcon className="icon" />
            <span>Transaction History</span>
          </NavLink>
          <NavLink to="/farmer/training" className={"data_wrapper"}>
            <FileCopyTwoToneIcon className="icon" />
            <span>Training Programs</span>
          </NavLink>
          <NavLink to="/farmer/support" className={"data_wrapper"}>
            <HelpTwoToneIcon className="icon" />
            <span>Support</span>
          </NavLink>
          <NavLink to="/farmer/settings" className={"data_wrapper"}>
            <SettingsSuggestTwoToneIcon className="icon" />
            <span>Settings</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
