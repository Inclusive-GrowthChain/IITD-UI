import { useState } from "react";
import SecondTab from "./SecondTab";
import FirstTab from "./FirstTab";

const TransactionHistory = () => {
  const [activeTab, setActiveTab] = useState("tab1")

  const handleTab1 = () => setActiveTab("tab1")
  const handleTab2 = () => setActiveTab("tab2")

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-between align-items-center mb-4">
            <h3
              className="text-dark mb-0"
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "rgb(33, 37, 41)",
              }}
            >
              Transaction History
            </h3>
          </div>
          <div className="tabs_wrapper">
            <ul className="nav-tab">
              <li
                className={activeTab === "tab1" ? "active" : null}
                onClick={handleTab1}
              >
                Purchase History
              </li>
              <li
                className={activeTab === "tab2" ? "active" : null}
                onClick={handleTab2}
              >
                Sale History
              </li>
            </ul>
            <div className="outlet">
              {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionHistory;
