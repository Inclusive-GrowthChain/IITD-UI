import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Modal from "react-bootstrap/Modal";
import { useAuthStore } from "../../../store/useAuthStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { approveClientPayment } from "../../../actions/fpo";
import useModal from "../../../hooks/useModal";

const PageFour = ({ onButtonClick, bid, canEdit,handleClose }) => {
  const fpoId = useAuthStore(s => s.userDetails._id);
  const [showInvoice, setShowInvoice] = useState(false);
  const handleShowInvoice = () => setShowInvoice(true);
  const handleCloseInvoice = () => setShowInvoice(false);
  const [data, setData] = useState({})
  const [showApprove, setShowApprove] = useState(false)
  const { updateModal, modal } = useModal()

  const handleShowApprove = () => setShowApprove(true);
  const handleCloseApprove = () => setShowApprove(false);

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: approveClientPayment,
    onSuccess: () => {
      queryClient.invalidateQueries("auction/")
    }
  })

  useEffect(() => {
    bid.bids.forEach((item) => {
      if (item.fpoId === fpoId) {
        let tempData = {}
        tempData.auctionId = bid.id
        tempData.bidId = item.id
        setData(tempData)
      }
    });
  }, [bid, fpoId]);

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
              <label>{bid.bids.find((item) => item.fpoId === fpoId).bidAmount}</label>
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
                    updateModal("", { imgUrl: bid.bids.find((item) => item.fpoId === fpoId).clientInvoice })
                  }}
                >
                  view
                </button>
              </div>
            </div>
            {
              canEdit && (
                <div className="row m-2">
                  <div className="col-lg-12">
                    <button
                      className="btn btn-success"
                      style={{
                        marginTop: "1rem",
                        backgroundColor: "#064420",
                        width: "96%",
                      }}
                      onClick={(e) => {
                        e.preventDefault()
                        handleShowApprove()
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </form>

      <Modal show={showInvoice} onHide={handleCloseInvoice}>
        <Modal.Header closeButton>Payment Invoice</Modal.Header>
        <Modal.Body>
          <img
            src={modal.data.imgUrl}
            alt="Test Reports"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>

      <Modal show={showApprove} onHide={handleCloseApprove}>
        <Modal.Header closeButton>Approve Payment</Modal.Header>
        <Modal.Body>
          <div>
            Are you sure you want to approve the corporate client's payment?
          </div>
          <div
            className="col-lg-12"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <button
              className="btn btn-success"
              style={{ backgroundColor: '#064420' }}
              onClick={(e) => {
                e.preventDefault()
                mutate({ data })
                handleCloseApprove()
              }}
            >
              Confirm
            </button>
          </div>
        </Modal.Body>
      </Modal>

    </main>
  );
};

export default PageFour;
