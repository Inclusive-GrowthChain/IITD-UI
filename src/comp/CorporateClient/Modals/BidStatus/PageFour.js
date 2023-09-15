import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PageFour = ({ onButtonClick, outerbid }) => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [fpo, setFpo] = useState({});
  const [status, setStatus] = useState("")
  const [currentReport, setCurrentReport] = useState([]);

  const handleShowInvoice = () => setShowInvoice(true);
  const handleCloseInvoice = () => setShowInvoice(false);

  useEffect(() => {
    outerbid.bids.forEach((bid) => {
      if (bid.status === "invoice-added" || bid.status === "payment-done-waiting-approval" || bid?.status === "completed") {
        let tempFpo = {};
        tempFpo.id = bid.fpoId;
        tempFpo.name = bid.name;
        tempFpo.fpoPhone = bid.fpoPhone;
        tempFpo.bidAmount = bid.bidAmount;
        tempFpo.invoice = bid.invoice;
        tempFpo.invoiceDate = bid.invoiceAddedAt?.substring(0, 10);
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
            Payment Invoice Details
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
              onClick={() => onButtonClick("pagethree")}
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
              disabled={!fpo.invoice}
              onClick={() => onButtonClick("pagefive")}
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
                value={fpo.fpoPhone}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Amount</label>
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
            (status === "invoice-added" || status === "completed") && (
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>Date of Payment</label>
                </div>
                <div className="col-lg-6">
                  <input
                    className="form-control"
                    type="text"
                    disabled={true}
                    value={fpo.invoiceDate}
                  />
                </div>
              </div>
            )
          }
          {
            (status === "invoice-added" || status === "payment-done-waiting-approval" || status === "completed") && (
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>Invoice</label>
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
                      handleShowInvoice();
                      setCurrentReport(outerbid?.bids);
                    }}
                  >
                    view
                  </button>
                </div>
              </div>
            )
          }
          {
            (status !== "invoice-added" && status !== "payment-done-waiting-approval" && status !== "completed") && (
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>Invoice</label>
                </div>
                <div className="col-lg-6">
                  Waiting for FPO to add invoice
                </div>
              </div>
            )
          }
        </div>
      </form>

      <Modal show={showInvoice} onHide={handleCloseInvoice}>
        <Modal.Header closeButton>Invoice</Modal.Header>
        <Modal.Body>
          {
            currentReport?.length > 0 && currentReport?.map((report, index) => {
              if ((report?.status === "test-report-added" || report?.status === "completed" || report?.status === "payment-done-waiting-approval" || report?.status === "invoice-added") && report?.requiredTestReports) {
                return (
                  <img
                    key={index}
                    src={report.requiredTestReports}
                    alt="Payment"
                    style={{ width: "100%", height: "100%" }}
                  />
                );
              }
              return null;
            })                                                                                                                                                           
          }
        </Modal.Body>
      </Modal>

    </main>
  );
};

export default PageFour;
