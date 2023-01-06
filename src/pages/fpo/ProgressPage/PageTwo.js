import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const PageTwo = ({ onButtonClick }) => {
  const [selectedFile, setSelectedFile] = useState();
  // const [errorMsg, setErrorMsg] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const fpo = {
    id: 1,
    amount: 2000,
    name: "FPO",
    village: "Village",
    phoneNumber: "98213XXXXX",
    reportsReqd: [
      {
        reportName: "Chowri",
        reportReqd: true,
      },
    ],
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
              onClick={() => onButtonClick("pageone")}
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
              onClick={() => onButtonClick("pagethree")}
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
                value={fpo.id}
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
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Required Test Reports</label>
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

export default PageTwo;
