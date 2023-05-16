import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getLoanwindow } from "../../../actions/fpo";
import useModal from "../../../hooks/useModal";

import AggRepaymentStructure from "../Modals/FarmerLoan/AggRepaymentStructure";
import RepaymentStructure from "../Modals/FarmerLoan/RepaymentStructure";
import LoanApplication from "../Modals/FarmerLoan/LoanApplication";
import InterestRate from "../Modals/FarmerLoan/InterestRate";

import ApprovedLoans from "./ApprovedLoans";
import LoanHistory from "./LoanHistory";
import Loader from '../../Common/Loader';

const theadStyle = {
  color: "#064420",
  fontSize: "17px",
  verticalAlign: "top",
  fontWeight: "bold",
  borderBottom: "1px solid #c7ccd1",
}

const tbodyStyle = {
  color: "#000",
  fontSize: "15px",
  fontWeight: "500",
}

function FarmerLoan() {
  const { modal, updateModal, closeModal } = useModal()
  // const [recieveApplication, setRecieveApplication] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)

  const { isLoading, data } = useQuery({
    queryKey: ["loanwindow", "farmer"],
    queryFn: getLoanwindow,
  })

  const loanWindowList = data?.data || []

  const checkActive = (index, className) => activeIndex === index ? className : ""

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <main id="main_container" className="main_container container-fluid itemContainer">
      <h3 className="mb-4">Farmer Loan Information</h3>

      <div className="list_container">
        <div className="d-flex align-items-center">
          <button
            className="loan_btn"
            style={{ marginRight: "auto", marginLeft: 0 }}
            onClick={() => updateModal("showInterest")}
          >
            Set Interest Rate
          </button>

          {/* <div>
            Receive Loan Application
            <label className="toggle-switch mt-0">
              <input
                type="checkbox"
                checked={recieveApplication}
                onChange={() => setRecieveApplication(p => !p)}
              />
              <span className="switch" />
            </label>
          </div> */}
        </div>

        <div className="tabs mt-5">
          <button
            className={`tab ${checkActive(1, "active")}`}
            onClick={() => setActiveIndex(1)}
          >
            Loans Approved by Samunnati
          </button>

          <button
            className={`tab ${checkActive(2, "active")}`}
            onClick={() => setActiveIndex(2)}
          >
            Loan History
          </button>
        </div>

        <div className="panels">
          <div className={`panel ${checkActive(1, "active")}`}>
            <ApprovedLoans
              loanWindowList={loanWindowList}
              theadStyle={theadStyle}
              tbodyStyle={tbodyStyle}
              updateModal={updateModal}
            />
          </div>

          <div className={`panel ${checkActive(2, "active")}`}>
            <LoanHistory
              theadStyle={theadStyle}
              tbodyStyle={tbodyStyle}
            />
          </div>
        </div>
      </div>

      {
        modal.state === "showRepaymentForm" &&
        <RepaymentStructure
          show
          handleClose={closeModal}
          currentLoan={modal.data.loan}
          currentLoanWindow={modal.data.loanWindow}
        />
      }

      {
        modal.state === "showLoanApplication" &&
        <LoanApplication
          show
          handleClose={closeModal}
          currentLoan={modal.data.loan}
          currentLoanWindow={modal.data.loanWindow}
        />
      }

      {
        modal.state === "showInterest" &&
        <InterestRate
          show
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showAggRepayment" &&
        <AggRepaymentStructure
          show
          handleClose={closeModal}
        />
      }
    </main>
  )
}

export default FarmerLoan
