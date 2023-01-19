import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import AppWrapper from "../Template/AppWrapper";

const list = [
  {
    title: "Lac Bidding",
    icon: <CreditScoreIcon />,
    to: '/corporate-client/lac-bidding'
  },
  {
    title: "Support",
    icon: <HelpTwoToneIcon />,
    to: '/corporate-client/support'
  },
  {
    title: "Settings",
    icon: <SettingsOutlinedIcon />,
    to: '/corporate-client/settings'
  },
]

function CorporateClient() {
  return <AppWrapper title="Corporate Client" list={list} />
}

export default CorporateClient