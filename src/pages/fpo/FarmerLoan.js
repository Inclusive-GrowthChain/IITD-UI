/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";

import logo from "../../assets/img/logo.png";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./style.css";

const repaymentList = [
  {
    id: "1",
    sno: "1",
    scheduled_repayment: "12-08-2021",
    scheduled_emi: "abcd",
  },
  {
    id: "2",
    sno: "2",
    scheduled_repayment: "12-08-2021",
    scheduled_emi: "abcd",
  },
  {
    id: "3",
    sno: "3",
    scheduled_repayment: "12-08-2021",
    scheduled_emi: "abcd",
  },
  {
    id: "4",
    sno: "4",
    scheduled_repayment: "12-08-2021",
    scheduled_emi: "abcd",
  },
  {
    id: "5",
    sno: "5",
    scheduled_repayment: "12-08-2021",
    scheduled_emi: "abcd",
  },
]

const farmerList = [
  {
    id: "F 1",
    name: "Farmer Name",
    loanId: "L 1",
    loanAppDate: "12-08-2021",
    loanAmount: "10000",
    status: "Approval Pending",
    email: "Email",
    mobile: "1234567890",
    aadharNo: "1234567890",
    panNo: "1234567890",
    address: "Address",
    incomeType: "Income",
    dob: "2022-10-10",
    landOwned: "Land",
    loanReason: "Reason",
    interest: 12,
    amount: 1000000,
    tenure: 12,
  },
  {
    id: "F 2",
    name: "Farmer Name",
    loanId: "L 2",
    loanAppDate: "12-08-2021",
    loanAmount: "10000",
    status: "Approval Pending",
    email: "Email",
    mobile: "1234567890",
    aadharNo: "1234567890",
    panNo: "1234567890",
    address: "Address",
    incomeType: "Income",
    dob: "2022-10-10",
    landOwned: "Land",
    loanReason: "Reason",
    interest: 12,
    amount: 1000000,
    tenure: 12,
  },
  {
    id: "F 3",
    name: "Farmer Name",
    loanId: "L 3",
    loanAppDate: "12-08-2021",
    loanAmount: "10000",
    status: "Approved",
    email: "Email",
    mobile: "1234567890",
    aadharNo: "1234567890",
    panNo: "1234567890",
    address: "Address",
    incomeType: "Income",
    dob: "2022-10-10",
    landOwned: "Land",
    loanReason: "Reason",
    interest: 12,
    amount: 1000000,
    tenure: 12,
  },
  {
    id: "F 4",
    name: "Farmer Name",
    loanId: "L 4",
    loanAppDate: "12-08-2021",
    loanAmount: "10000",
    status: "Approved",
    email: "Email",
    mobile: "1234567890",
    aadharNo: "1234567890",
    panNo: "1234567890",
    address: "Address",
    incomeType: "Income",
    dob: "2022-10-10",
    landOwned: "Land",
    loanReason: "Reason",
    interest: 12,
    amount: 1000000,
    tenure: 12,
  },
]

const FarmerLoan = ({ isToggled, onToggle }) => {
  const [showApproveConfirm, setShowApproveConfirm] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)
  const [showRepaymentForm, setShowRepaymentForm] = useState(false)
  const [showInterest, setShowInterest] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [currentFarmer, setCurrentFarmer] = useState({})
  const [showImg, setShowImg] = useState(false)
  const [showConfirmPayment, setShowConfirmPayment] = useState(false)
  const [step, setStep] = useState(0)
  const [showLoanApplication, setShowLoanApplication] = useState(false)
  const [showAadharCardImg, setShowAadharCardImg] = useState(false)
  const [showPanCardImg, setShowPanCardImg] = useState(false)
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  const [showAggRepayment, setShowAggRepayment] = useState(false)
  const [textState, setTextState] = useState("")

  const checkActive = (index, className) =>
    activeIndex === index ? className : ""

  const handleClick = (index) => setActiveIndex(index)
  const handleCloseConfirmBox = () => setShowConfirmBox(false)
  const handleShowAadharCardImg = () => setShowAadharCardImg(true)
  const handleShowPanCardImg = () => setShowPanCardImg(true)
  const handleCloseAadharCardImg = () => setShowAadharCardImg(false)
  const handleClosePanCardImg = () => setShowPanCardImg(false)
  const handleShowLoanApplication = () => setShowLoanApplication(true)
  const handleCloseLoanApplication = () => setShowLoanApplication(false)
  const handleShowAggRepayment = () => setShowAggRepayment(true)
  const handleCloseAggRepayment = () => setShowAggRepayment(false)
  const handleCloseApproveConfirm = () => setShowApproveConfirm(false)
  const handleShowRepaymentForm = () => setShowRepaymentForm(true)
  const handleShowInterest = () => setShowInterest(true)
  const handleShowConfirm = () => setShowConfirm(true)
  const handleShowConfirmPayment = () => setShowConfirmPayment(true)
  const handleCloseRepaymentForm = () => setShowRepaymentForm(false)
  const handleCloseInterest = () => setShowInterest(false)
  const handleCloseConfirm = () => setShowConfirm(false)
  const handleCloseConfirmPayment = () => setShowConfirmPayment(false)
  const handleShowImg = () => setShowImg(true)
  const handleCloseImg = () => setShowImg(false)

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

  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <main id="main_container" className="main_container container-fluid">
          <div className="">
            <h3 className="mb-4">Farmer Loan Information</h3>
          </div>
          <div className="list_container">
            <div
              style={{
                border: "none",
                padding: "5px 5px",
                borderRadius: "5px",
                position: "absolute",
                // float: "right",
                right: "400px",
                top: "120px",
              }}
            >
              <h3
                style={{
                  fontSize: "15px",
                  position: "fixed",
                  right: "310px",
                }}
              >
                {textState}
              </h3>
              <div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={isToggled}
                    onChange={onToggle}
                    onClick={toggleText}
                  />
                  <span className="switch" />
                </label>
              </div>
            </div>
            <button
              className="loan_btn"
              onClick={() => {
                handleShowInterest()
              }}
            >
              Set Interest Rate
            </button>
            <div>
              <Modal show={showInterest} onHide={handleCloseInterest}>
                <Modal.Header closeButton>Interest Rate</Modal.Header>
                <Modal.Body>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Interest Rate</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="14%"
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-12 text-center">
                      <button
                        className="py-0.5 mt-3"
                        style={{
                          backgroundColor: "#064420",
                          color: "#fff",
                          borderRadius: "5px",
                          border: "none",
                          padding: "10px 10px",
                          width: "30%",
                          fontSize: "17px",
                          lineHeight: "1rem",
                        }}
                        onClick={() => {
                          handleShowConfirm()
                          confirmBox()
                        }}
                      >
                        Submit
                      </button>
                      <Modal show={showConfirm} onHide={handleCloseConfirm}>
                        <Modal.Body
                          closeButton
                          style={{
                            position: "absolute",
                            top: "4rem",
                            left: "6rem",
                            width: "60%",
                            height: "150px",
                            timer: "1500",
                            backgroundColor: "#e9ecef",
                            color: "#000",
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              dispalay: "flex",
                              alignItems: "center",
                            }}
                          >
                            <p className="text-center">Are you confirm!</p>
                            <button
                              style={{
                                backgroundColor: "#064420",
                                alignItems: "center",
                                borderRadius: "5px",
                                border: "none",
                                padding: "0.25rem 1rem",
                                color: "#fff",
                              }}
                              onClick={(e) => {
                                confirmBid(e)
                              }}
                            >
                              Yes
                            </button>
                            <button
                              style={{
                                backgroundColor: "#064420",
                                alignItems: "center",
                                borderRadius: "5px",
                                border: "none",
                                padding: "0.25rem 1rem",
                                color: "#fff",
                              }}
                              onClick={(e) => {
                                cancelBid(e)
                              }}
                            >
                              No
                            </button>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
            <>
              <div className="tabs mt-5">
                <button
                  className={`tab ${checkActive(1, "active")}`}
                  onClick={() => handleClick(1)}
                >
                  Loans Approved by Samunnati
                </button>
                {/* <button
                  className={`tab ${checkActive(2, "active")}`}
                  onClick={() => handleClick(2)}
                >
                  Loans Approved by FPO
                </button> */}
                <button
                  className={`tab ${checkActive(2, "active")}`}
                  onClick={() => handleClick(2)}
                >
                  Loan History
                </button>
                <button
                  style={{
                    color: "blue",
                    borderRadius: "5px",
                    border: "none",
                    padding: "0.25rem 1rem",
                    width: "fit-content",
                    fontSize: "1rem",
                    lineHeight: "2rem",
                    textDecoration: "underline",
                    backgroundColor: "rgb(255, 255, 255, 0)",
                    position: "relative",
                    left: "400px",
                  }}
                  onClick={() => {
                    handleShowAggRepayment()
                  }}
                >
                  Aggregate Repayment
                </button>
              </div>
              <div className="panels">
                <div className={`panel ${checkActive(1, "active")}`}>
                  <div className="card_table1">
                    <div className=" table-responsive">
                      <table>
                        <thead
                          style={{
                            color: "#064420",
                            fontSize: "17px",
                            verticalAlign: "top",
                            fontWeight: "bold",
                            borderBottom: "1px solid #c7ccd1",
                          }}
                        >
                          <tr>
                            <td>Farmer Id</td>
                            <td>Farmer Name</td>
                            <th>Loan Id</th>
                            <th>Loan Application Date</th>
                            <th>Loan Amount</th>
                            <th>Repayment Structure</th>
                            <th>Loan Application</th>
                          </tr>
                        </thead>
                        <tbody
                          style={{
                            color: "#000",
                            fontSize: "15px",
                            fontWeight: "500",
                          }}
                        >
                          {farmerList.map((farmer) => {
                            return (
                              <tr>
                                <td>{farmer.id}</td>
                                <td>{farmer.name}</td>
                                <td>{farmer.loanId}</td>
                                <td>{farmer.loanAppDate}</td>
                                <td>{farmer.loanAmount}</td>
                                <td>
                                  <button
                                    className="py-0.5"
                                    style={{
                                      backgroundColor: "#064420",
                                      color: "#fff",
                                      alignItems: "center",
                                      borderRadius: "5px",
                                      border: "none",
                                      padding: "5px 10px",
                                      width: "fit-content",
                                      fontSize: ".75rem",
                                      lineHeight: "1rem",
                                    }}
                                    onClick={() => {
                                      handleShowRepaymentForm()
                                    }}
                                  >
                                    View
                                  </button>
                                </td>
                                <td>
                                  <button
                                    className="py-0.5"
                                    style={{
                                      backgroundColor: "#064420",
                                      color: "#fff",
                                      alignItems: "center",
                                      borderRadius: "5px",
                                      border: "none",
                                      padding: "5px 10px",
                                      width: "fit-content",
                                      fontSize: ".75rem",
                                      lineHeight: "1rem",
                                    }}
                                    onClick={() => {
                                      setCurrentFarmer(farmer)
                                      setStep(0)
                                      handleShowLoanApplication()
                                    }}
                                  >
                                    View
                                  </button>
                                </td>
                                {/* {
                                  farmer.status === "Approval Pending" && (
                                    <td>
                                      <button
                                        className="py-0.5"
                                        style={{
                                          backgroundColor: "#FFD700",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "5px 10px",
                                          width: "fit-content",
                                          fontSize: ".75rem",
                                          lineHeight: "1rem",
                                        }}
                                      >
                                        {farmer.status}
                                      </button>
                                    </td>
                                  )
                                }
                                {
                                  farmer.status === "Approved" && (
                                    <td>
                                      <button
                                        className="py-0.5"
                                        style={{
                                          backgroundColor: "#064420",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "5px 10px",
                                          width: "fit-content",
                                          fontSize: ".75rem",
                                          lineHeight: "1rem",
                                          color: "#fff",
                                        }}
                                      >
                                        {farmer.status}
                                      </button>
                                    </td>
                                  )
                                } */}
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <Modal
                        size="xl"
                        show={showRepaymentForm}
                        onHide={handleCloseRepaymentForm}
                      >
                        <Modal.Header closeButton>
                          Repayment Structure
                        </Modal.Header>
                        <Modal.Body>
                          <div className="repayment_title">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="row">
                                  <div className="col-6">
                                    <strong>Loan ID : </strong>
                                  </div>
                                  <div className="col-6">
                                    <span>12345</span>
                                  </div>
                                  <div className="col-6">
                                    <strong>Farmer Name : </strong>
                                  </div>
                                  <div className="col-6">
                                    <span>abcd</span>
                                  </div>
                                  <div className="col-6">
                                    <strong>FPO Name : </strong>
                                  </div>
                                  <div className="col-6">
                                    <span>abcd</span>
                                  </div>
                                  <div className="col-6">
                                    <strong>Loan Amount : </strong>
                                  </div>
                                  <div className="col-6">
                                    <span>400</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="row">
                                  <div className="col-6">
                                    <strong>Loan Period in Months : </strong>
                                  </div>
                                  <div className="col-6">
                                    <span>1</span>
                                  </div>
                                  <div className="col-6">
                                    <strong>No of Repayment : </strong>
                                  </div>
                                  <div className="col-6">
                                    <span>1</span>
                                  </div>
                                  <div className="col-6">
                                    <strong>Annual Interest Rate : </strong>
                                  </div>
                                  <div className="col-6">
                                    <span>14%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-5">
                            <table style={{ border: "1px solid #eee" }}>
                              <thead
                                style={{
                                  backgroundColor: "#eee",
                                }}
                              >
                                <tr>
                                  <th>S.No.</th>
                                  <th>Scheduled Repayment Date</th>
                                  <th>Scheduled EMI Amount</th>
                                  <th>Repayment Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {repaymentList.map((item) => (
                                  <tr key={item.id}>
                                    <td>{item.sno}</td>
                                    <td>{item.scheduled_repayment}</td>
                                    <td>{item.scheduled_emi}</td>
                                    <td>
                                      <button
                                        style={{
                                          backgroundColor: "#064420",
                                          color: "#fff",
                                          alignItems: "center",
                                          borderRadius: "5px",
                                          border: "none",
                                          padding: "0.25rem 1rem",
                                          width: "fit-content",
                                          fontSize: ".75rem",
                                          lineHeight: "1rem",
                                        }}
                                        onClick={() => {
                                          // handleShowConfirm()
                                          // confirmBox(e)
                                          handleShowConfirmPayment()
                                        }}
                                      >
                                        Add Repayment
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                    <div className="confirm_payment">
                      <Modal
                        show={showConfirmPayment}
                        onHide={handleCloseConfirmPayment}
                      >
                        <Modal.Header closeButton>Add Repayment</Modal.Header>
                        <Modal.Body>
                          <div className="row">
                            <div className="col-6">
                              <label>Actual Repayment Date</label>
                            </div>
                            <div className="col-6">
                              <input
                                type="date"
                                className="form-control"
                                placeholder="Enter thr price"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <label>Actual Repayment Amount</label>
                            </div>
                            <div className="col-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="300000"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <button
                                style={{
                                  backgroundColor: "#064420",
                                  color: "#fff",
                                  alignItems: "center",
                                  borderRadius: "5px",
                                  border: "none",
                                  padding: "0.25rem 1rem",
                                  width: "fit-content",
                                  fontSize: ".75rem",
                                  lineHeight: "1rem",
                                }}
                                onClick={(e) => {
                                  confirmBid(e)
                                  handleShowConfirm()
                                }}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                    <div>
                      <Modal show={showConfirm} onHide={handleCloseConfirm}>
                        <Modal.Body
                          closeButton
                          style={{
                            position: "absolute",
                            top: "4rem",
                            left: "6rem",
                            width: "60%",
                            height: "150px",
                            timer: "1500",
                            backgroundColor: "#e9ecef",
                            color: "#000",
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              dispalay: "flex",
                              alignItems: "center",
                            }}
                          >
                            <p className="text-center">Are you confirm!</p>
                            <button
                              style={{
                                backgroundColor: "#064420",
                                alignItems: "center",
                                borderRadius: "5px",
                                border: "none",
                                padding: "0.25rem 1rem",
                                color: "#fff",
                                marginRight: "10px",
                              }}
                              onClick={(e) => {
                                confirmBid(e)
                              }}
                            >
                              Yes
                            </button>
                            <button
                              style={{
                                backgroundColor: "#064420",
                                alignItems: "center",
                                borderRadius: "5px",
                                border: "none",
                                padding: "0.25rem 1rem",
                                color: "#fff",
                              }}
                              onClick={(e) => {
                                cancelBid(e)
                              }}
                            >
                              No
                            </button>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                    <div>
                      {/* <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          Loan Application
                        </Modal.Header>
                        <Modal.Body>
                          {
                            step === 0 && (
                              <div className="row ">
                                <div className="col">
                                  <form>
                                    <div className="form">
                                      <div className="card p-2">
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Name as per PAN</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              className="form-control"
                                              type="text"
                                              value={currentFarmer.name}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Email</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              className="form-control"
                                              type="email"
                                              value={currentFarmer.email}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Mobile</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              className="form-control"
                                              type="number"
                                              value={currentFarmer.mobile}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Aadhaar Number</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              className="form-control"
                                              type="number"
                                              value={currentFarmer.aadharNo}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>PAN Card Number</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              className="form-control"
                                              type="number"
                                              value={currentFarmer.panNo}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Address</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              className="form-control"
                                              type="text"
                                              value={currentFarmer.address}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Income Type</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              className="form-control"
                                              type="text"
                                              value={currentFarmer.incomeType}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Amount Required</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              className="form-control"
                                              type="number"
                                              value={currentFarmer.loanAmount}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Date of Birth</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              className="form-control"
                                              type="date"
                                              value={currentFarmer.dob}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Land Owned</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              className="form-control"
                                              type="text"
                                              value={currentFarmer.landOwned}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Reason for loan</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <input
                                              className="form-control"
                                              type="text"
                                              value={currentFarmer.loanReason}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-12 col-md-6">
                                            <label className="form-label">
                                              Aadhar Picture
                                            </label>
                                            <button
                                              className="py-0.5"
                                              style={{
                                                backgroundColor: "#064420",
                                                color: "#fff",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                border: "none",
                                                padding: "5px 10px",
                                                width: "100%",
                                                fontSize: ".75rem",
                                                lineHeight: "1.7rem",
                                              }}
                                              onClick={(e) => {
                                                e.preventDefault()
                                                handleShowImg()
                                              }}
                                            >
                                              View
                                            </button>
                                          </div>
                                          <div className="col-12 col-md-6">
                                            <label className="form-label">
                                              PAN Card Picture
                                            </label>
                                            <button
                                              className="py-0.5"
                                              style={{
                                                backgroundColor: "#064420",
                                                color: "#fff",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                border: "none",
                                                padding: "5px 10px",
                                                width: "100%",
                                                fontSize: ".75rem",
                                                lineHeight: "1.7rem",
                                              }}
                                              onClick={(e) => {
                                                e.preventDefault()
                                                handleShowImg()
                                              }}
                                            >
                                              View
                                            </button>
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-12 col-md-6">
                                            <label className="form-label">
                                              Bank Statements
                                            </label>
                                            <button
                                              className="py-0.5"
                                              style={{
                                                backgroundColor: "#064420",
                                                color: "#fff",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                border: "none",
                                                padding: "5px 10px",
                                                width: "100%",
                                                fontSize: ".75rem",
                                                lineHeight: "1.7rem",
                                              }}
                                              onClick={(e) => {
                                                e.preventDefault()
                                                handleShowImg()
                                              }}
                                            >
                                              View
                                            </button>
                                          </div>
                                          <div className="col-12 col-md-6">
                                            <label className="form-label">
                                              Address Proof
                                            </label>
                                            <button
                                              className="py-0.5"
                                              style={{
                                                backgroundColor: "#064420",
                                                color: "#fff",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                border: "none",
                                                padding: "5px 10px",
                                                width: "100%",
                                                fontSize: ".75rem",
                                                lineHeight: "1.7rem",
                                              }}
                                              onClick={(e) => {
                                                e.preventDefault()
                                                handleShowImg()
                                              }}
                                            >
                                              View
                                            </button>
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-12">
                                            <button
                                              className="btn btn-success"
                                              onClick={() => setStep((p) => p + 1)}
                                              style={{
                                                marginTop: "20px",
                                                backgroundColor: "#064420",
                                                width: "20%",
                                                position: "relative",
                                                float: "right",
                                              }}
                                            >
                                              Next
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            )
                          }
                          {
                            step === 1 && (
                              <div className="row ">
                                <div className="col">
                                  <form>
                                    <div className="form">
                                      <div className="card p-2">
                                        <div className="row m-2">
                                          <div className="col-md-6">
                                            <label className="form-label">
                                              Samunnati Payment Proof
                                            </label>
                                          </div>
                                          <div className="col-md-6">
                                            <button
                                              className="py-0.5"
                                              style={{
                                                backgroundColor: "#064420",
                                                color: "#fff",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                border: "none",
                                                padding: "5px 10px",
                                                width: "100%",
                                                fontSize: ".75rem",
                                                lineHeight: "1.7rem",
                                              }}
                                              onClick={(e) => {
                                                e.preventDefault()
                                                handleShowImg()
                                              }}
                                            >
                                              View
                                            </button>
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-md-6">
                                            <label className="form-label">
                                              Interest Rate (%)
                                            </label>
                                          </div>
                                          <div className="col-md-6">
                                            <input
                                              type="number"
                                              className="form-control"
                                              value={currentFarmer.interest}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-md-6">
                                            <label className="form-label">
                                              Amount (in Rs.)
                                            </label>
                                          </div>
                                          <div className="col-md-6">
                                            <input
                                              type="number"
                                              className="form-control"
                                              value={currentFarmer.amount}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-md-6">
                                            <label className="form-label">
                                              Tenure (in months)
                                            </label>
                                          </div>
                                          <div className="col-md-6">
                                            <input
                                              type="number"
                                              className="form-control"
                                              value={currentFarmer.tenure}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-md-12">
                                            <button
                                              className="btn btn-success w-100"
                                              style={{
                                                backgroundColor: "#064420",
                                                marginTop: "3rem",
                                              }}
                                              onClick={(e) => {
                                                e.preventDefault()
                                                handleShowApproveConfirm()
                                              }}
                                            >
                                              Approve
                                            </button>
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <button
                                            className="btn btn-success"
                                            style={{ backgroundColor: "#064420" }}
                                          >
                                            Submit
                                          </button>
                                        </div>
                                        <div className="row m-2">
                                          <button
                                            className="btn btn-success"
                                            onClick={() => setStep((p) => p - 1)}
                                            style={{
                                              marginTop: "1rem",
                                              backgroundColor: "#064420",
                                              width: "20%",
                                            }}
                                          >
                                            Back
                                          </button>
                                        </div>
                                        <div>
                                          <Modal
                                            show={showApproveConfirm}
                                            onHide={handleCloseApproveConfirm}
                                            backdrop="static"
                                            keyboard={false}
                                          >
                                            <Modal.Header closeButton>
                                              <Modal.Title>Confirm Approve Loan Application</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                              <div className="row">
                                                <div className="col-lg-12">
                                                  <label>Are you sure you want to approve the loan application?</label>
                                                </div>
                                                <div
                                                  className="row m-2"
                                                  style={{
                                                    justifyContent: "space-between",
                                                    padding: "0 10px",
                                                  }}
                                                >
                                                  <button
                                                    className="btn btn-success"
                                                    onClick={handleCloseApproveConfirm}
                                                    style={{
                                                      marginTop: "1rem",
                                                      backgroundColor: "#064420",
                                                      width: "20%",
                                                    }}
                                                  >
                                                    No
                                                  </button>
                                                  <button
                                                    className="btn btn-success"
                                                    onClick={(e) => {
                                                      e.preventDefault()
                                                      handleCloseApproveConfirm()
                                                    }}
                                                    style={{
                                                      marginTop: "1rem",
                                                      backgroundColor: "#064420",
                                                      width: "20%",
                                                      position: "relative",
                                                      float: "right",
                                                    }}
                                                  >
                                                    Yes
                                                  </button>
                                                </div>
                                              </div>
                                            </Modal.Body>
                                          </Modal>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            )
                          }
                        </Modal.Body>
                      </Modal> */}
                      <div>
                        <Modal
                          show={showLoanApplication}
                          onHide={handleCloseLoanApplication}
                        >
                          <Modal.Header closeButton>
                            Loan Application
                          </Modal.Header>
                          <Modal.Body>
                            {step === 0 && (
                              <div className="row">
                                <div className="col">
                                  <form>
                                    <div className="form">
                                      <label className="form-label select-label">
                                        <div className="">
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Loan ID</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>112345</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>FPO Name</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>FPO 1</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Bank Name</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>SBI</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Account Number</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>1234567890</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Bank IFSC</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>23423XXXX</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Branch Name</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>Branch Name</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Applicant Name</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>N 1</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>
                                                Loan Requested Amount
                                              </label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>200000</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Applicant Gender</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>Male</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>
                                                Applicant Mobile Number
                                              </label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>1234567890</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-12">
                                              {(("Create" && step < 6) ||
                                                ("Create" && step < 5)) && (
                                                  <button
                                                    className="btn btn-success"
                                                    onClick={() =>
                                                      setStep((p) => p + 1)
                                                    }
                                                    style={{
                                                      marginTop: "20px",
                                                      backgroundColor: "#064420",
                                                      width: "20%",
                                                      position: "relative",
                                                      float: "right",
                                                    }}
                                                  >
                                                    Next
                                                  </button>
                                                )}
                                            </div>
                                          </div>
                                        </div>
                                      </label>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            )}
                            {step === 1 && (
                              <div className="row mt-3">
                                <div className="col">
                                  <div className="form">
                                    <label className="form-label select-label">
                                      <div className="">
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Applicant DOB</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <label>07-04-2000</label>
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Applicant Age</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <label>22</label>
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Aadhard Card Number</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <label>1234567890</label>
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Aadhar Card Image</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <button
                                              style={{
                                                backgroundColor: "#064420",
                                                color: "#fff",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                border: "none",
                                                padding: "0.25rem 1rem",
                                                width: "100%",
                                                fontSize: ".75rem",
                                                lineHeight: "2rem",
                                              }}
                                              onClick={(e) => {
                                                handleShowAadharCardImg()
                                              }}
                                            >
                                              view
                                            </button>
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>PAN Card Number</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <label>1234567890</label>
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>PAN Card Image</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <button
                                              style={{
                                                backgroundColor: "#064420",
                                                color: "#fff",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                border: "none",
                                                padding: "0.25rem 1rem",
                                                width: "100%",
                                                fontSize: ".75rem",
                                                lineHeight: "2rem",
                                              }}
                                              onClick={(e) => {
                                                handleShowPanCardImg()
                                              }}
                                            >
                                              view
                                            </button>
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Co-Applicant Name</label>
                                          </div>
                                          <div className="col-lg-6">FPO 3</div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-lg-6">
                                            <label>Co-Applicant Gender</label>
                                          </div>
                                          <div className="col-lg-6">
                                            <label>Male</label>
                                          </div>
                                        </div>
                                        <div
                                          className="row m-2"
                                          style={{
                                            justifyContent: "space-between",
                                            padding: "0 10px",
                                          }}
                                        >
                                          {step > 0 && (
                                            <button
                                              className="btn btn-success"
                                              onClick={() =>
                                                setStep((p) => p - 1)
                                              }
                                              style={{
                                                marginTop: "1rem",
                                                backgroundColor: "#064420",
                                                width: "20%",
                                              }}
                                            >
                                              Back
                                            </button>
                                          )}
                                          {(("Create" && step < 6) ||
                                            ("Create" && step < 5)) && (
                                              <button
                                                className="btn btn-success"
                                                onClick={() =>
                                                  setStep((p) => p + 1)
                                                }
                                                style={{
                                                  marginTop: "1rem",
                                                  backgroundColor: "#064420",
                                                  width: "20%",
                                                  position: "relative",
                                                  float: "right",
                                                }}
                                              >
                                                Next
                                              </button>
                                            )}
                                        </div>
                                      </div>
                                    </label>
                                  </div>
                                </div>
                                <div>
                                  <Modal
                                    show={showAadharCardImg}
                                    onHide={handleCloseAadharCardImg}
                                  >
                                    <Modal.Header closeButton>
                                      Aadhar Card
                                    </Modal.Header>
                                    <Modal.Body>
                                      <img
                                        src={logo}
                                        alt="Aadhar Card"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                        }}
                                      />
                                    </Modal.Body>
                                  </Modal>
                                  <Modal
                                    show={showPanCardImg}
                                    onHide={handleClosePanCardImg}
                                  >
                                    <Modal.Header closeButton>
                                      PAN Card
                                    </Modal.Header>
                                    <Modal.Body>
                                      <img
                                        src={logo}
                                        alt="PAN Card"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                        }}
                                      />
                                    </Modal.Body>
                                  </Modal>
                                </div>
                              </div>
                            )}
                            {step === 2 && (
                              <div className="row mt-3">
                                <div className="col">
                                  <form>
                                    <div className="form">
                                      <label className="form-label select-label">
                                        <div className="">
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Co-Applicant DOB</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>02-03-2000</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Co-Applicant Age</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>22</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>
                                                Relationship with Applicant
                                              </label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>Son</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>
                                                Applicant Father Name
                                              </label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>Father Name</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>
                                                Applicant Mother Name
                                              </label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>Mother Name</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Door Number</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>24/H</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Street Name</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>Jv Colony</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Village</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>Hyderabad</label>
                                            </div>
                                          </div>
                                          <div
                                            className="row m-2"
                                            style={{
                                              justifyContent: "space-between",
                                              padding: "0 10px",
                                            }}
                                          >
                                            {step > 0 && (
                                              <button
                                                className="btn btn-success"
                                                onClick={() =>
                                                  setStep((p) => p - 1)
                                                }
                                                style={{
                                                  marginTop: "1rem",
                                                  backgroundColor: "#064420",
                                                  width: "20%",
                                                }}
                                              >
                                                Back
                                              </button>
                                            )}
                                            {(("Create" && step < 6) ||
                                              ("Create" && step < 5)) && (
                                                <button
                                                  className="btn btn-success"
                                                  onClick={() =>
                                                    setStep((p) => p + 1)
                                                  }
                                                  style={{
                                                    marginTop: "1rem",
                                                    backgroundColor: "#064420",
                                                    width: "20%",
                                                    position: "relative",
                                                    float: "right",
                                                  }}
                                                >
                                                  Next
                                                </button>
                                              )}
                                          </div>
                                        </div>
                                      </label>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            )}
                            {step === 3 && (
                              <div className="row mt-3">
                                <div className="col">
                                  <form>
                                    <div className="form">
                                      <label className="form-label select-label">
                                        <div className="">
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Taluk</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>Taluk</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>District</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>district</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>State</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>Telangana</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Pin Code</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>50XXXXX</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Occupation</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>occupation</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Education</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>12th</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Nature of Place</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>Hyderabad</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Residence</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>Hyderabad</label>
                                            </div>
                                          </div>
                                          <div
                                            className="row m-2"
                                            style={{
                                              justifyContent: "space-between",
                                              padding: "0 10px",
                                            }}
                                          >
                                            {step > 0 && (
                                              <button
                                                className="btn btn-success"
                                                onClick={() =>
                                                  setStep((p) => p - 1)
                                                }
                                                style={{
                                                  marginTop: "1rem",
                                                  backgroundColor: "#064420",
                                                  width: "20%",
                                                }}
                                              >
                                                Back
                                              </button>
                                            )}
                                            {(("Create" && step < 6) ||
                                              ("Create" && step < 5)) && (
                                                <button
                                                  className="btn btn-success"
                                                  onClick={() =>
                                                    setStep((p) => p + 1)
                                                  }
                                                  style={{
                                                    marginTop: "1rem",
                                                    backgroundColor: "#064420",
                                                    width: "20%",
                                                    position: "relative",
                                                    float: "right",
                                                  }}
                                                >
                                                  Next
                                                </button>
                                              )}
                                          </div>
                                        </div>
                                      </label>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            )}
                            {step === 4 && (
                              <div className="row mt-3">
                                <div className="col">
                                  <form>
                                    <div className="form">
                                      <label className="form-label select-label">
                                        <div className="">
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Land Holding</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>Land</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>
                                                Type of Land Holding
                                              </label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>XXXXXXXX</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Caste</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>XXXXXXX</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Religion</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>XXXXXXXX</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Monthly HH Income</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>XXXXXXX</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Monthly HH Expenses</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>XXXXXXX</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>Loan Purpose</label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>XXXXXXX</label>
                                            </div>
                                          </div>
                                          <div className="row m-2">
                                            <div className="col-lg-6">
                                              <label>
                                                Loan Tenure (Months)
                                              </label>
                                            </div>
                                            <div className="col-lg-6">
                                              <label>3 months</label>
                                            </div>
                                          </div>
                                          <div
                                            className="row m-2"
                                            style={{
                                              justifyContent: "space-between",
                                              padding: "0 10px",
                                            }}
                                          >
                                            {step > 0 && (
                                              <button
                                                className="btn btn-success"
                                                onClick={() =>
                                                  setStep((p) => p - 1)
                                                }
                                                style={{
                                                  marginTop: "1rem",
                                                  backgroundColor: "#064420",
                                                  width: "20%",
                                                }}
                                              >
                                                Back
                                              </button>
                                            )}
                                            {(("Create" && step < 6) ||
                                              ("Create" && step < 5)) && (
                                                <button
                                                  className="btn btn-success"
                                                  onClick={() =>
                                                    setStep((p) => p + 1)
                                                  }
                                                  style={{
                                                    marginTop: "1rem",
                                                    backgroundColor: "#064420",
                                                    width: "20%",
                                                    position: "relative",
                                                    float: "right",
                                                  }}
                                                >
                                                  Next
                                                </button>
                                              )}
                                            <Modal
                                              show={showConfirmBox}
                                              onHide={handleCloseConfirmBox}
                                            >
                                              <Modal.Body
                                                closeButton
                                                style={{
                                                  position: "absolute",
                                                  top: "10rem",
                                                  width: "60%",
                                                  height: "100px",
                                                  timer: "1500",
                                                  backgroundColor: "#e9ecef",
                                                  color: "#000",
                                                  textAlign: "center",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    dispalay: "flex",
                                                    alignItems: "center",
                                                  }}
                                                >
                                                  <CheckCircleTwoToneIcon />
                                                  <p className="text-center">
                                                    Your details are submitted!
                                                  </p>
                                                </div>
                                              </Modal.Body>
                                            </Modal>
                                          </div>
                                        </div>
                                      </label>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            )}
                            {step === 5 && (
                              <div className="row ">
                                <div className="col">
                                  <form>
                                    <div className="form">
                                      <div className="card p-2">
                                        <div className="row m-2">
                                          <div className="col-md-6">
                                            <label className="form-label">
                                              Samunnati Payment Proof
                                            </label>
                                          </div>
                                          <div className="col-md-6">
                                            <button
                                              className="py-0.5"
                                              style={{
                                                backgroundColor: "#064420",
                                                color: "#fff",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                border: "none",
                                                padding: "5px 10px",
                                                width: "100%",
                                                fontSize: ".75rem",
                                                lineHeight: "1.7rem",
                                              }}
                                              onClick={(e) => {
                                                e.preventDefault()
                                                handleShowImg()
                                              }}
                                            >
                                              View
                                            </button>
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-md-6">
                                            <label className="form-label">
                                              Interest Rate (%)
                                            </label>
                                          </div>
                                          <div className="col-md-6">
                                            <input
                                              type="number"
                                              className="form-control"
                                              value={currentFarmer.interest}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-md-6">
                                            <label className="form-label">
                                              Amount (in Rs.)
                                            </label>
                                          </div>
                                          <div className="col-md-6">
                                            <input
                                              type="number"
                                              className="form-control"
                                              value={currentFarmer.amount}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <div className="col-md-6">
                                            <label className="form-label">
                                              Tenure (in months)
                                            </label>
                                          </div>
                                          <div className="col-md-6">
                                            <input
                                              type="number"
                                              className="form-control"
                                              value={currentFarmer.tenure}
                                              disabled
                                            />
                                          </div>
                                        </div>
                                        <div className="row m-2">
                                          <button
                                            className="btn btn-success"
                                            onClick={() =>
                                              setStep((p) => p - 1)
                                            }
                                            style={{
                                              marginTop: "1rem",
                                              backgroundColor: "#064420",
                                              width: "20%",
                                            }}
                                          >
                                            Back
                                          </button>
                                        </div>
                                        <div>
                                          <Modal
                                            show={showApproveConfirm}
                                            onHide={handleCloseApproveConfirm}
                                            backdrop="static"
                                            keyboard={false}
                                          >
                                            <Modal.Header closeButton>
                                              <Modal.Title>
                                                Confirm Approve Loan Application
                                              </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                              <div className="row">
                                                <div className="col-lg-12">
                                                  <label>
                                                    Are you sure you want to
                                                    approve the loan
                                                    application?
                                                  </label>
                                                </div>
                                                <div
                                                  className="row m-2"
                                                  style={{
                                                    justifyContent:
                                                      "space-between",
                                                    padding: "0 10px",
                                                  }}
                                                >
                                                  <button
                                                    className="btn btn-success"
                                                    onClick={
                                                      handleCloseApproveConfirm
                                                    }
                                                    style={{
                                                      marginTop: "1rem",
                                                      backgroundColor:
                                                        "#064420",
                                                      width: "20%",
                                                    }}
                                                  >
                                                    No
                                                  </button>
                                                  <button
                                                    className="btn btn-success"
                                                    onClick={(e) => {
                                                      e.preventDefault()
                                                      handleCloseApproveConfirm()
                                                    }}
                                                    style={{
                                                      marginTop: "1rem",
                                                      backgroundColor:
                                                        "#064420",
                                                      width: "20%",
                                                      position: "relative",
                                                      float: "right",
                                                    }}
                                                  >
                                                    Yes
                                                  </button>
                                                </div>
                                              </div>
                                            </Modal.Body>
                                          </Modal>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            )}
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                    <div>
                      <Modal show={showImg} onHide={handleCloseImg}>
                        <Modal.Header closeButton>Img</Modal.Header>
                        <Modal.Body>
                          <img
                            src={logo}
                            alt="Payment Image"
                            style={{ width: "100%", height: "100%" }}
                          />
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                </div>
                <div>
                  <Modal
                    size="xl"
                    show={showAggRepayment}
                    onHide={handleCloseAggRepayment}
                  >
                    <Modal.Header closeButton>Repayment Structure</Modal.Header>
                    <Modal.Body>
                      <div className="repayment_title">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="row">
                              <div className="col-6">
                                <strong>Loan ID : </strong>
                              </div>
                              <div className="col-6">
                                <span>12345</span>
                              </div>
                              <div className="col-6">
                                <strong>Farmer Name : </strong>
                              </div>
                              <div className="col-6">
                                <span>abcd</span>
                              </div>
                              <div className="col-6">
                                <strong>FPO Name : </strong>
                              </div>
                              <div className="col-6">
                                <span>abcd</span>
                              </div>
                              <div className="col-6">
                                <strong>Loan Amount : </strong>
                              </div>
                              <div className="col-6">
                                <span>400</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="row">
                              <div className="col-6">
                                <strong>Loan Period in Months : </strong>
                              </div>
                              <div className="col-6">
                                <span>1</span>
                              </div>
                              <div className="col-6">
                                <strong>No of Repayment : </strong>
                              </div>
                              <div className="col-6">
                                <span>1</span>
                              </div>
                              <div className="col-6">
                                <strong>Annual Interest Rate : </strong>
                              </div>
                              <div className="col-6">
                                <span>14%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5">
                        <table style={{ border: "1px solid #eee" }}>
                          <thead
                            style={{
                              backgroundColor: "#eee",
                            }}
                          >
                            <tr>
                              <th>S.No.</th>
                              <th>Scheduled Repayment Date</th>
                              <th>Scheduled EMI Amount</th>
                              <th>Actual Repayment Date</th>
                              <th>Actual Repayment Amount</th>
                              <th>Balance Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>12-10-2021</td>
                              <td>100000</td>
                              <td>21-10-2021</td>
                              <td>4000000</td>
                              <td>3000000</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>12-10-2021</td>
                              <td>100000</td>
                              <td>21-10-2021</td>
                              <td>4000000</td>
                              <td>3000000</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>12-10-2021</td>
                              <td>100000</td>
                              <td>21-10-2021</td>
                              <td>4000000</td>
                              <td>3000000</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>12-10-2021</td>
                              <td>100000</td>
                              <td>21-10-2021</td>
                              <td>4000000</td>
                              <td>3000000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
                <div className={`panel ${checkActive(2, "active")}`}>
                  <div className="card_table1">
                    <div className=" table-responsive">
                      <table>
                        <thead
                          style={{
                            color: "#064420",
                            fontSize: "17px",
                            verticalAlign: "top",
                            fontWeight: "bold",
                            borderBottom: "1px solid #c7ccd1",
                          }}
                        >
                          <tr>
                            <td>Farmer Id</td>
                            <td>Farmer Name</td>
                            <th>Loan Id</th>
                            <th>Loan Application Date</th>
                            <th>Loan Amount</th>
                            <th>Loan Date</th>
                            <th>Outstanding Amount</th>
                            <th>Next Payment Amount</th>
                            <th>Next Payment Date</th>
                          </tr>
                        </thead>
                        <tbody
                          style={{
                            color: "#000",
                            fontSize: "15px",
                            fontWeight: "500",
                            // textAlign: "center",
                          }}
                        >
                          <tr>
                            <td>Farmer Id</td>
                            <td>Farmer Name</td>
                            <td>2022-800-07</td>
                            <td>01-05-2022</td>
                            <td>₹ 98765</td>
                            <td> 13-07-2022</td>
                            <td>₹ 3778</td>
                            <td>₹ 761434</td>
                            <td> 24-09-2022</td>
                          </tr>
                          <tr>
                            <td>Farmer Id</td>
                            <td>Farmer Name</td>
                            <td>2022-800-07</td>
                            <td>01-05-2022</td>
                            <td>₹ 98765</td>
                            <td> 13-07-2022</td>
                            <td>₹ 3778</td>
                            <td>₹ 761434</td>
                            <td> 24-09-2022</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </main>
      </div>
    </div>
  )
}

export default FarmerLoan
