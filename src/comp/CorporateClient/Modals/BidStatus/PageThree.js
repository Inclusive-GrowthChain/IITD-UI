import React, { useEffect, useState } from "react";
import logo from "../../../../assets/img/logo.png";
import Modal from "react-bootstrap/Modal";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { root } from "../../../../utils/endPoints";

const PageThree = ({ onButtonClick, outerbid }) => {
  const [showReport, setShowReport] = useState(false);
  const [currentReport, setCurrentReport] = useState({});
  const [showReject, setShowReject] = useState(false);
  const [showApprove, setShowApprove] = useState(false);
  const [fpo, setFpo] = useState({});
  const [status, setStatus] = useState("")

  const handleShowReport = () => setShowReport(true);
  const handleCloseReport = () => setShowReport(false);
  const handleShowReject = () => setShowReject(true);

  useEffect(() => {
    console.log(outerbid);
    outerbid.bids.forEach((bid) => {
      if (bid.status) {
        let tempFpo = {};
        tempFpo.id = bid.fpoId;
        tempFpo.fpoName = bid.fpoName;
        tempFpo.fpoPhone = bid.fpoPhone;
        tempFpo.bidAmount = bid.bidAmount;
        tempFpo.testReports = bid.requiredTestReports;
        setFpo(tempFpo);
        setStatus(bid.status)
      }
    });
  }, [outerbid])

  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "100%", margin: "auto" }}
    >
      <form className="measure">
        <div>
          <h5
            className="mt-5"
            style={{
              padding: "10px 18px",
              color: "rgb(33, 143, 44)",
              fontWeight: "700",
              textDecoration: "underline",
            }}
          >
            Verify Test Certificate
          </h5>
        </div>
        <div className="form" style={{ marginTop: '3%' }}>
          <div style={{
            position: "relative",
            float: "left",
            left: "-0.781rem",
            top: "7rem",
          }}>
            <button
              onClick={() => onButtonClick("pagetwo")}
              style={{ backgroundColor: 'white' }}
            >
              <ArrowBackIosIcon />
            </button>
          </div>
          <div style={{
            position: "relative",
            float: "right",
            right: "-0.781rem",
            top: "7rem",
          }}>
            <button
              disabled={status === "test-report-added"}
              onClick={() => onButtonClick("pagefour")}
              style={{ backgroundColor: 'white' }}
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
          <div className="row m-2">
            <div className="col-lg-6" style={{ marginLeft: '-2.5%' }}>
              <label>FPO ID</label>
            </div>
            <div className="col-lg-6" style={{ marginLeft: '2.5%' }}>
              <input
                className="form-control"
                type="text"
                disabled={true}
                value={fpo.id}
                style={{ width: '105%' }}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>FPO Name</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                disabled={true}
                value={fpo.fpoName}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>FPO Phone Number</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                disabled={true}
                value={fpo.fpoPhone}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Bid Amount</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                disabled={true}
                value={fpo.bidAmount}
              />
            </div>
          </div>
          {
            !fpo.testReports && (
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>Required Test Reports</label>
                </div>
                <div className="col-lg-6">
                  Waiting for FPO to upload test reports
                </div>
              </div>
            )
          }
          {
            // fpo.testReports && fpo.testReports.map((report, index) => (
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>Report</label>
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
                      fontSize: "1rem",
                      lineHeight: "2rem",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleShowReport();
                      setCurrentReport(fpo.testReports);
                    }}
                  >
                    view
                  </button>
                </div>
              </div>
            // ))
          }
          <div className="row m-2">
            <div className="col-lg-6">
              <button
                className="btn btn-success"
                style={{ marginTop: '5rem', backgroundColor: '#064420' }}
                disabled={!fpo.testReports || status==="completed"}
                onClick={(e) => {
                  e.preventDefault();
                  handleShowReject()
                }}
              >
                Reject Test Reports
              </button>
            </div>
            {/* <div className="col-lg-6" style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                className="btn btn-success"
                style={{ marginTop: '5rem', backgroundColor: '#064420' }}
                disabled={!fpo.testReports}
                onClick={(e) => {
                  e.preventDefault();
                  handleShowApprove()
                }}
              >
                Approve
              </button>
            </div> */}
          </div>
        </div>
      </form>

      <Modal show={showReport} onHide={handleCloseReport}>
        <Modal.Header closeButton>Report</Modal.Header>
        <Modal.Body>
          <img
            src={`${root.imgUrl}/img/${currentReport}`}
            alt="Payment"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default PageThree;
