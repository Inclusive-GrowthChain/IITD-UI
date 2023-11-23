import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sendInvoice } from "../../../actions/fpo";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import FileInput from "../../Common/FileInput";
import { useAuthStore } from "../../../store/useAuthStore";
import Modal from "react-bootstrap/Modal";
import useModal from "../../../hooks/useModal";

const PageThree = ({ onButtonClick, bid, handleClose }) => {
  const [showInvoice, setShowInvoice] = useState(false);
  const fpoId = useAuthStore(s => s.userDetails._id)
  const [status, setStatus] = useState("")
  const {updateModal,modal} = useModal()

  const handleShowInvoice = () => setShowInvoice(true);
  const handleCloseInvoice = () => setShowInvoice(false);

  const queryClient = useQueryClient()
  const { register, formState: { errors }, handleSubmit, reset, setValue, clearErrors } = useForm({
    defaultValues: {
      invoice: "",
      auctionId: "",
      bidId: "",
    }
  })

  const { mutate } = useMutation({
    mutationFn: sendInvoice,
    onSuccess: () => {
      queryClient.invalidateQueries("auction/")
      handleClose()
    }
  })

  useEffect(() => {
    bid.bids.forEach((item) => {
      if (item.fpoId === fpoId) {
        reset({
          auctionId: bid.id,
          bidId: item.id
        })
        setStatus(item.status)
      }
    });
  }, [bid, fpoId, reset]);

  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "100%", margin: "auto" }}
    >
      <form className="measure" onSubmit={handleSubmit(mutate)}>
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
            Upload Invoice
          </h5>
        </div>
        <div className="form" style={{ marginTop: "3%" }}>
          <div
            style={{
              position: "relative",
              float: "left",
              left: "-0.781rem",
              top: "7rem",
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                onButtonClick("pagetwo")
              }}
              style={{ backgroundColor: "white" }}
            >
              <ArrowBackIosIcon />
            </button>
          </div>
          <div
            style={{
              position: "relative",
              float: "right",
              right: "-0.781rem",
              top: "7rem",
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                onButtonClick("pagefour")
              }}
              style={{ backgroundColor: "white" }}
              disabled={status !== "completed" && status !== "payment-done-waiting-approval"}
            >
              <ArrowForwardIosIcon />
            </button>
          </div>

          <div className="row m-2">
            <div className="col-lg-6">
              <label>FPO ID</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                disabled={true}
                value={bid.bids.find((item) => item.fpoId === fpoId).fpoId}
                style={{ width: "105%" }}
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
                value={bid.bids.find((item) => item.fpoId === fpoId).name}
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
                value={bid.bids.find((item) => item.fpoId === fpoId).fpoPhone}
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
                value={bid.bids.find((item) => item.fpoId === fpoId).bidAmount}
              />
            </div>
          </div>
          {
            status !== "test-report-added" && (
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>Date of Payment</label>
                </div>
                <div className="col-lg-6">
                  <input
                    className="form-control"
                    type="text"
                    disabled={true}
                    value={bid.bids.find((item) => item.fpoId === fpoId).invoiceAddedAt?.substring(0, 10)}
                  />
                </div>
              </div>
            )
          }
          {
            status === "test-report-added" && (
              <div className="row m-2">
                <div className="col-lg-12">
                  <label>Upload Invoice</label>
                </div>
                <div className="col-lg-12">
                  <FileInput
                    {...register("invoice")}
                    errors={errors}
                    register={register}
                    setValue={setValue}
                    clearErrors={clearErrors}
                  />
                </div>
              </div>
            )
          }
          {
            status !== "test-report-added" && (
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
                      updateModal("showRequestedReport", { imgUrl: bid.bids.find((item) => item.fpoId === fpoId).invoice })
                    }}
                  >
                    view
                  </button>
                </div>
              </div>
            )
          }
          {
            status === "test-report-added" && (
              <div className="row m-2">
                <div className="col-lg-12">
                  <button
                    className="btn btn-success"
                    style={{
                      marginTop: "1rem",
                      backgroundColor: "#064420",
                      width: "96%",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )
          }
        </div>
      </form>

      <Modal show={showInvoice} onHide={handleCloseInvoice}>
        <Modal.Header closeButton>Requested Report</Modal.Header>
        <Modal.Body>
          <img
            src={modal.data.imgUrl}
            alt="Test Reports"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default PageThree;
