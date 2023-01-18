import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from 'react-router-dom';

import TabInfo from "./TabContent/TabInfo";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const FarmerInformation = () => {
  const navigate = useNavigate()

  const handleClick = () => navigate('/fpo/farmer', { replace: true })

  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <main id="main_container" className="main_container container-fluid">
          <div className="">
            <h3 className="mb-4">Farmer Information</h3>
          </div>
          <div className="list_container">
            <div className="back_btn mt-3 mb-4">
              <button onClick={handleClick}><ArrowBackIcon className="btn_icon" />  Back to Farmer Page</button>
            </div>
            <div className="list_tab">
              <TabInfo />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FarmerInformation;
