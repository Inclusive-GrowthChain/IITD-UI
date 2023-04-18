import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import DashboardIcon from "@mui/icons-material/Dashboard";
import AppWrapper from "../Template/AppWrapper";
import "./IITDhanbad.css";

const list = [
  {
    title: "Dashboard",
    icon: <DashboardIcon className="icon" />,
    to: '/iit-dhanbad/dashboard'
  },
  {
    title: "Users",
    icon: <FileCopyOutlinedIcon className="icon" />,
    to: '/iit-dhanbad/users'
  },
  {
    title: "Support",
    icon: <HelpTwoToneIcon className="icon" />,
    to: '/iit-dhanbad/support'
  },
  {
    title: "Settings",
    icon: <SettingsSuggestTwoToneIcon className="icon" />,
    to: '/iit-dhanbad/settings'
  },
]

function IITDhanbad() {
  return <AppWrapper title="IIT Dhanbad" list={list} />
}

export default IITDhanbad;