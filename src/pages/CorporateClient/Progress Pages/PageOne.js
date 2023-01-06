/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Today } from "@mui/icons-material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PageOne = ({onButtonClick, bid}) => {
  const [multiSelectReportName, setMultiSelectReportName] = useState([]);
  const [edit, setEdit] = useState(false);
  const [canEdit, setCanEdit] = useState(false);

  const onMultiSelectReportNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setMultiSelectReportName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(true);
  }

  useEffect(() => {
    if (bid) {
      bid.endDate > new Date().toISOString().split("T")[0] ? setCanEdit(true) : setCanEdit(false);
    }
  }, [bid]);

  return (
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "100%", margin: "auto" }}
    >
      <form className="measure">
        {/* {
          canEdit && (
            <div style={{
              position: "relative",
              float: "right",
              right: "18px",
              top: "-3rem",
              }}>
            <button 
              onClick={handleEdit}
              style={{backgroundColor: 'white'}}>
              <EditIcon />
            </button>
          </div>
          )
        } */}
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
            style={{backgroundColor: 'white'}}
            disabled={canEdit}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
        <div className="form" style={{marginTop: '3%'}}>
          <div className="row m-2">
            <div className="col-lg-6">
              <label>Bid ID</label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                value={bid.id}
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
                  bid.lacStrainType !== "Kusmi" ? (
                    <option value="1">Kusmi</option>
                  ) : null
                }
                {
                  bid.lacStrainType !== "Rangeeni" ? (
                    <option value="2">Rangeeni</option>
                  ) : null
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
                <option value="0">{bid.treeSource}</option>
                {
                  bid.treeSource !== "Kusum" ? (
                    <option value="1">Kusum</option>
                  ) : null
                }
                {
                  bid.treeSource !== "Ber" ? (
                    <option value="2">Ber</option>
                  ) : null
                }
                {
                  bid.treeSource !== "Palash" ? (
                    <option value="3">Palash</option>
                  ) : null
                }
                {
                  bid.treeSource !== "Other" ? (
                    <option value="4">Other</option>
                  ) : null
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
                  bid.origin !== "Jharkhand" ? (
                    <option value="1">Jharkhand</option>
                  ) : null
                }
                {
                  bid.origin !== "Chattisgarh" ? (
                    <option value="2">Chattisgarh</option>
                  ) : null
                }
                {
                  bid.origin !== "MP" ? (
                    <option value="3">MP</option>
                  ) : null
                }
                {
                  bid.origin !== "Mednapore" ? (
                    <option value="4">Mednapore</option>
                  ) : null
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
                type="number" 
                disabled={true}
                value={bid.seedlacContent}
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
                type="number" 
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
                value={bid.endDate}
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
                  bid.reportsReqd.map((report) => (
                    // eslint-disable-next-line eqeqeq
                    report.reportReqd == true && (
                      <div className="row">
                        <div className="col-lg-12">
                          <input
                            type="text"
                            className="form-control"
                            value={report.reportName}
                            disabled
                          />
                        </div>
                      </div>
                    )
                  ))
                )
              }
              {/* {
                edit && (
                  <Select
                    className="form-control"
                    name="category"
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={multiSelectReportName}
                    onChange={onMultiSelectReportNameChange}
                    disabled={!edit}
                  >
                    {
                      multiSelectReportName.indexOf("Chowri") === -1 ? (
                        <MenuItem value="1">Chowri</MenuItem>
                      ) : null
                    }
                    {
                      multiSelectReportName.indexOf("Panna") === -1 ? (
                        <MenuItem value="2">Panna</MenuItem>
                      ) : null
                    }
                  </Select>
                )
              } */}
            </div>
          </div>
          <div className="row m-2" style={{marginBottom: '5rem'}}>
            <div className="col-lg-6">
              <label>Remarks</label>
            </div>
            <div className="col-lg-12">
              <textarea className="form-control"
                style={{ height: "100%"}}
                disabled={true}
                value={bid.remarks}
              />
            </div>
          </div>
          {/* {
            edit && (
              <div className="row m-2">
              <button 
                className="btn btn-success" 
                style={{marginTop: '5rem', backgroundColor: '#064420'}}
                onClick={() => window.location.reload()}
              >
                Edit
              </button>
            </div>
            )
          } */}
          {/* <div className="row m-2">
            <button 
              className="btn btn-success" 
              style={{marginTop: '5rem', backgroundColor: '#064420'}}
              disabled={canEdit}
              onClick={() => onButtonClick("pagetwo")}
            >
              Next
            </button>
          </div> */}
        </div>
      </form>
    </main>
  );
};

export default PageOne;
