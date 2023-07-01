import { useState } from "react";
import { TabNavItem } from "../UIComp/Tabs";
import Fpo_License from "./License/Fpo_License";
import Nisa from "../Admin/License/Nisa";
import Samunnati from "../Admin/License/Samunnati";
import CorporateClient from "../Admin/License/CorporateClient";

const LicenseKey = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const uiComponent = () => {
    if (activeTab === "tab1") {
      return <Fpo_License />;
    } else if (activeTab === "tab2") {
      return <Nisa />;
    } else if (activeTab === "tab3") {
      return <Samunnati />;
    } else if (activeTab === "tab4") {
      return <CorporateClient />;
    }
  };
  return (
    <>
      <div className="itemContainer">
        <div className="list_title">
          <div className="sale__title container-fluid">
            <h3
              className="text-dark mb-0"
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "rgb(33, 37, 41)",
              }}
            >
              License key Generator
            </h3>
            <div className="tabs_wrapper">
              <ul className="nav-tab">
                <TabNavItem
                  title="FPO"
                  id="tab1"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabNavItem
                  title="NISA"
                  id="tab2"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabNavItem
                  title="Samunnati"
                  id="tab3"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabNavItem
                  title="Corporate Client"
                  id="tab4"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </ul>
              <div>{uiComponent()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LicenseKey;
