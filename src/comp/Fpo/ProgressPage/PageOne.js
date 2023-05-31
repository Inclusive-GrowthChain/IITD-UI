import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useEffect } from "react";

const PageOne = ({ onButtonClick, bid }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    bid.bids.forEach((bid) => {
      if (bid.status) {
        setSelected(true);
      }
    })
  }, [bid]);

  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "100%", margin: "auto" }}
    >
      <form className="measure">
        <div
          style={{
            position: "relative",
            float: "right",
            right: "-0.781rem",
            top: "22rem",
          }}
        >
          <button
            onClick={(e) => {
              e.preventDefault()
              onButtonClick("pagetwo")
            }}
            style={{ backgroundColor: "white" }}
            disabled={!selected}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
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
            Bid Details
          </h5>
        </div>
        <div className="form" style={{ marginTop: "3%" }}>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Bid ID</label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                value={bid.bidId}
                disabled
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Lac Strain Type</label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                value={bid.lacStrainType}
                disabled
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Source of Tree</label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                value={bid.sourceTree}
                disabled
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Origin</label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                value={bid.origin}
                disabled
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Seedlac Content</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                disabled={true}
                value={bid.seedLacContent}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Fresh Resin Content</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                disabled={true}
                value={bid.freshResinContent}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Quantity</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="number"
                disabled={true}
                value={bid.quantity}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Date of Supply</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                disabled={true}
                value={bid.supplyDate}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>End Date for Bidding</label>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                disabled={true}
                value={bid.bidEndDate}
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Required Test Reports</label>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={Array.isArray(bid.reportsRequired) ? bid.reportsRequired.join(', ') : ''}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row m-2" style={{ marginBottom: "5rem" }}>
            <div className="col-lg-6">
              <label>Remarks</label>
            </div>
            <div className="col-lg-12">
              <textarea
                className="form-control"
                style={{ height: "100%" }}
                disabled={true}
                value="Remarks"
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default PageOne;
