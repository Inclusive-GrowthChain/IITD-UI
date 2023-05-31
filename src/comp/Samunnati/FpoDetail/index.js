import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { useQuery } from "@tanstack/react-query";

// import { getLoans } from "../../../actions/samunnati";

import { TabNavItem, TabContent } from "../../UIComp/Tabs";
import OngoingLoans from "./OngoingLoans";
import PendingLoans from "./PendingLoans";
import LoanHistory from "./LoanHistory";
// import Loader from '../../Common/Loader';
import Profile from "./Profile";

const theadStyle = {
  color: "#064420",
  fontSize: "18px",
  verticalAlign: "top",
  textAlign: "center",
  fontWeight: 600,
}

const tbodyStyle = {
  color: "#000",
  fontSize: "16px",
  fontWeight: "500",
  textAlign: "center",
}

const tabs = [
  {
    title: "Profile",
    id: "tab1",
  },
  {
    title: "Loan History",
    id: "tab2",
  },
  {
    title: "Ongoing Loans",
    id: "tab3",
  },
  {
    title: "Pending Loans",
    id: "tab4",
  },
]

function FpoDetail() {
  const [activeTab, setActiveTab] = useState("tab1")
  const { state } = useLocation()
  const navigate = useNavigate()

  // const { isLoading, data } = useQuery({
  //   queryKey: ["sumunnati/fpo-loans"],
  //   queryFn: () => getLoans({ fpoId: state._id }),
  //   enabled: !!state._id,
  // })

  const handleClick = () => navigate('/samunnati/fpo-info', { replace: true })

  // if (isLoading) return <Loader wrapperCls="loader-main-right" />
  if (!state) return <Navigate to='/samunnati/fpo-info' />

  return (
    <main id="main_container" className="main_container container-fluid" style={{ marginTop: "3.188rem" }}>
      <h3 className="mb-4">FPO Page</h3>

      <div className="back_btn mt-3 mb-4">
        <button onClick={handleClick}><ArrowBackIcon className="btn_icon" />Back to FPO Information Page</button>
      </div>

      <div className="itemContainer">
        <div className="list_title">
          <div className="container-fluid">
            <div className="tabs_wrapper">
              <ul className="nav-tab">
                {
                  tabs.map(t => (
                    <TabNavItem
                      {...t}
                      key={t.id}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />
                  ))
                }
              </ul>

              <div className="outlet">
                <TabContent id="tab1" activeTab={activeTab}>
                  <Profile fpo={state} />
                </TabContent>

                <TabContent id="tab2" activeTab={activeTab}>
                  <LoanHistory
                    theadStyle={theadStyle}
                    tbodyStyle={tbodyStyle}
                    data={[]}
                  // data={loanWindow?.loans?.filter(loan => loan.status === "completed")}
                  />
                </TabContent>

                <TabContent id="tab3" activeTab={activeTab}>
                  <OngoingLoans
                    theadStyle={theadStyle}
                    tbodyStyle={tbodyStyle}
                    data={[]}
                  // data={loanWindow?.loans?.filter(loan => loan.status === "approved")}
                  />
                </TabContent>

                <TabContent id="tab4" activeTab={activeTab}>
                  <PendingLoans
                    theadStyle={theadStyle}
                    tbodyStyle={tbodyStyle}
                    data={[]}
                  // data={loanWindow?.loans?.filter(loan => loan.status === "in-process")}
                  />
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FpoDetail