import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getLoanwindow } from "../../../actions/fpo";
// import useModal from "../../../hooks/useModal";

import ConfirmApproveLoanApp from "../Modals/FarmerLoan/ConfirmApproveLoanApp";
import AggRepaymentStructure from "../Modals/FarmerLoan/AggRepaymentStructure";
import RepaymentStructure from "../Modals/FarmerLoan/RepaymentStructure";
import RepaymentConfirm from "../Modals/FarmerLoan/RepaymentConfirm";
import LoanApplication from "../Modals/FarmerLoan/LoanApplication";
import InterestRate from "../Modals/FarmerLoan/InterestRate";
import AddRepayment from "../Modals/FarmerLoan/AddRepayment";
import ConfirmBox from "../Modals/FarmerLoan/ConfirmBox";
import Loader from '../../Common/Loader';
import Aadhar from "../Modals/Aadhar";
import Img from "../Modals/FarmerInfo/Img";
import Pan from "../Modals/Pan";

import ApprovedLoans from "./ApprovedLoans";
import LoanHistory from "./LoanHistory";

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
  const [showLoanApplication, setShowLoanApplication] = useState(false)
  const [showApproveConfirm, setShowApproveConfirm] = useState(false)
  const [showConfirmPayment, setShowConfirmPayment] = useState(false)
  const [showAadharCardImg, setShowAadharCardImg] = useState(false)
  const [showRepaymentForm, setShowRepaymentForm] = useState(false)
  const [showAggRepayment, setShowAggRepayment] = useState(false)
  const [showPanCardImg, setShowPanCardImg] = useState(false)
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  const [showInterest, setShowInterest] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)
  const [textState, setTextState] = useState("")
  const [showImg, setShowImg] = useState(false)
  const [step, setStep] = useState(0)
  const [currentLoan, setCurrentLoan] = useState({})
  const [currentLoanWindow, setCurrentLoanWindow] = useState({})

  // const { modal, updateModal, closeModal } = useModal()
  const { isLoading, data } = useQuery({
    queryKey: ["loanwindow", "farmer"],
    queryFn: getLoanwindow,

  })

  const loanWindowList = data?.data || []

  const checkActive = (index, className) =>
    activeIndex === index ? className : ""

  const handleCloseLoanApplication = () => setShowLoanApplication(false)
  const handleCloseApproveConfirm = () => setShowApproveConfirm(false)
  const handleShowLoanApplication = () => setShowLoanApplication(true)
  const handleCloseConfirmPayment = () => setShowConfirmPayment(false)
  const handleShowConfirmPayment = () => setShowConfirmPayment(true)
  const handleCloseRepaymentForm = () => setShowRepaymentForm(false)
  const handleCloseAadharCardImg = () => setShowAadharCardImg(false)
  const handleCloseAggRepayment = () => setShowAggRepayment(false)
  const handleShowRepaymentForm = () => setShowRepaymentForm(true)
  const handleShowAadharCardImg = () => setShowAadharCardImg(true)
  const handleCloseConfirmBox = () => setShowConfirmBox(false)
  const handleClosePanCardImg = () => setShowPanCardImg(false)
  const handleShowPanCardImg = () => setShowPanCardImg(true)
  const handleCloseInterest = () => setShowInterest(false)
  const handleShowInterest = () => setShowInterest(true)
  const handleCloseConfirm = () => setShowConfirm(false)
  const handleShowConfirm = () => setShowConfirm(true)
  const handleCloseImg = () => setShowImg(false)
  const handleShowImg = () => setShowImg(true)
  const handleClick = i => setActiveIndex(i)

  const confirmBox = (e) => {
    e.preventDefault()
    setShowConfirmPayment(true)
  }

  const confirmBid = (e) => {
    e.preventDefault()
    setShowConfirm(false)
    setShowInterest(false)
  }

  const cancelBid = (e) => {
    e.preventDefault()
    setShowConfirm(false)
    setShowInterest(false)
  }

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
                checked={!!toggleText}
                onChange={toggleText}
              />
              <span className="switch" />
            </label>
          </div>
        </div>

        <button
          className="loan_btn"
          onClick={handleShowInterest}
        >
          Set Interest Rate
        </button>

        <div className="tabs mt-5">
          <button
            className={`tab ${checkActive(1, "active")}`}
            onClick={() => handleClick(1)}
          >
            Loans Approved by Samunnati
          </button>
          <button
            className={`tab ${checkActive(2, "active")}`}
            onClick={() => handleClick(2)}
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

      <RepaymentStructure
        showRepaymentForm={showRepaymentForm}
        handleCloseRepaymentForm={handleCloseRepaymentForm}
        handleShowConfirmPayment={handleShowConfirmPayment}
        currentLoan={currentLoan}
        currentLoanWindow={currentLoanWindow}
      />

      <AddRepayment
        showConfirmPayment={showConfirmPayment}
        handleCloseConfirmPayment={handleCloseConfirmPayment}
        confirmBid={confirmBid}
        handleShowConfirm={handleShowConfirm}
      />

      <RepaymentConfirm
        showConfirm={showConfirm}
        handleCloseConfirm={handleCloseConfirm}
        confirmBid={confirmBid}
        cancelBid={cancelBid}
      />

      <LoanApplication
        showLoanApplication={showLoanApplication}
        handleCloseLoanApplication={handleCloseLoanApplication}
        step={step}
        setStep={setStep}
        currentLoan={currentLoan}
        handleShowAadharCardImg={handleShowAadharCardImg}
        handleShowPanCardImg={handleShowPanCardImg}
        handleShowImg={handleShowImg}
        currentLoanWindow={currentLoanWindow}
      />

      <Aadhar
        showAadharCardImg={showAadharCardImg}
        handleCloseAadharCardImg={handleCloseAadharCardImg}
      />

      <Pan
        showPanCardImg={showPanCardImg}
        handleClosePanCardImg={handleClosePanCardImg}
      />

      <ConfirmBox
        showConfirmBox={showConfirmBox}
        handleCloseConfirmBox={handleCloseConfirmBox}
      />

      <ConfirmApproveLoanApp
        showApproveConfirm={showApproveConfirm}
        handleCloseApproveConfirm={handleCloseApproveConfirm}
      />

      <Img
        showImg={showImg}
        handleCloseImg={handleCloseImg}
      />

      <InterestRate
        showInterest={showInterest}
        handleCloseInterest={handleCloseInterest}
        handleShowConfirm={handleShowConfirm}
        showConfirm={showConfirm}
        handleCloseConfirm={handleCloseConfirm}
        confirmBid={confirmBid}
        cancelBid={cancelBid}
        confirmBox={confirmBox}
      />

      <AggRepaymentStructure
        showAggRepayment={showAggRepayment}
        handleCloseAggRepayment={handleCloseAggRepayment}
      />
    </main>
  )
}

export default FarmerLoan
