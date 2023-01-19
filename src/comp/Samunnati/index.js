import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import Badge from '@mui/material/Badge';
import AppWrapper from "../Template/AppWrapper";

const list = [
  {
    title: "FPO Loan",
    icon: <Badge badgeContent={10} color="success"><CreditScoreIcon className="icon" /></Badge>,
    to: '/samunnati/fpo-loan'
  },
  {
    title: "FPO Info",
    icon: <Badge badgeContent={0} color="success"><CreditScoreIcon className="icon" /></Badge>,
    to: '/samunnati/fpo-info'
  },
  {
    title: "Farmer Loan",
    icon: <Badge badgeContent={0} color="success"><CreditScoreIcon className="icon" /></Badge>,
    to: '/samunnati/farmer-loan'
  },
  {
    title: "Support",
    icon: <HelpTwoToneIcon className="icon" />,
    to: '/samunnati/support'
  },
  {
    title: "Settings",
    icon: <SettingsSuggestTwoToneIcon className="icon" />,
    to: '/samunnati/settings'
  },
]

function Samunnati() {
  return <AppWrapper title="Samunnati" list={list} />
}

export default Samunnati