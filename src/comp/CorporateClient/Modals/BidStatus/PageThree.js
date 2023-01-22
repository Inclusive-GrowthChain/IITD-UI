import React, { useState } from "react";
import logo from "../../../../assets/img/logo.png";
import Modal from "react-bootstrap/Modal";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const fpo = {
  id: 1,
  amount: 100000,
  name: "FPO 1",
  village: "Village 1",
  phoneNumber: "1234567890",
  reportsReqd: [
    {
      reportName: "Chowri",
      reportReqd: true,
    },
    {
      reportName: "Panna",
      reportReqd: true,
    },
  ],
};

const PageThree = ({ onButtonClick }) => {
  const [showReport, setShowReport] = useState(false);
  const [currentReport, setCurrentReport] = useState({});

  const handleShowReport = () => setShowReport(true);
  const handleCloseReport = () => setShowReport(false);

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
              onClick={() => onButtonClick("pagefour")}
              style={{ backgroundColor: 'white' }}
            // disabled={!orderPlaced}
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
                value={fpo.name}
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
                value={fpo.phoneNumber}
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
                value={fpo.amount}
              />
            </div>
          </div>
          {
            fpo.reportsReqd.map((report, index) => (
              report.reportReqd && (
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>{report.reportName} Report</label>
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
                        setCurrentReport(report);
                      }}
                    >
                      view
                    </button>
                  </div>
                </div>
              )
            ))
          }
        </div>
      </form>

      <Modal show={showReport} onHide={handleCloseReport}>
        <Modal.Header closeButton>{currentReport.reportName} Report</Modal.Header>
        <Modal.Body>
          <img
            src={logo}
            alt="Payment"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default PageThree;
