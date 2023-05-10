import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { getLoanwindow } from "../../../actions/fpo";

import { TabNavItem, TabContent } from "../../UIComp/Tabs";
import OngoingLoans from "./OngoingLoans";
import PendingLoans from "./PendingLoans";
import LoanHistory from "./LoanHistory";
import Profile from "./Profile";
import Loader from '../../Common/Loader';

const theadStyle = {
  color: "#064420",
  fontSize: "18px",
  verticalAlign: "top",
  textAlign: "center",
  fontWeight: 600
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

function FarmerSubLoan() {
  const [activeTab, setActiveTab] = useState("tab1")
  const [loanWindow, setLoanWindow] = useState({})
  const navigate = useNavigate()

  const { isLoading } = useQuery({
    queryKey: ["loanwindow", "farmer"],
    queryFn: getLoanwindow,
    onSuccess(res) {
      const loanWindowId = localStorage.getItem("loanWindowId")
      const loanWindow = res.data.filter((item) => item.id === loanWindowId)[0]
      setLoanWindow(loanWindow)
    }
  })

  const handleClick = () => {
    localStorage.removeItem("fpoId")
    navigate('/samunnati/farmer-loan', { replace: true })
  }

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <main id="main_container" className="main_container container-fluid" style={{ marginTop: "3.188rem" }}>
      <h3 className="mb-4">Farmer Loan Requests</h3>

      <div className="list_container">
        <div className="back_btn mt-3 mb-4">
          <button onClick={handleClick}><ArrowBackIcon className="btn_icon" />Back to FPO Loan Page</button>
        </div>

        <div className="list_tab">
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
                      <Profile
                        loanWindow={loanWindow}
                      />
                    </TabContent>

                    <TabContent id="tab2" activeTab={activeTab}>
                      <LoanHistory
                        theadStyle={theadStyle}
                        tbodyStyle={tbodyStyle}
                        data={loanWindow?.loans?.filter(loan => loan.status === "completed")}
                        fpoId={loanWindow?.fpoId}
                        grantedAmount={loanWindow?.grantedAmount}
                        consumedWindowLoanAmount={loanWindow?.consumedWindowLoanAmount}
                      />
                    </TabContent>

                    <TabContent id="tab3" activeTab={activeTab}>
                      <OngoingLoans
                        theadStyle={theadStyle}
                        tbodyStyle={tbodyStyle}
                        data={loanWindow?.loans?.filter(loan => loan.status === "approved")}
                      />
                    </TabContent>

                    <TabContent id="tab4" activeTab={activeTab}>
                      <PendingLoans
                        theadStyle={theadStyle}
                        tbodyStyle={tbodyStyle}
                        data={loanWindow?.loans?.filter(loan => loan.status === "in-process")}
                      />
                    </TabContent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FarmerSubLoan