import { NavLink } from "react-router-dom";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import StoreMallDirectoryTwoToneIcon from '@mui/icons-material/StoreMallDirectoryTwoTone';
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import PaymentsTwoToneIcon from '@mui/icons-material/PaymentsTwoTone';

const Sidebar = () => {
  return (
    <div className="sidebar_wrapper">
      <div className="sidebar_content">
        <ul>
          <NavLink to="/fpo/dashboard" className={"sidebar_data"}>
            <HomeTwoToneIcon className="icon" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/fpo/farmer" style={{ display: "block" }} className={"sidebar_data"}>
            <AssignmentIndOutlinedIcon className="icon" />
            <span>Farmer</span>
          </NavLink>
          <NavLink to="/fpo/fpo-store" className={"sidebar_data"}>
            <LocalGroceryStoreTwoToneIcon className="icon" />
            <span>FPO Store</span>
          </NavLink>
          <NavLink to="/fpo/lac-procurement" className={"sidebar_data"}>
            <StoreMallDirectoryTwoToneIcon className="icon" />
            <span>Lac Procurement</span>
          </NavLink>
          <NavLink to="/fpo/labtesting" className={"sidebar_data"}>
            <ScienceTwoToneIcon className="icon" />
            <span>Lab Testing</span>
          </NavLink>
          <NavLink to="/fpo/farmerloan" className={"sidebar_data"}>
            <PaymentsTwoToneIcon className="icon" />
            <span>Farmer Loan</span>
          </NavLink>
          <NavLink to="/fpo/fpoloan" className={"sidebar_data"}>
            <PaymentsTwoToneIcon className="icon" />
            <span>FPO Loan</span>
          </NavLink>
          <NavLink to="/fpo/corporate-customer" className={"sidebar_data"}>
            <PaymentsTwoToneIcon className="icon" />
            <span>Corporate Customer</span>
          </NavLink>
          <NavLink to="/fpo/support" className={"sidebar_data"}>
            <HelpTwoToneIcon className="icon" />
            <span>Support</span>
          </NavLink>
          <NavLink to="/fpo/settings" className={"sidebar_data"}>
            <SettingsSuggestTwoToneIcon className="icon" />
            <span>Settings</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
