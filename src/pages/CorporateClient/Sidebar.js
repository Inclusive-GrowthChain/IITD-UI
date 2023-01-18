import { NavLink } from "react-router-dom";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import logo from "../../assets/img/logo.png";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';

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
          <span>Corporate Client</span>
        </div>
      </div>
      <div className="sidebar_content">
        <ul>
          <NavLink
            to="/corporate-client/lac-bidding"
            className={"sidebar_data"}
          >
            <CreditScoreIcon className="icon" />
            <span>Lac Bidding</span>
          </NavLink>
          <NavLink to="/corporate-client/support" className={"sidebar_data"}>
            <HelpTwoToneIcon className="icon" />
            <span>Support</span>
          </NavLink>
          <NavLink to="/corporate-client/settings" className={"sidebar_data"}>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
