import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo" style={{ textTransform: "uppercase" }}>
          iit dhanbad
        </span>
      </div>
      <div className="center">
        <ul>
          <li className="">
            <DashboardIcon className="icon" />
            <Link to="/admin/farmer" className="data_wrapper">
              Farmer
            </Link>
          </li>
          <li>
            <LocalGroceryStoreIcon className="icon" />
            <Link to="/admin/fpo" className="data_wrapper">
              FPO
            </Link>
          </li>
          <li>
            <CreditScoreIcon className="icon" />
            <Link to="/admin/iinrg" className="data_wrapper">
              IINRG
            </Link>
          </li>
          <li>
            <ManageHistoryIcon className="icon" />
            <Link to="/admin/samunnati" className="data_wrapper">
              Samunnati
            </Link>
          </li>
          <li>
            <HelpCenterIcon className="icon" />
            <Link to="/admin/corporate-client" className="data_wrapper">
              Corporate Client
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
