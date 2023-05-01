import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getLoanList } from "../../../actions/farmer";
import useModal from "../../../hooks/useModal";

import { TabNavItem, TabContent } from "../../UIComp/Tabs";
import RepaymentStructure from "../Modals/Loan/RepaymentStructure";
import LoanApplication from "../Modals/Loan/LoanApplication";
import Loader from "../../Common/Loader";
import InProcess from "./InProcess";
import Approved from "./Approved";
import Rejected from "./Rejected";

const h3Style = {
  fontSize: "22px",
  fontWeight: "800",
  color: "rgb(33, 37, 41)",
}

const applyBtnStyle = {
  backgroundColor: "#064420",
  border: "none",
  borderRadius: "5px",
  width: "130px",
  color: "#fff",
  padding: "5px 8px"
}

const Loan = () => {
  const [showRepaymentLoan, setShowRepaymentLoan] = useState(false)
  const [activeTab, setActiveTab] = useState("tab1")

  const handleCloseRepaymentLoan = () => setShowRepaymentLoan(false)

  const { modal, updateModal, closeModal } = useModal()
  const { isLoading, data } = useQuery({
    queryKey: ["farmer/loans"],
    queryFn: getLoanList
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3
              className="text-dark mb-0"
              style={h3Style}
            >
              Apply for loan
            </h3>

            <button
              className="loan_button"
              style={applyBtnStyle}
              onClick={() => updateModal("applyLoan")}
            >
              Apply Loan
            </button>
          </div>

          <div className="tabs_wrapper">
            <ul className="nav-tab">
              <TabNavItem
                title="Granted Loans"
                className="mr-3"
                id="tab1"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabNavItem
                title="Rejected Loans"
                id="tab2"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabNavItem
                title="Loan in process"
                id="tab3"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </ul>

            <div className="outlet">
              <TabContent id="tab1" activeTab={activeTab}>
                <Approved
                  data={data?.data.filter(g => g.status === "approved")}
                  updateModal={updateModal}
                />
              </TabContent>

              <TabContent id="tab2" activeTab={activeTab}>
                <Rejected
                  data={data?.data.filter(r => r.status === "rejected" || r.fpoApprovalStatus === "rejected")}
                />
              </TabContent>

              <TabContent id="tab3" activeTab={activeTab}>
                <InProcess
                  data={data?.data.filter(ip => ip.status === "in-process" && ip.fpoApprovalStatus !== "rejected")}
                  updateModal={updateModal}
                />
              </TabContent>
            </div>
          </div>
        </div>
      </div>

      {
        (modal.state === "applyLoan" || modal.state === "LoanApplication") &&
        <LoanApplication
          show
          data={modal.data}
          isCreate={modal.state === "applyLoan"}
          handleClose={closeModal}
        />
      }

      <RepaymentStructure
        showRepaymentLoan={showRepaymentLoan}
        handleCloseRepaymentLoan={handleCloseRepaymentLoan}
      />
    </div>
  )
}

export default Loan
