import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AppWrapper from "../Template/AppWrapper";
import "./admin.css";

const list = [
  {
    title: "IIT Dhanbad",
    icon: <DashboardIcon className="icon" />,
    to: '/admin/dashboard'
  },
  {
    title: "Farmer",
    icon: <DashboardIcon className="icon" />,
    to: '/admin/farmer'
  },
  {
    title: "FPO",
    icon: <LocalGroceryStoreIcon className="icon" />,
    to: '/admin/fpo'
  },
  {
    title: "NISA",
    icon: <CreditScoreIcon className="icon" />,
    to: '/admin/nisa'
  },
  {
    title: "Samunnati",
    icon: <ManageHistoryIcon className="icon" />,
    to: '/admin/samunnati'
  },
  {
    title: "Corporate Client",
    icon: <HelpCenterIcon className="icon" />,
    to: '/admin/corporateClient'
  },
]

function Admin() {
  return <AppWrapper title="Admin" list={list} />
}

export default Admin