import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import DashboardIcon from "@mui/icons-material/Dashboard";
import AppWrapper from "../Template/AppWrapper";
import "./Nisa.css";

const list = [
  {
    title: "Crop Advisory",
    icon: <DashboardIcon className="icon" />,
    to: '/nisa/crop-advisory'
  },
  {
    title: "Training Programs",
    icon: <FileCopyOutlinedIcon className="icon" />,
    to: '/nisa/training'
  },
  {
    title: "Lab Testing",
    icon: <ScienceTwoToneIcon className="icon" />,
    to: '/nisa/lab-testing'
  },
  {
    title: "Support",
    icon: <HelpTwoToneIcon className="icon" />,
    to: '/nisa/support'
  },
  {
    title: "Settings",
    icon: <SettingsSuggestTwoToneIcon className="icon" />,
    to: '/nisa/settings'
  },
]

function NISA() {
  return <AppWrapper title="NISA" list={list} />
}

export default NISA