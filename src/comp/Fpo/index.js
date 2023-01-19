import StoreMallDirectoryTwoToneIcon from '@mui/icons-material/StoreMallDirectoryTwoTone';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import PaymentsTwoToneIcon from '@mui/icons-material/PaymentsTwoTone';
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import AppWrapper from "../Template/AppWrapper";

const list = [
  {
    title: "Dashboard",
    icon: <HomeTwoToneIcon className="icon" />,
    to: '/fpo/dashboard'
  },
  {
    title: "Farmer",
    icon: <AssignmentIndOutlinedIcon className="icon" />,
    to: '/fpo/farmer'
  },
  {
    title: "FPO Store",
    icon: <LocalGroceryStoreTwoToneIcon className="icon" />,
    to: '/fpo/fpo-store'
  },
  {
    title: "Lac Procurement",
    icon: <StoreMallDirectoryTwoToneIcon className="icon" />,
    to: '/fpo/lac-procurement'
  },
  {
    title: "Lab Testing",
    icon: <ScienceTwoToneIcon className="icon" />,
    to: '/fpo/lab-testing'
  },
  {
    title: "Farmer Loan",
    icon: <PaymentsTwoToneIcon className="icon" />,
    to: '/fpo/farmerloan'
  },
  {
    title: "FPO Loan",
    icon: <PaymentsTwoToneIcon className="icon" />,
    to: '/fpo/fpoloan'
  },
  {
    title: "Corporate Customer",
    icon: <PaymentsTwoToneIcon className="icon" />,
    to: '/fpo/corporate-customer'
  },
  {
    title: "Support",
    icon: <HelpTwoToneIcon className="icon" />,
    to: '/fpo/support'
  },
  {
    title: "Settings",
    icon: <SettingsSuggestTwoToneIcon className="icon" />,
    to: '/fpo/settings'
  },
]

function FPO() {
  return <AppWrapper title="FPO" list={list} />
}

export default FPO