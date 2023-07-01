import DashboardIcon from "@mui/icons-material/Dashboard";
import AppWrapper from "../Template/AppWrapper";
import KeyIcon from "@mui/icons-material/Key";

const list = [
  {
    title: "IIT Dhanbad",
    icon: <DashboardIcon className="icon" />,
    to: "/admin/dashboard",
  },
  {
    title: "License Key",
    icon: <KeyIcon className="icon" />,
    to: "/admin/license-key",
  },
];

function Admin() {
  return <AppWrapper title="Admin" list={list} />;
}

export default Admin;
