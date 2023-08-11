import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import PaymentsTwoToneIcon from '@mui/icons-material/PaymentsTwoTone';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyTwoTone';
import SpaIcon from "@mui/icons-material/Spa";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import DashboardIcon from "@mui/icons-material/Dashboard";
import AppWrapper from "../Template/AppWrapper";
import "./Farmer.css";

const list = [
  {
    title: "Dashboard",
    icon: <HomeTwoToneIcon className="icon" />,
    to: '/farmer/dashboard'
  },
  {
    title: "Store",
    icon: <LocalGroceryStoreTwoToneIcon className="icon" />,
    to: '/farmer/store'
  },
  {
    title: "Selling Price",
    icon: <CreditScoreTwoToneIcon className="icon" />,
    to: '/farmer/selling-price'
  },
  {
    title: "Loan",
    icon: <PaymentsTwoToneIcon className="icon" />,
    to: '/farmer/loan'
  },
  {
    title: "Place a Requirement",
    icon: <SpaIcon className='icon'/>,
    to: "/farmer/requirement"
  },
  {
    title: "Transaction History",
    icon: <AccountBalanceWalletTwoToneIcon className="icon" />,
    to: '/farmer/transaction-history'
  },
  {
    title: "Training Programs",
    icon: <FileCopyTwoToneIcon className="icon" />,
    to: '/farmer/training'
  },
  {
    title: "Crop Advisory",
    icon: <DashboardIcon className="icon" />,
    to: '/farmer/crop-advisory'
  },
  {
    title: "Support",
    icon: <HelpTwoToneIcon className="icon" />,
    to: '/farmer/support'
  },
  {
    title: "Settings",
    icon: <SettingsSuggestTwoToneIcon className="icon" />,
    to: '/farmer/settings'
  },
]

function Farmer() {
  return <AppWrapper title="Farmer" list={list} />
}

export default Farmer