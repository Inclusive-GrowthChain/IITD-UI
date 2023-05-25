import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Modal from "react-bootstrap/Modal";
import { useAuthStore } from "../../../store/useAuthStore";
import { root } from "../../../utils/endPoints";

const PageFour = ({ onButtonClick, bid }) => {
  const fpoId = useAuthStore(s => s.userDetails._id);
  const [showInvoice, setShowInvoice] = useState(false);
  const handleShowInvoice = () => setShowInvoice(true);
  const handleCloseInvoice = () => setShowInvoice(false);

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
            Acknowledge Payment
          </h5>
        </div>
        <div className="form" style={{ marginTop: "3%" }}>
          <div
            style={{
              position: "relative",
              float: "left",
              left: "-0.781rem",
              top: "4rem",
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                onButtonClick("pagethree")
              }}
              style={{ backgroundColor: "white" }}
            >
              <ArrowBackIosIcon />
            </button>
          </div>
          <div className="row m-2">
            <div className="col-lg-6" style={{ marginLeft: "-2%" }}>
              <label>Invoice Number</label>
            </div>
            <div className="col-lg-6" style={{ marginLeft: "1%" }}>
              <label>{bid.bids.find((item) => item.fpoId === fpoId).clientInvoiceNumber}</label>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Payment Date</label>
            </div>
            <div className="col-lg-6">
              <label>{bid.bids.find((item) => item.fpoId === fpoId).clientInvoiceDate}</label>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Amount</label>
            </div>
            <div className="col-lg-6">
              <label>{bid.bids.find((item) => item.fpoId === fpoId).clientAmount}</label>
            </div>
            <div className="row m-2">
              <div className="col-lg-6" style={{ marginLeft: "-2.75%" }}>
                <label>Payment Proof</label>
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
                  }}
                >
                  view
                </button>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-12">
                <button
                  className="btn btn-success"
                  style={{
                    marginTop: "1rem",
                    backgroundColor: "#064420",
                    width: "96%",
                  }}
                  onClick={() => {
                    // onSubmit();
                    // handleShowPayment();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <Modal show={showInvoice} onHide={handleCloseInvoice}>
        <Modal.Header closeButton>Invoice</Modal.Header>
        <Modal.Body>
          <img
            src={`${root.imgUrl}/img/${bid.bids.find((item) => item.fpoId === fpoId).clientInvoice}`}
            alt="Invoice"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>

      {/* <Modal
        show={showPayment}
        onHide={handleClosePayment}
      >
        <Modal.Header closeButton>Place a Bid</Modal.Header>
        <Modal.Body>
          <div className="bid_title">
            <div className="row">
              <div className="col-6">
                <label>Enter the Price/kg</label>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter thr price"
                />
              </div>
            </div>
            <div>
              <div className="row m-1">
                <button
                  className="mt-4"
                  style={{
                    backgroundColor: "#064420",
                    alignItems: "center",
                    borderRadius: "5px",
                    border: "none",
                    padding: "0.25rem 1rem",
                    color: "#fff",
                  }}
                  onClick={() => {
                    alert.show("your amount!");
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </main>
  );
};

export default PageFour;
