import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AppWrapper from "../Template/AppWrapper";

const list = [
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
    title: "IINRG",
    icon: <CreditScoreIcon className="icon" />,
    to: '/admin/iinrg'
  },
  {
    title: "Samunnati",
    icon: <ManageHistoryIcon className="icon" />,
    to: '/admin/samunnati'
  },
  {
    title: "Corporate Client",
    icon: <HelpCenterIcon className="icon" />,
    to: '/admin/corporate-client'
  },
]

function Admin() {
  return <AppWrapper title="Admin" list={list} />
}

export default Admin