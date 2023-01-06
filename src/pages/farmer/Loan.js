import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import logo from "../../assets/img/logo.png";
import TabNavItem from "../../pages/farmer/Tabs/TabNavItem";
import TabContent from "../../pages/farmer/Tabs/TabContent";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";

const Loan = () => {
  const [showLoanApp, setShowLoanApp] = useState(false);
  const [showRepaymentLoan, setShowRepaymentLoan] = useState(false);
  const [showInProcessLoanApp, setShowInProcessLoanApp] = useState(false);
  const [showAadharCardImg, setShowAadharCardImg] = useState(false);
  const [showPanCardImg, setShowPanCardImg] = useState(false);
  const [showSamunnatiPaymentProof, setShowSamunnatiPaymentProof] = useState(false);
  const [showGrantedLoanApplication, setShowGrantedLoanApplication] = useState(false);

  const handleCloseLoanApp = () => {
    setShowLoanApp(false);
    setCoApplicantAge("");
  };
  const handleShowLoanApp = () => {
    randomlyGenerateLoanId();
    setShowLoanApp(true);
  };
  const handleShowRepaymentLoan = () => {
    setShowRepaymentLoan(true);
  };
  
  const handleCloseGrantedLoanApplication = () => setShowGrantedLoanApplication(false);
  const handleShowGrantedLoanApplication = () => setShowGrantedLoanApplication(true);

  const handleCloseInProcessLoanApp = () => setShowInProcessLoanApp(false);
  const handleShowInProcessLoanApp = () => setShowInProcessLoanApp(true);

  const handleShowAadharCardImg = () => setShowAadharCardImg(true);
  const handleShowPanCardImg = () => setShowPanCardImg(true);
  const handleCloseAadharCardImg = () => setShowAadharCardImg(false);
  const handleClosePanCardImg = () => setShowPanCardImg(false);
  const handleShowSamunnatiPaymentProof = () => setShowSamunnatiPaymentProof(true);
  const handleCloseSamunnatiPaymentProof = () => setShowSamunnatiPaymentProof(false);

  const [activeTab, setActiveTab] = useState("tab1");
  const [step, setStep] = useState(0);

  const [showConfirmBox, setShowConfirmBox] = useState(false);
  const handleCloseConfirmBox = () => {
    setShowConfirmBox(false);
  };
  const handleCloseRepaymentLoan = () => setShowRepaymentLoan(false);

  const confirmBid = (e) => {
    e.preventDefault();
    setShowConfirmBox(true);
  };

  const [coApplicantAge, setCoApplicantAge] = useState("");

  const handleCoApplicantDob = (e) => {
    const dob = new Date(e.target.value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    setCoApplicantAge(age);
  };

  const [loanId, setLoanId] = useState("");

  const randomlyGenerateLoanId = () => {
    const randomId = "L" + Math.floor(Math.random() * 1000000);
    setLoanId(randomId);
  };

  const farmerDetails = {
    name: "Farmer",
    gender: "Male",
    mobile: "1234567890",
    dob: "2021-10-10",
    age: "30",
    idProofType: "Aadhar",
    idProofNo: "1234567890",
    addressProofType: "Aadhar",
    addressProofNo: "1234567890",
    fpoName: "FPO 1",
    bankName: "B 1",
    accountNo: "1234567890",
    ifsc: "1234567890",
    branchName: "Br 1",
    fatherName: "Farmer Father",
    motherName: "Farmer Mother",
    doorNo: "D 1",
    streetName: "S 1",
    village: "V 1",
    taluk: "T 1",
    district: "D 1",
    state: "S 1",
    pincode: "123456",
    occupation: "Farmer",
    education: "E 1",
    natureOfPlace: "N 1",
    residence: "R 1",
    caste: "C 1",
    religion: "Rg 1",
  };

  return (
    <div className="farmer">
      <Sidebar />
      <div className="farmerContainer">
        <Navbar />
        <div className="itemContainer">
          <div className="list_title">
            <div className="container-fluid">
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3
                  className="text-dark mb-0"
                  style={{
                    fontSize: "22px",
                    fontWeight: "800",
                    color: "rgb(33, 37, 41)",
                  }}
                >
                  Apply for loan
                </h3>
              </div>
              <div
                className="list__btn"
                style={{
                  position: "relative",
                  float: "right",
                  right: "18px",
                  top: "10px",
                }}
              >
                <Button
                  className="loan_button"
                  style={{
                    backgroundColor: "#064420",
                    border: "none",
                    width: "130px",
                  }}
                  onClick={handleShowLoanApp}
                >
                  Apply Loan
                </Button>
              </div>
              <div>
                <Modal
                  size="lg"
                  show={showLoanApp}
                  onHide={handleCloseLoanApp}
                  scrollable={true}
                >
                  <Modal.Header closeButton>Farmer Loan </Modal.Header>
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
                                      <label>FPO Name</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.fpoName}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Bank Name</label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.bankName}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Account Number</label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.accountNo}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Bank IFSC</label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.ifsc}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Branch Name</label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.branchName}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Applicant Name</label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.name}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Applicant Gender</label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.gender}
                                        disabled
                                      />
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
                                    <label>Applicant Mobile Number</label>
                                  </div>
                                  <div className="col-lg-6 text-center">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={farmerDetails.mobile}
                                      disabled
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>Applicant DOB</label>
                                  </div>
                                  <div className="col-lg-6">
                                    <input
                                      type="date"
                                      className="form-control"
                                      value={farmerDetails.dob}
                                      disabled
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>Applicant Age</label>
                                  </div>
                                  <div className="col-lg-6 text-center">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={farmerDetails.age}
                                      disabled
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>ID Proof Type</label>
                                  </div>
                                  <div className="col-lg-6 text-center">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={farmerDetails.idProofType}
                                      disabled
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>Applicant Proof ID Number</label>
                                  </div>
                                  <div className="col-lg-6 text-center">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={farmerDetails.idProofNo}
                                      disabled
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>Address Proof Type</label>
                                  </div>
                                  <div className="col-lg-6 text-center">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={farmerDetails.addressProofType}
                                      disabled
                                    />
                                  </div>
                                </div>
                                <div className="row m-2">
                                  <div className="col-lg-6">
                                    <label>
                                      Applicant Address Proof Number
                                    </label>
                                  </div>
                                  <div className="col-lg-6 text-center">
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={farmerDetails.addressProofNo}
                                      disabled
                                    />
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
                                      <label>Applicant Father Name</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.fatherName}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Applicant Mother Name</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.motherName}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Door Number</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.doorNo}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Street Name</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.streetName}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Village</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.village}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Taluk</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.taluk}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>District</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.district}
                                        disabled
                                      />
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
                                      <label>State</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.state}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Pin Code</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.pincode}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Occupation</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.occupation}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Education</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.education}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Nature of Place</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.natureOfPlace}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Residence</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.residence}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Caste</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.caste}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Religion</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={farmerDetails.religion}
                                        disabled
                                      />
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
                                      <label>Co-Applicant Name</label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Co-Applicant Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Co-Applicant Gender</label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <select className="form-select">
                                        <option value="0">Select</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Co-Applicant DOB</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="date"
                                        className="form-control"
                                        onChange={handleCoApplicantDob}
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Co-Applicant Age</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={coApplicantAge}
                                        disabled
                                        placeholder="Co-Applicant Age"
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Relationship with Applicant</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Relationship with Applicant"
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Land Holding</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Land Holding"
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Type of Land Holding</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Type of Land Holding"
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Monthly HH Income</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Monthly HH Income"
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Monthly HH Expenses</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Monthly HH Expenses"
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Loan Requested Amount</label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Loan Requested Amount"
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Loan Purpose</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Loan Purpose"
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Loan Tenure (in months)</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Loan Tenure"
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Interest Rate</label>
                                    </div>
                                    <div className="col-lg-6 text-center">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={12}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                  <div className="row m-2">
                                    <div className="col-lg-6">
                                      <label>Loan ID</label>
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={loanId}
                                        disabled
                                      />
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
                                        onClick={(e) => {
                                          confirmBid(e);
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
                  </Modal.Body>
                </Modal>
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
                    <div className="row">
                      <div className="col">
                        <div className="card shadow">
                          <div className=" table-responsive">
                            <table>
                              <thead
                                style={{
                                  // color: "green",
                                  fontSize: "17px",
                                  verticalAlign: "top",
                                  // textAlign: "center",
                                }}
                              >
                                <tr>
                                  <th>Loan Id</th>
                                  <th>Loan application date</th>
                                  <th>Loan amount</th>
                                  <th>Interest rate</th>
                                  <th>Loan date</th>
                                  <th>Outstanding amount</th>
                                  <th>Next payment amount</th>
                                  <th>Next payment date</th>
                                  <th>Loan Application</th>
                                  <th>Repayment structure</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody
                                style={{
                                  color: "#000",
                                  fontSize: "15px",
                                  fontWeight: "500",
                                }}
                              >
                                <tr>
                                  <td>2022-800-07</td>
                                  <td>01-05-2022</td>
                                  <td>₹ 98765</td>
                                  <td>14%</td>
                                  <td>13-07-2022</td>
                                  <td>₹ 3778</td>
                                  <td>₹ 761434</td>
                                  <td>24-09-2022</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowGrantedLoanApplication}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={() => {
                                        handleShowRepaymentLoan();
                                      }}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="py-0.5"
                                      style={{
                                        backgroundColor: "yellow",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "5px 10px",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                    >
                                      In progress
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-392-07</td>
                                  <td>02-05-2022</td>
                                  <td>₹ 79765</td>
                                  <td>14%</td>
                                  <td>13-07-2022</td>
                                  <td>₹ 9479</td>
                                  <td>₹ 761434</td>
                                  <td>24-09-2022</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowGrantedLoanApplication}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={() => {
                                        handleShowRepaymentLoan();
                                      }}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="py-0.5"
                                      style={{
                                        backgroundColor: "#1ad77f",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1.4rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                    >
                                      Repaid
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-957-07</td>
                                  <td>03-05-2022</td>
                                  <td>₹ 345679876</td>
                                  <td>14%</td>
                                  <td>13-07-2022</td>
                                  <td>₹ 76143</td>
                                  <td>₹ 761434</td>
                                  <td>24-09-2022</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowGrantedLoanApplication}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={() => {
                                        handleShowRepaymentLoan();
                                      }}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="py-0.5"
                                      style={{
                                        backgroundColor: "yellow",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "5px 10px",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                    >
                                      In progress
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-957-07</td>
                                  <td>03-05-2022</td>
                                  <td>₹ 345679876</td>
                                  <td>14%</td>
                                  <td>13-07-2022</td>
                                  <td>₹ 76143</td>
                                  <td>₹ 761434</td>
                                  <td>24-09-2022</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowGrantedLoanApplication}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={() => {
                                        handleShowRepaymentLoan();
                                      }}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="py-0.5"
                                      style={{
                                        backgroundColor: "yellow",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "5px 10px",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                    >
                                      In progress
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-957-07</td>
                                  <td>03-05-2022</td>
                                  <td>₹ 345679876</td>
                                  <td>14%</td>
                                  <td>13-07-2022</td>
                                  <td>₹ 76143</td>
                                  <td>₹ 761434</td>
                                  <td>24-09-2022</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowGrantedLoanApplication}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={() => {
                                        handleShowRepaymentLoan();
                                      }}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="py-0.5"
                                      style={{
                                        backgroundColor: "yellow",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "5px 10px",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                    >
                                      In progress
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-957-07</td>
                                  <td>03-05-2022</td>
                                  <td>₹ 345679876</td>
                                  <td>14% </td>
                                  <td>13-07-2022</td>
                                  <td>₹ 76143</td>
                                  <td>₹ 761434 </td>
                                  <td>24-09-2022</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowGrantedLoanApplication}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={() => {
                                        handleShowRepaymentLoan();
                                      }}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="py-0.5"
                                      style={{
                                        backgroundColor: "yellow",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "5px 10px",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                    >
                                      In progress
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-957-07</td>
                                  <td>03-05-2022</td>
                                  <td>₹ 345679876</td>
                                  <td>14%</td>
                                  <td>13-07-2022</td>
                                  <td>₹ 76143</td>
                                  <td>₹ 761434</td>
                                  <td>24-09-2022</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowGrantedLoanApplication}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={() => {
                                        handleShowRepaymentLoan();
                                      }}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="py-0.5"
                                      style={{
                                        backgroundColor: "yellow",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "5px 10px",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                    >
                                      In progress
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-957-07</td>
                                  <td>03-05-2022</td>
                                  <td>₹ 345679876</td>
                                  <td>14%</td>
                                  <td>13-07-2022</td>
                                  <td>₹ 76143</td>
                                  <td>₹ 761434</td>
                                  <td>24-09-2022</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowGrantedLoanApplication}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={() => {
                                        handleShowRepaymentLoan();
                                      }}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="py-0.5"
                                      style={{
                                        backgroundColor: "yellow",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "5px 10px",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                    >
                                      In progress
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-957-07</td>
                                  <td>03-05-2022</td>
                                  <td>₹ 345679876</td>
                                  <td>14%</td>
                                  <td>13-07-2022</td>
                                  <td>₹ 76143</td>
                                  <td>₹ 761434</td>
                                  <td>24-09-2022</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowGrantedLoanApplication}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={() => {
                                        handleShowRepaymentLoan();
                                      }}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="py-0.5"
                                      style={{
                                        backgroundColor: "yellow",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "5px 10px",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                    >
                                      In progress
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-957-07</td>
                                  <td>03-05-2022</td>
                                  <td>₹ 345679876</td>
                                  <td>14%</td>
                                  <td>13-07-2022</td>
                                  <td>₹ 76143</td>
                                  <td>₹ 761434</td>
                                  <td>24-09-2022</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowGrantedLoanApplication}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={() => {
                                        handleShowRepaymentLoan();
                                      }}
                                    >
                                      view
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="py-0.5"
                                      style={{
                                        backgroundColor: "yellow",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "5px 10px",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                    >
                                      In progress
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div>
                          <Modal show={showGrantedLoanApplication} onHide={handleCloseGrantedLoanApplication}>
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
                                                  backgroundColor:
                                                    "#064420",
                                                  color: "#fff",
                                                  alignItems: "center",
                                                  borderRadius: "5px",
                                                  border: "none",
                                                  padding:
                                                    "0.25rem 1rem",
                                                  width: "100%",
                                                  fontSize: ".75rem",
                                                  lineHeight: "2rem",
                                                }}
                                                onClick={(e) => {
                                                  handleShowAadharCardImg();
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
                                                  backgroundColor:
                                                    "#064420",
                                                  color: "#fff",
                                                  alignItems: "center",
                                                  borderRadius: "5px",
                                                  border: "none",
                                                  padding:
                                                    "0.25rem 1rem",
                                                  width: "100%",
                                                  fontSize: ".75rem",
                                                  lineHeight: "2rem",
                                                }}
                                                onClick={(e) => {
                                                  handleShowPanCardImg();
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
                                        <img src={logo} alt="Aadhar Card" style={{ width: "100%", height: "100%"}} />
                                      </Modal.Body>
                                    </Modal>
                                    <Modal
                                      show={showPanCardImg}
                                      onHide={handleClosePanCardImg}
                                    >
                                      <Modal.Header closeButton>PAN Card</Modal.Header>
                                      <Modal.Body>
                                        <img src={logo} alt="PAN Card" style={{ width: "100%", height: "100%"}} />
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
                              {
                              step === 5 && (
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
                                                  e.preventDefault();
                                                  handleShowSamunnatiPaymentProof();
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
                                                value={12}
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
                                                value={100000}
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
                                                value={12}
                                                disabled
                                              />
                                            </div>
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
                                              show={showSamunnatiPaymentProof}
                                              onHide={handleCloseSamunnatiPaymentProof}
                                            >
                                              <Modal.Header closeButton>Samunnati Payment Proof</Modal.Header>
                                              <Modal.Body>
                                                <img src={logo} alt="Samunnati Payment Proof" style={{ width: "100%", height: "100%"}} />
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
                          </Modal>
                        </div>
                        <div>
                          <Modal
                            size="xl"
                            show={showRepaymentLoan}
                            onHide={handleCloseRepaymentLoan}
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
                                        <strong>
                                          Loan Period in Months :{" "}
                                        </strong>
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
                      </div>
                    </div>
                  </TabContent>
                  <TabContent id="tab2" activeTab={activeTab}>
                    <div className="row">
                      <div className="col">
                        <div className="card shadow">
                          <div className="table-responsive">
                            <table>
                              <thead
                                style={{
                                  // color: "green",
                                  fontSize: "17px",
                                  verticalAlign: "top",
                                  // textAlign: "center",
                                }}
                              >
                                <tr>
                                  <th>Loan Id</th>
                                  <th>Loan application date</th>
                                  <th>Proposed Loan amount</th>
                                  <th>Reason for rejection</th>
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
                                  <td>2022-441-07</td>
                                  <td>04-05-2022</td>
                                  <td>₹ 98765</td>
                                  <td>Document is not correct</td>
                                </tr>
                                <tr>
                                  <td>2022-441-07</td>
                                  <td>04-05-2022</td>
                                  <td>₹ 765456</td>
                                  <td>Document is not correct</td>
                                </tr>
                                <tr>
                                  <td>2022-441-07</td>
                                  <td>04-05-2022</td>
                                  <td>₹ 98765</td>
                                  <td>Document is not correct</td>
                                </tr>
                                <tr>
                                  <td>2022-441-07</td>
                                  <td>04-05-2022</td>
                                  <td>₹ 98765</td>
                                  <td>Document is not correct</td>
                                </tr>
                                <tr>
                                  <td>2022-441-07</td>
                                  <td>04-05-2022</td>
                                  <td>₹ 98765</td>
                                  <td>Document is not correct</td>
                                </tr>
                                <tr>
                                  <td>2022-441-07</td>
                                  <td>04-05-2022</td>
                                  <td>₹ 98765</td>
                                  <td>Document is not correct</td>
                                </tr>
                                <tr>
                                  <td>2022-441-07</td>
                                  <td>04-05-2022</td>
                                  <td>₹ 98765</td>
                                  <td>Document is not correct</td>
                                </tr>
                                <tr>
                                  <td>2022-441-07</td>
                                  <td>04-05-2022</td>
                                  <td>₹ 98765</td>
                                  <td>Document is not correct</td>
                                </tr>
                                <tr>
                                  <td>2022-441-07</td>
                                  <td>04-05-2022</td>
                                  <td>₹ 98765</td>
                                  <td>Document is not correct</td>
                                </tr>
                                <tr>
                                  <td>2022-441-07</td>
                                  <td>04-05-2022</td>
                                  <td>₹ 98765</td>
                                  <td>Document is not correct</td>
                                </tr>
                                <tr>
                                  <td>2022-441-07</td>
                                  <td>04-05-2022</td>
                                  <td>₹ 98765</td>
                                  <td>Document is not correct</td>
                                </tr>
                                <tr>
                                  <td>2022-441-07</td>
                                  <td>04-05-2022</td>
                                  <td>₹ 98765</td>
                                  <td>Document is not correct</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabContent>
                  <TabContent id="tab3" activeTab={activeTab}>
                    <div className="row">
                      <div className="col">
                        <div className="card shadow">
                          <div className="table-responsive">
                            <table>
                              <thead
                                style={{
                                  // color: "green",
                                  fontSize: "17px",
                                  verticalAlign: "top",
                                  // textAlign: "center",
                                }}
                              >
                                <tr>
                                  <th>Loan Id</th>
                                  <th>Loan application date</th>
                                  <th>Proposed Loan amount</th>
                                  <th>Loan application</th>
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
                                  <td>2022-64-07</td>
                                  <td>02-05-2022</td>
                                  <td>₹ 7345</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowInProcessLoanApp}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-64-07</td>
                                  <td>02-05-2022</td>
                                  <td>₹ 7345</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowInProcessLoanApp}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-64-07</td>
                                  <td>02-05-2022</td>
                                  <td>₹ 7345</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowInProcessLoanApp}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-64-07</td>
                                  <td>02-05-2022</td>
                                  <td>₹ 7345</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowInProcessLoanApp}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-64-07</td>
                                  <td>02-05-2022</td>
                                  <td>₹ 7345</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowInProcessLoanApp}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-64-07</td>
                                  <td>02-05-2022</td>
                                  <td>₹ 7345</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowInProcessLoanApp}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-64-07</td>
                                  <td>02-05-2022</td>
                                  <td>₹ 7345</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowInProcessLoanApp}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-64-07</td>
                                  <td>02-05-2022</td>
                                  <td>₹ 7345</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowInProcessLoanApp}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-64-07</td>
                                  <td>02-05-2022</td>
                                  <td>₹ 7345</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowInProcessLoanApp}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-64-07</td>
                                  <td>02-05-2022</td>
                                  <td>₹ 7345</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowInProcessLoanApp}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-64-07</td>
                                  <td>02-05-2022</td>
                                  <td>₹ 7345</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowInProcessLoanApp}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-64-07</td>
                                  <td>02-05-2022</td>
                                  <td>₹ 7345</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowInProcessLoanApp}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2022-64-07</td>
                                  <td>02-05-2022</td>
                                  <td>₹ 7345</td>
                                  <td>
                                    <button
                                      style={{
                                        backgroundColor: "#66FF00",
                                        alignItems: "center",
                                        borderRadius: "5px",
                                        border: "none",
                                        padding: "0.25rem 1rem",
                                        width: "fit-content",
                                        fontSize: ".75rem",
                                        lineHeight: "1rem",
                                      }}
                                      onClick={handleShowInProcessLoanApp}
                                    >
                                      view
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Modal show={showInProcessLoanApp} onHide={handleCloseInProcessLoanApp}>
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
                                                backgroundColor:
                                                  "#064420",
                                                color: "#fff",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                border: "none",
                                                padding:
                                                  "0.25rem 1rem",
                                                width: "100%",
                                                fontSize: ".75rem",
                                                lineHeight: "2rem",
                                              }}
                                              onClick={(e) => {
                                                handleShowAadharCardImg();
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
                                                backgroundColor:
                                                  "#064420",
                                                color: "#fff",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                border: "none",
                                                padding:
                                                  "0.25rem 1rem",
                                                width: "100%",
                                                fontSize: ".75rem",
                                                lineHeight: "2rem",
                                              }}
                                              onClick={(e) => {
                                                handleShowPanCardImg();
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
                                      <img src={logo} alt="Aadhar Card" style={{ width: "100%", height: "100%"}} />
                                    </Modal.Body>
                                  </Modal>
                                  <Modal
                                    show={showPanCardImg}
                                    onHide={handleClosePanCardImg}
                                  >
                                    <Modal.Header closeButton>PAN Card</Modal.Header>
                                    <Modal.Body>
                                      <img src={logo} alt="PAN Card" style={{ width: "100%", height: "100%"}} />
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
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan;
