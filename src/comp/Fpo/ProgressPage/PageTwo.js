import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendTestReports } from "../../../actions/fpo";
import FileInput from "../../Common/FileInput";
import { useAuthStore } from "../../../store/useAuthStore";
import { root } from "../../../utils/endPoints";
import Modal from "react-bootstrap/Modal";

const PageTwo = ({ onButtonClick, bid }) => {
  const [status, setStatus] = useState("")
  const fpoId = useAuthStore(s => s.userDetails._id)
  const [showInvoice, setShowInvoice] = useState(false);

  const handleShowInvoice = () => setShowInvoice(true);
  const handleCloseInvoice = () => setShowInvoice(false);

  const queryClient = useQueryClient()
  const { register, formState: { errors }, handleSubmit, reset, setValue, clearErrors } = useForm({
    defaultValues: {
      requiredTestReports: "",
      auctionId: "",
      bidId: "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: sendTestReports,
    onSuccess: () => {
      queryClient.invalidateQueries("auction/")
    }
  })

  useEffect(() => {
    console.log(bid);
    bid.bids.map((item) => {
      if (item.fpoId === localStorage.getItem("userId")) {
        reset({
          auctionId: bid.id,
          bidId: item.id
        })
        setStatus(item.status)
      }
    });
  }, [bid]);

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
            Upload Test Certificate
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
                onButtonClick("pageone")
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
                onButtonClick("pagethree")
              }}
              disabled={!status}
              style={{ backgroundColor: "white" }}
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
                value={bid.bids.find((item) => item.fpoId === fpoId).fpoName}
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
              <label>Bid Amount</label>
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
            !status && (
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>Required Test Reports</label>
                </div>
                <div className="col-lg-12">
                  <FileInput
                    {...register("requiredTestReports")}
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
            status && (
              <div className="row m-2">
                <div className="col-lg-6">
                  <label>Required Test Reports</label>
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
            )
          }
          {
            !status && (
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
        <Modal.Header closeButton>Invoice</Modal.Header>
        <Modal.Body>
          <img
            src={`${root.imgUrl}/img/${bid.bids.find((item) => item.fpoId === fpoId).requiredTestReports}`}
            alt="Test Reports"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default PageTwo;
