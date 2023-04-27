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

const listStyle = {
  border: "none",
  padding: "5px 5px",
  borderRadius: "5px",
  position: "absolute",
  right: "10%",
  top: "120px",
}

const h3Style = {
  fontSize: "15px",
  position: "fixed",
  right: "5.5%",
}

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
  const [activeIndex, setActiveIndex] = useState(1)
  const [textState, setTextState] = useState("")

  const { isLoading, data } = useQuery({
    queryKey: ["loanwindow", "farmer"],
    queryFn: getLoanwindow,
  })

  const loanWindowList = data?.data || []

  const checkActive = (index, className) => activeIndex === index ? className : ""

  const toggleText = () => {
    setTextState((state) =>
      state === "Receive Loan Application Enabled"
        ? "Receive Loan Application Disabled"
        : "Receive Loan Application Enabled"
    )
  }

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <main id="main_container" className="main_container container-fluid itemContainer">
      <div className="">
        <h3 className="mb-4">Farmer Loan Information</h3>
      </div>
      <div className="list_container">
        <div
          style={listStyle}
          className="list_container_inner"
        >
          <h3 style={h3Style}>
            {textState}
          </h3>

          <div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={!!textState}
                onChange={toggleText}
              />
              <span className="switch" />
            </label>
          </div>
        </div>

        <button
          className="loan_btn"
          onClick={() => updateModal("showInterest")}
        >
          Set Interest Rate
        </button>

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
          currentLoan={{}}
          currentLoanWindow={{}}
        />
      }

      {
        modal.state === "showLoanApplication" &&
        <LoanApplication
          show
          handleClose={closeModal}
          currentLoan={{}}
          currentLoanWindow={{}}
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
