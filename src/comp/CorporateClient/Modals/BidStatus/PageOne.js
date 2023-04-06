import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PageOne = ({ onButtonClick, bid }) => {
  const [canEdit, setCanEdit] = useState(false);
  const [edit] = useState(false);

  // useEffect(() => {
  //   if (bid) {
  //     bid.bidEndDate > new Date().toISOString().split("T")[0] ? setCanEdit(true) : setCanEdit(false);
  //   }
  // }, [bid]);

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
            Bid Details
          </h5>
        </div>
        <div style={{
          position: "relative",
          float: "right",
          right: "-0.781rem",
          top: "22rem",
        }}>
          <button
            onClick={() => onButtonClick("pagetwo")}
            style={{ backgroundColor: 'white' }}
            // disabled={canEdit}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
        <div className="form" style={{ marginTop: '3%' }}>
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
            <div className="col-lg-12">
              <select
                className="form-control"
                name="category"
                disabled={true}
              >
                <option value="0">{bid.lacStrainType}</option>
                {
                  bid.lacStrainType !== "Kusmi" &&
                  <option value="1">Kusmi</option>
                }
                {
                  bid.lacStrainType !== "Rangeeni" &&
                  <option value="2">Rangeeni</option>
                }
              </select>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Source of Tree</label>
            </div>
            <div className="col-lg-12">
              <select
                className="form-control"
                name="category"
                disabled={true}
              >
                <option value="0">{bid.sourceTree}</option>
                {
                  bid.sourceTree !== "Kusum" &&
                  <option value="1">Kusum</option>
                }
                {
                  bid.sourceTree !== "Ber" &&
                  <option value="2">Ber</option>
                }
                {
                  bid.sourceTree !== "Palash" &&
                  <option value="3">Palash</option>
                }
                {
                  bid.sourceTree !== "Other" &&
                  <option value="4">Other</option>
                }
              </select>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Origin</label>
            </div>
            <div className="col-lg-12">
              <select
                className="form-control"
                name="category"
                disabled={true}
              >
                <option value="0">{bid.origin}</option>
                {
                  bid.origin !== "Jharkhand" &&
                  <option value="1">Jharkhand</option>
                }
                {
                  bid.origin !== "Chattisgarh" &&
                  <option value="2">Chattisgarh</option>
                }
                {
                  bid.origin !== "MP" &&
                  <option value="3">MP</option>
                }
                {
                  bid.origin !== "Mednapore" &&
                  <option value="4">Mednapore</option>
                }
              </select>
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
                type="date"
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
                type="date"
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
              {
                !edit && (
                  bid.reportsRequired
                    .map((report) => (
                      <div className="row">
                        <div className="col-lg-12">
                          <input
                            type="text"
                            className="form-control"
                            value={report}
                            disabled
                          />
                        </div>
                      </div>
                    ))
                )
              }
            </div>
          </div>
          <div className="row m-2" style={{ marginBottom: '5rem' }}>
            <div className="col-lg-6">
              <label>Remarks</label>
            </div>
            <div className="col-lg-12">
              <textarea className="form-control"
                style={{ height: "100%" }}
                disabled={true}
                value={bid.remarks}
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default PageOne;
