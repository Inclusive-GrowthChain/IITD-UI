import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import logo from "../../../assets/img/logo.png";

function FpoLoanTab() {
  const [toggleState, setToggleState] = useState(1);
  const [toggleChange, setToggleChange] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const toggleTab1 = (index) => {
    setToggleChange(index);
  };

  const [showRepaymentAmount, setShowRepaymentAmount] = useState(false);

  const handleShowRepaymentAmount = () => {
    setShowRepaymentAmount(true);
  };

  const handleCloseRepaymentAmount = () => setShowRepaymentAmount(false);

  const [showLoanApplication, setShowLoanApplication] = useState(false);
  const handleShowLoanApplication = () => {
    setShowLoanApplication(true);
  };
  const handleCloseLoanApplication = () => setShowLoanApplication(false);

  const [step, setStep] = useState(0);
  const [showConfirmBox, setShowConfirmBox] = useState(false);
  const handleCloseConfirmBox = () => {
    setShowConfirmBox(false);
  };

  // const confirmBid = (e) => {
  //   e.preventDefault();
  //   setShowConfirmBox(true);
  // };

  const [showApprovedLoan, setShowApprovedLoan] = useState(false);
  const [showRejectedLoan, setShowRejectedLoan] = useState(false);
  const [showConfirmLoanStatus, setShowConfirmLoanStatus] = useState(false);

  const [showAadharCardImg, setShowAadharCardImg] = useState(false);
  const [showPanCardImg, setShowPanCardImg] = useState(false);

  const handleShowAadharCardImg = () => setShowAadharCardImg(true);
  const handleShowPanCardImg = () => setShowPanCardImg(true);
  const handleCloseAadharCardImg = () => setShowAadharCardImg(false);
  const handleClosePanCardImg = () => setShowPanCardImg(false);

  const handleShowConfirmLoanStatus = () => {
    setShowConfirmLoanStatus(true);
  };

  const handleCloseApprovedLoan = () => setShowApprovedLoan(false);
  const handleCloseRejectedLoan = () => setShowRejectedLoan(false);
  const handleCloseConfirmLoanStatus = () => setShowConfirmLoanStatus(false);

  const changeLoanStatus = (e) => {
    e.preventDefault();
    if (e.target.value === "Approved") {
      setShowApprovedLoan(true);
    } else if (e.target.value === "Rejected") {
      setShowRejectedLoan(true);
    }
  };

  const confirmLoan = (e) => {
    e.preventDefault();
    setShowApprovedLoan(true);
    setShowConfirmLoanStatus(true);
  };

  // const confirmStatus = (e) => {
  //   e.preventDefault();
  //   setShowConfirmLoanStatus(false);
  //   setShowApprovedLoan(false);
  // };

  return (
    <div className="loan_fpo">
      <div className="card_wrapper">
        <div className="card_content">
          <div className="bloc-tab">
            <button
              className={toggleState === 1 ? "tabloan active-tab" : "tabloan"}
              onClick={() => toggleTab(1)}
              style={{ width: "14%" }}
            >
              Approved Application
            </button>
            <button
              className={toggleState === 2 ? "tabloan active-tab" : "tabloan"}
              onClick={() => toggleTab(2)}
              style={{ width: "15%" }}
            >
              Applications History
            </button>
            <button
              className={toggleState === 3 ? "tabloan active-tab" : "tabloan"}
              onClick={() => toggleTab(3)}
              style={{ width: "15%" }}
            >
              Applications in Process
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
                position: "absolute",
                right: "100px",
              }}
              onClick={() => {
                handleShowRepaymentAmount();
              }}
            >
              Aggregate Repayment
            </button>
          </div>

          <div className="content_tab">
            <div
              className={
                toggleState === 1 ? "content1  active_content" : "content1"
              }
            >
              <table>
                <thead
                  style={{
                    color: "#00A877",
                    fontSize: "17px",
                    verticalAlign: "top",
                    fontWeight: "bold",
                  }}
                >
                  <tr>
                    <th>Date of Application</th>
                    <th>Date of Approved</th>
                    <th>Subscription Tenure</th>
                    <th>Amount</th>
                    <th>Interest Rate</th>
                    <th>Repayment Structure</th>
                    <th>Loan Details</th>
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
                    <td>12-03-2022</td>
                    <td>12-03-2022</td>
                    <td>subscription</td>
                    <td> 5000</td>
                    <td>14%</td>
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
                          handleShowRepaymentAmount();
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
                          handleShowLoanApplication();
                        }}
                      >
                        View
                      </button>
                    </td>
                    <div>
                      <Modal
                        size="xl"
                        show={showRepaymentAmount}
                        onHide={handleCloseRepaymentAmount}
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
                              <thead style={{ backgroundColor: "#eee" }}>
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
                                <tr>
                                  <td>5</td>
                                  <td>12-10-2021</td>
                                  <td>100000</td>
                                  <td>21-10-2021</td>
                                  <td>400000</td>
                                  <td>300000</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </tr>
                  <tr>
                    <td>12-03-2022</td>
                    <td>12-03-2022</td>
                    <td>subscription</td>
                    <td> 5000</td>
                    <td>14%</td>
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
                          handleShowRepaymentAmount();
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
                          handleShowLoanApplication();
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              className={
                toggleState === 2 ? "content1  active_content" : "content1"
              }
            >
              <table>
                <thead
                  style={{
                    color: "#00A877",
                    fontSize: "17px",
                    verticalAlign: "top",
                    fontWeight: "bold",
                    borderBottom: "1px solid #c7ccd1",
                  }}
                >
                  <tr>
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
                    <td>2022-800-07</td>
                    <td>01-05-2022</td>
                    <td>₹ 98765</td>
                    <td> 13-07-2022</td>
                    <td>₹ 3778</td>
                    <td>₹ 761434</td>
                    <td> 24-09-2022</td>
                  </tr>
                  <tr>
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

            <div
              className={
                toggleState === 3 ? "content1  active_content" : "content1"
              }
            >
              <table>
                <thead
                  style={{
                    color: "#00A877",
                    fontSize: "17px",
                    verticalAlign: "top",
                    fontWeight: "bold",
                    borderBottom: "1px solid #c7ccd1",
                  }}
                >
                  <tr>
                    <th>Loan Id</th>
                    <th>Loan Application Date</th>
                    <th>Loan Amount</th>
                    <th>Loan Application</th>
                    <th>Status</th>
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
                          handleShowLoanApplication();
                        }}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <div>
                        <select
                          className="form-control"
                          onChange={(e) => changeLoanStatus(e)}
                        >
                          <option value="Pending">Change Loan Status</option>
                          <option value="Approved">
                            Approve and Forward to Samunnati
                          </option>
                          <option value="Rejected">Reject</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <Modal
            show={showApprovedLoan}
            onHide={handleCloseApprovedLoan}
            centered
          >
            <Modal.Header closeButton>Approve Loan Application</Modal.Header>
            <Modal.Body>
              <div className="row ">
                <div className="col">
                  <form>
                    <div className="form">
                      <div className="card p-2">
                        <div className="row m-2">
                          <div className="col-lg-6">
                            <label>Loan ID</label>
                          </div>
                          <div className="col-lg-6">
                            <label>Loan ID</label>
                          </div>
                        </div>
                        <div className="row m-2">
                          <div className="col-lg-6">
                            <label>FPO Name</label>
                          </div>
                          <div className="col-lg-6">
                            <label>FPO 2</label>
                          </div>
                        </div>
                        <div className="row m-2">
                          <div className="col-lg-6">
                            <label>Contact No.</label>
                          </div>
                          <div className="col-lg-6">
                            <label>1234567890</label>
                          </div>
                        </div>
                        <div className="row m-2">
                          <div className="col-lg-6">
                            <label>Date of Application</label>
                          </div>
                          <div className="col-lg-6">
                            <label>12-01-2021</label>
                          </div>
                        </div>
                        <div className="row m-2">
                          <div className="col-lg-6">
                            <label>Loan Requested Amount</label>
                          </div>
                          <div className="col-lg-6">
                            <label>400000</label>
                          </div>
                        </div>
                        <div className="row m-2">
                          <div className="col-lg-6">
                            <label>Loan Tenure (months)</label>
                          </div>
                          <div className="col-lg-6">
                            <label>2</label>
                          </div>
                        </div>
                        <div className="row m-2">
                          <div className="col-lg-6">
                            <label>Interest Rate (%)</label>
                          </div>
                          <div className="col-lg-6">
                            <label>12</label>
                          </div>
                        </div>
                        <div className="row m-2">
                          <div className="col-lg-12">
                            <button
                              className="btn btn-primary"
                              style={{
                                float: "right",
                                backgroundColor: "#064420",
                                border: "none",
                              }}
                              onClick={() => {
                                handleShowConfirmLoanStatus();
                                // confirmStatus();
                                confirmLoan();
                              }}
                            >
                              Approve Loan
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <div>
          <Modal show={showRejectedLoan} onHide={handleCloseRejectedLoan}>
            <Modal.Header closeButton>Reject Loan Application</Modal.Header>
            <Modal.Body>
              <div className="row ">
                <div className="col">
                  <form>
                    <div className="form">
                      <div className="card p-2">
                        <div className="row m-2">
                          <div className="col-lg-6">
                            <label>FPO Name</label>
                          </div>
                          <div className="col-lg-6">
                            <label>FPO 2</label>
                          </div>
                        </div>
                        <div className="row m-2">
                          <div className="col-lg-6">
                            <label>Contact No.</label>
                          </div>
                          <div className="col-lg-6">
                            <label>1234567890</label>
                          </div>
                        </div>
                        <div className="row m-2">
                          <div className="col-lg-6">
                            <label>Date of Application</label>
                          </div>
                          <div className="col-lg-6">
                            <label>12-01-2021</label>
                          </div>
                        </div>
                        <div className="row m-2">
                          <div className="col-lg-6">
                            <label>Requested Amount</label>
                          </div>
                          <div className="col-lg-6">
                            <label>200000</label>
                          </div>
                        </div>
                        <div className="row m-2">
                          <div className="col-lg-6">
                            <label>Reason for Rejection</label>
                          </div>
                          <div className="col-lg-6">
                            <label>Reason</label>
                          </div>
                        </div>
                        <div className="row m-2">
                          <div className="col-lg-12">
                            <button
                              className="btn btn-primary"
                              style={{
                                float: "right",
                                backgroundColor: "#064420",
                                border: "none",
                              }}
                              onClick={() => {
                                handleShowConfirmLoanStatus();
                                // confirmStatus();
                                confirmLoan();
                              }}
                            >
                              Reject Loan
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <div>
          <Modal
            show={showConfirmLoanStatus}
            onHide={handleCloseConfirmLoanStatus}
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
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
                    confirmLoan(e);
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
                  // onClick={(e) => {
                  //   cancelBid(e);
                  // }}
                >
                  No
                </button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <div>
        <div>
          <Modal show={showLoanApplication} onHide={handleCloseLoanApplication}>
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
      <div className="card_wrapper mt-2">
        <div className="bloc-tabs" style={{ width: "100%" }}>
          <button
            style={{ width: "12%" }}
            className={toggleChange === 1 ? "tabs-1 active-tabs" : "tabs-1"}
            onClick={() => toggleTab1(1)}
          >
            Approved Application
          </button>
          <button
            style={{ width: "12%" }}
            className={toggleChange === 2 ? "tabs-1 active-tabs" : "tabs-1"}
            onClick={() => toggleTab1(2)}
          >
            Application History
          </button>
          <button
            style={{ width: "12%" }}
            className={toggleChange === 3 ? "tabs-1 active-tabs" : "tabs-1"}
            onClick={() => toggleTab1(3)}
          >
            Application in Process
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
              position: "absolute",
              right: "100px",
            }}
            onClick={() => {
              handleShowRepaymentAmount();
            }}
          >
            Aggregate Repayment
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleChange === 1 ? "content  active-content" : "content"
            }
          >
            <table>
              <thead
                style={{
                  color: "#00A877",
                  fontSize: "17px",
                  verticalAlign: "top",
                  fontWeight: "bold",
                }}
              >
                <tr>
                  <th>Date of Application</th>
                  <th>Date of Approved</th>
                  <th>Subscription Tenure</th>
                  <th>Amount</th>
                  <th>Interest Rate</th>
                  <th>Repayment Structure</th>
                  <th>Loan Details</th>
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
                  <td>12-03-2022</td>
                  <td>12-03-2022</td>
                  <td>subscription</td>
                  <td> 5000</td>
                  <td>14%</td>
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
                        handleShowRepaymentAmount();
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
                        handleShowLoanApplication();
                      }}
                    >
                      View
                    </button>
                  </td>
                  <div>
                    <Modal
                      size="xl"
                      show={showRepaymentAmount}
                      onHide={handleCloseRepaymentAmount}
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
                            <thead style={{ backgroundColor: "#eee" }}>
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
                              <tr>
                                <td>5</td>
                                <td>12-10-2021</td>
                                <td>100000</td>
                                <td>21-10-2021</td>
                                <td>400000</td>
                                <td>300000</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                </tr>
                <tr>
                  <td>12-03-2022</td>
                  <td>12-03-2022</td>
                  <td>subscription</td>
                  <td> 5000</td>
                  <td>14%</td>
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
                        handleShowRepaymentAmount();
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
                        handleShowLoanApplication();
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className={
              toggleChange === 2 ? "content  active-content" : "content"
            }
          >
            <table>
              <thead
                style={{
                  color: "#00A877",
                  fontSize: "17px",
                  verticalAlign: "top",
                  fontWeight: "bold",
                  borderBottom: "1px solid #c7ccd1",
                }}
              >
                <tr>
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
                  <td>2022-800-07</td>
                  <td>01-05-2022</td>
                  <td>₹ 98765</td>
                  <td> 13-07-2022</td>
                  <td>₹ 3778</td>
                  <td>₹ 761434</td>
                  <td> 24-09-2022</td>
                </tr>
                <tr>
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
          <div
            className={
              toggleChange === 3 ? "content  active-content" : "content"
            }
          >
            <table>
              <thead
                style={{
                  color: "#00A877",
                  fontSize: "17px",
                  verticalAlign: "top",
                  fontWeight: "bold",
                  borderBottom: "1px solid #c7ccd1",
                }}
              >
                <tr>
                  <th>Loan Id</th>
                  <th>Loan Application Date</th>
                  <th>Loan Amount</th>
                  <th>Loan Application</th>
                  <th>Status</th>
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
                {/* <tr>
                  <td>2022-64-07</td>
                  <td>02-05-2022</td>
                  <td>₹ 7345</td>
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
                        handleShowLoanApplication();
                      }}
                    >
                      View
                    </button>
                  </td>
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
                      Pending
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2022-64-07</td>
                  <td>02-05-2022</td>
                  <td>₹ 7345</td>
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
                        handleShowLoanApplication();
                      }}
                    >
                      View
                    </button>
                  </td>
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
                      Pending
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2022-64-07</td>
                  <td>02-05-2022</td>
                  <td>₹ 7345</td>
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
                        handleShowLoanApplication();
                      }}
                    >
                      View
                    </button>
                  </td>
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
                      Pending with samunnati
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2022-64-07</td>
                  <td>02-05-2022</td>
                  <td>₹ 7345</td>
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
                        textAlign: "center",
                      }}
                      onClick={() => {
                        handleShowLoanApplication();
                      }}
                    >
                      View
                    </button>
                  </td>
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
                      Pending with samunnati
                    </button>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FpoLoanTab;
