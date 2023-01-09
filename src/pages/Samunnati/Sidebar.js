import { Link } from "react-router-dom";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
// import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import logo from "../../assets/img/logo.png";
import Badge from '@mui/material/Badge';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "35px", height: "35px" }}
          />
          <span>Samunnati</span>
        </div>
      </div>
      <div className="center">
        <ul>
          <li className="data_list">
            <Badge badgeContent={10} color="success">
              <CreditScoreIcon className="icon" />
            </Badge>
            <Link to="/samunnati/fpo-loan" className="data_wrapper">
              FPO Loan
            </Link>
          </li>
          <li className="data_list">
            <Badge badgeContent={0} color="success">
              <CreditScoreIcon className="icon" />
            </Badge>
            {/* <CreditScoreIcon className="icon" /> */}
            <Link to="/samunnati/fpo-info" className="data_wrapper">
              FPO Info
            </Link>
          </li>
          <li className="data_list">
            <Badge badgeContent={0} color="success">
              <CreditScoreIcon className="icon" />
            </Badge>
            {/* <CreditScoreIcon className="icon" /> */}
            <Link to="/samunnati/farmer-loan" className="data_wrapper">
              Farmer Loan
            </Link>
          </li>
          <li className="data_list">
            <Badge badgeContent={0} color="success">
              <CreditScoreIcon className="icon" />
            </Badge>
            {/* <CreditScoreIcon className="icon" /> */}
            <Link to="/samunnati/samunnati-support" className="data_wrapper">
              Support
            </Link>
          </li>
          <li className="data_list">
            <Badge badgeContent={0} color="success">
              <CreditScoreIcon className="icon" />
            </Badge>
            {/* <CreditScoreIcon className="icon" /> */}
            <Link to="/samunnati/samunnati-settings" className="data_wrapper">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
