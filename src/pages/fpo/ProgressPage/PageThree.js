import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const PageThree = ({ onButtonClick }) => {
  const [selectedFile, setSelectedFile] = useState();
  // const [errorMsg, setErrorMsg] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const fpoInvoice = {
    id: 1,
    name: "FPO",
    village: "Village",
    phoneNumber: "12345XXXXX",
    invoiceNo: "12345XXXXX",
    invoiceDate: "12/12/2021",
    amount: "3000",
  };

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
              onClick={() => onButtonClick("pagetwo")}
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
              onClick={() => onButtonClick("pagefour")}
              style={{ backgroundColor: "white" }}
              // disabled={!orderPlaced}
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
                value={fpoInvoice.id}
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
                value={fpoInvoice.name}
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
                value={fpoInvoice.phoneNumber}
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
                value={fpoInvoice.amount}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Date of Payment</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                disabled={true}
                value={fpoInvoice.invoiceDate}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Upload Invoice</label>
            </div>
            <div className="col-lg-6">
              <input
                type="file"
                name="file"
                multiple={true}
                onClick={() => {
                  handleFileChange();
                  selectedFile();
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default PageThree;
