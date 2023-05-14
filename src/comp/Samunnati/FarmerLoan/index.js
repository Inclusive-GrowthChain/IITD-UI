import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getLoanwindow } from "../../../actions/samunnati";

import { TabNavItem, TabContent } from "../../UIComp/Tabs";
import Approved from "./Approved";
import Rejected from "./Rejected";
import Pending from "./Pending";
import Loader from '../../Common/Loader';

const h3Style = {
  fontSize: "22px",
  fontWeight: "800",
  color: "rgb(33, 37, 41)",
}

const searchInputStyle = {
  color: "#000",
  fontSize: "16px",
  fontWeight: "500",
  width: "100%"
}

const topWrapperStyle = {
  width: '100%',
  maxWidth: '300px',
  marginBottom: '20px',
  borderRadius: '5px',
}

const theadStyle = {
  color: "#064420",
  fontSize: "18px",
  verticalAlign: "top",
  fontWeight: 600
}

const tbodyStyle = {
  color: "#000",
  fontSize: "16px",
  fontWeight: "500",
}

function FarmerLoan() {
  const [activeTab, setActiveTab] = useState("tab1")

  const { isLoading, data } = useQuery({
    queryKey: ["sumunnati/loanwindow", "farmer"],
    queryFn: () => getLoanwindow({ windowType: "farmer" }),
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-between align-items-center mb-4">
            <h3
              className="text-dark mb-0"
              style={h3Style}
            >
              Farmer Loans
            </h3>
          </div>

          <div className="tabs_wrapper">
            <ul className="nav-tab">
              <TabNavItem
                title="Approved Loan Windows"
                className="mr-3"
                id="tab1"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabNavItem
                title="Rejected Loan Windows"
                id="tab2"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabNavItem
                title="Pending Loan Windows"
                id="tab3"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </ul>

            <div className="outlet">
              <TabContent id="tab1" activeTab={activeTab}>
                <Approved
                  searchInputStyle={searchInputStyle}
                  topWrapperStyle={topWrapperStyle}
                  theadStyle={theadStyle}
                  tbodyStyle={tbodyStyle}
                  data={data?.result?.farmer?.filter(app => app.status === "approved")}
                />
              </TabContent>

              <TabContent id="tab2" activeTab={activeTab}>
                <Rejected
                  searchInputStyle={searchInputStyle}
                  topWrapperStyle={topWrapperStyle}
                  theadStyle={theadStyle}
                  tbodyStyle={tbodyStyle}
                  data={data?.result?.farmer?.filter(app => app.status === "rejected")}
                />
              </TabContent>

              <TabContent id="tab3" activeTab={activeTab}>
                <Pending
                  searchInputStyle={searchInputStyle}
                  topWrapperStyle={topWrapperStyle}
                  theadStyle={theadStyle}
                  tbodyStyle={tbodyStyle}
                  data={data?.result?.farmer?.filter(app => app.status === "pending")}
                />
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FarmerLoan