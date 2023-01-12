import React, { useState } from "react"
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone"
import { NavLink } from "react-router-dom"
import Modal from "react-bootstrap/Modal"

import logo from "../../../assets/img/logo.png"
import "../style.css"

const approvedMembershipList = [
  {
    loanId: 1,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
  {
    loanId: 3,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
  {
    loanId: 4,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
  {
    loanId: 8,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
  {
    loanId: 9,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
]

const rejectedMembershipList = [
  {
    loanId: 5,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
  {
    loanId: 7,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
  {
    loanI: 10,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
]

const pendingMembershipList = [
  {
    loanId: 2,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
  {
    loanId: 6,
    farmerName: "Farmer 1",
    village: "Hyderabad",
    contact: "1234567890",
    aadhaar: "12345XXXXX",
  },
]

const Tab = () => {
  const [showLoanApplicationDetails, setShowLoanApplicationDetails] = useState(false)
  const [showAadharCardImg, setShowAadharCardImg] = useState(false)
  const [showPanCardImg, setShowPanCardImg] = useState(false)
  const [showConfirmBox, setShowConfirmBox] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)
  const [step, setStep] = useState(0)

  const checkActive = (index, className) =>
    activeIndex === index ? className : ""

  const handleClick = (index) => setActiveIndex(index)
  const handleShowLoanApplicationDetails = () => setShowLoanApplicationDetails(true)
  const handleCloseLoanApplicationDetails = () => setShowLoanApplicationDetails(false)
  const handleCloseConfirmBox = () => setShowConfirmBox(false)
  const handleShowAadharCardImg = () => setShowAadharCardImg(true)
  const handleShowPanCardImg = () => setShowPanCardImg(true)
  const handleCloseAadharCardImg = () => setShowAadharCardImg(false)
  const handleClosePanCardImg = () => setShowPanCardImg(false)

  return (
    <>
      <div className="tabs">
        <button
          className={`tab ${checkActive(1, "active")}`}
          onClick={() => handleClick(1)}
        >
          Accepted Memberships
        </button>
        <button
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}
        >
          Rejected Memberships
        </button>
        <button
          className={`tab ${checkActive(3, "active")}`}
          onClick={() => handleClick(3)}
        >
          Pending Applications
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
                    fontWeight: "600",
                    borderBottom: "1px solid #c7ccd1",
                  }}
                >
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Village</th>
                    <th>Phone Number</th>
                    <th>Aadhaar Number</th>
                    <th>View Application</th>
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
                  {approvedMembershipList.map((app, i) => (
                    <tr>
                      <td>farmer-{i}</td>
                      <td>
                        <NavLink
                          to="/fpo/farmer-information"
                          className="info_btn"
                        >
                          {app.farmerName}
                        </NavLink>
                      </td>
                      <td>{app.village}</td>
                      <td>{app.contact}</td>
                      <td>{app.aadhaar}</td>
                      <td>
                        <button
                          className="py-0.5 table_btn"
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
                            fontWeight: "500",
                          }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
                    <th>Name</th>
                    <th>Village</th>
                    <th>Phone Number</th>
                    <th>Aadhaar Number</th>
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
                  {rejectedMembershipList.map((app) => (
                    <tr>
                      <td>{app.farmerName}</td>
                      <td>{app.village}</td>
                      <td>{app.contact}</td>
                      <td>{app.aadhaar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={`panel ${checkActive(3, "active")}`}>
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
                    <th>Name</th>
                    <th>Village</th>
                    <th>Phone Number</th>
                    <th>Aadhaar Number</th>
                    <th>Farmer Application Details</th>
                    <th>Membership Status</th>
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
                  {pendingMembershipList.map((app) => (
                    <tr>
                      <td>{app.farmerName}</td>
                      <td>{app.village}</td>
                      <td>{app.contact}</td>
                      <td>{app.aadhaar}</td>
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
                            width: "20%",
                            fontSize: ".75rem",
                            lineHeight: "1rem",
                          }}
                          onClick={() => {
                            handleShowLoanApplicationDetails()
                          }}
                        >
                          View
                        </button>
                      </td>
                      <td>
                        <button className="dropdown_btn text-center">
                          <select className="form-select" required="">
                            <option value="select">Select</option>
                            <option value="">Approve</option>
                            <option value="churchu">Reject</option>
                          </select>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <Modal show={showLoanApplicationDetails} onHide={handleCloseLoanApplicationDetails}>
              <Modal.Header closeButton>Loan Application</Modal.Header>
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
                                  <label>Loan Requested Amount</label>
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
                                  <label>Applicant Mobile Number</label>
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
                                  onClick={() => setStep((p) => p - 1)}
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
                                    onClick={() => setStep((p) => p + 1)}
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
                        <Modal.Header closeButton>Aadhar Card</Modal.Header>
                        <Modal.Body>
                          <img
                            src={logo}
                            alt="Aadhar Card"
                            style={{ width: "100%", height: "100%" }}
                          />
                        </Modal.Body>
                      </Modal>
                      <Modal show={showPanCardImg} onHide={handleClosePanCardImg}>
                        <Modal.Header closeButton>PAN Card</Modal.Header>
                        <Modal.Body>
                          <img
                            src={logo}
                            alt="PAN Card"
                            style={{ width: "100%", height: "100%" }}
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
                                  <label>Relationship with Applicant</label>
                                </div>
                                <div className="col-lg-6">
                                  <label>Son</label>
                                </div>
                              </div>
                              <div className="row m-2">
                                <div className="col-lg-6">
                                  <label>Applicant Father Name</label>
                                </div>
                                <div className="col-lg-6">
                                  <label>Father Name</label>
                                </div>
                              </div>
                              <div className="row m-2">
                                <div className="col-lg-6">
                                  <label>Applicant Mother Name</label>
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
                                    onClick={() => setStep((p) => p - 1)}
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
                                      onClick={() => setStep((p) => p + 1)}
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
                                    onClick={() => setStep((p) => p - 1)}
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
                                      onClick={() => setStep((p) => p + 1)}
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
                                  <label>Type of Land Holding</label>
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
                                  <label>Loan Tenure (Months)</label>
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
                                    onClick={() => setStep((p) => p - 1)}
                                    style={{
                                      marginTop: "1rem",
                                      backgroundColor: "#064420",
                                      width: "20%",
                                    }}
                                  >
                                    Back
                                  </button>
                                )}
                                {/* {(("Create" && step < 6) ||
                                ("Create" && step < 5)) && (
                                <button
                                  className="btn btn-success"
                                  onClick={(e) => {
                                    confirmBid(e)
                                  }}
                                  style={{
                                    marginTop: "1rem",
                                    backgroundColor: "#064420",
                                    width: "20%",
                                    position: "relative",
                                    float: "right",
                                  }}
                                >
                                  Submit
                                </button>
                              )} */}
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
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tab
