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
import { getActiveLoanwindow } from "../../../actions/fpo";

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
  const { modal, updateModal, closeModal } = useModal()
  const [activeTab, setActiveTab] = useState("tab1")

  const { isLoading, data } = useQuery({
    queryKey: ["farmer/loans"],
    queryFn: getLoanList
  })

  const { data: data1 } = useQuery({
    queryKey: ["active-window"],
    queryFn: () => getActiveLoanwindow({ windowType: "farmer" })
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

            {
              // Check if data1 and data1.data exist and data1.data has a length greater than 1
              data1?.data?.length > 0 ? (
                // Render a disabled button if the condition is true
                <button
                  className="loan_button"
                  style={applyBtnStyle}
                  onClick={() => updateModal("applyLoan")}
                >
                  Apply Loan
                </button>
              ) : (
                // Render a regular button if the condition is false
                <button
                  className="loan_button"
                  disabled={true}
                  style={applyBtnStyle}
                  onClick={() => updateModal("applyLoan")}
                >
                  Apply Loan
                </button>
              )
            }
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
                  data={data?.data.filter(g => g.status === "approved" || g.status === "Completed")}
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

      {
        modal.state === "showRepaymentLoan" &&
        <RepaymentStructure
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }
    </div>
  )
}

export default Loan
