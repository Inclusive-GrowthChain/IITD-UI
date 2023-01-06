/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Today } from "@mui/icons-material";
import logo from "../../../assets/img/logo.png";
import Modal from "react-bootstrap/Modal";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PageFour = ({onButtonClick}) => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const [showApprove, setShowApprove] = useState(false);

  const fpoInvoice = {
    id: 1,
    name: "FPO 1",
    village: "Village 1",
    phoneNumber: "1234567890",
    invoiceNo : "1234567890",
    invoiceDate : "12/12/2021",
    amount : "100000",
  };

  const handleShowInvoice = () => setShowInvoice(true);
  const handleCloseInvoice = () => setShowInvoice(false);
  const handleShowReject = () => setShowReject(true);
  const handleCloseReject = () => setShowReject(false);
  const handleShowApprove = () => setShowApprove(true);
  const handleCloseApprove = () => setShowApprove(false);

  const confirmReject = (e) => {
    e.preventDefault();
    setShowReject(false);
  };

  const confirmApprove = (e) => {
    e.preventDefault();
    setShowApprove(false);
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
            Payment Invoice Details
          </h5>
        </div>
        <div className="form" style={{marginTop: '3%'}}>
          <div style={{
            position: "relative",
            float: "left",
            left: "-0.781rem",
            top: "7rem",
            }}>
            <button
              onClick={() => onButtonClick("pagethree")}
              style={{backgroundColor: 'white'}}
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
              onClick={() => onButtonClick("pagefive")}
              style={{backgroundColor: 'white'}}
              // disabled={!orderPlaced}
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
          <div className="row m-2">
            <div className="col-lg-6" style={{marginLeft: '-2.5%'}}>
              <label>FPO ID</label>
            </div>
            <div className="col-lg-6" style={{marginLeft: '2.5%'}}>
              <input 
                className="form-control" 
                type="text" 
                disabled={true}
                value={fpoInvoice.id}
                style={{width: '105%'}}
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
                }}
              >
                view
              </button>
            </div>
          </div>
          <div>
            <Modal show={showInvoice} onHide={handleCloseInvoice}>
              <Modal.Header closeButton>Invoice</Modal.Header>
              <Modal.Body>
                <img
                  src={logo}
                  alt="Payment Image"
                  style={{ width: "100%", height: "100%" }}
                />
              </Modal.Body>
            </Modal>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <button 
                className="btn btn-success" 
                style={{marginTop: '5rem', backgroundColor: '#064420'}}
                onClick={(e) => {
                  e.preventDefault();
                  handleShowReject()
                }}
              >
                Reject
              </button>
            </div>
            <div className="col-lg-6" style={{display: "flex", justifyContent: "flex-end"}}>
              <button 
                className="btn btn-success" 
                style={{marginTop: '5rem', backgroundColor: '#064420'}}
                onClick={(e) => {
                  e.preventDefault();
                  handleShowApprove()
                }}
              >
                Approve
              </button>
            </div>
          </div>
          <div>
            <Modal show={showReject} onHide={handleCloseReject}>
              <Modal.Header closeButton>Invoice</Modal.Header>
              <Modal.Body>
                <p>
                  Are you sure you want to reject the invoice?
                </p>
                <div className="col-lg-12" style={{display: "flex", justifyContent: "flex-end"}}>
                  <button 
                    className="btn btn-success" 
                    style={{backgroundColor: '#064420'}}
                    onClick={(e) => confirmReject(e)}
                  >
                    Reject
                  </button>
                </div>
              </Modal.Body>
            </Modal>
          </div>
          <div>
            <Modal show={showApprove} onHide={handleCloseApprove}>
              <Modal.Header closeButton>Invoice</Modal.Header>
              <Modal.Body>
                <p>
                  Are you sure you want to approve the invoice?
                </p>
                <div className="col-lg-12" style={{display: "flex", justifyContent: "flex-end"}}>
                  <button 
                    className="btn btn-success" 
                    style={{backgroundColor: '#064420'}}
                    onClick={(e) => confirmApprove(e)}
                  >
                    Approve
                  </button>
                </div>
              </Modal.Body>
            </Modal>
          </div>
          {/* <div className="row m-2">
            <div className="col-lg-6">
              <button 
                className="btn btn-success" 
                style={{marginTop: '5rem', backgroundColor: '#064420'}}
                onClick={() => onButtonClick("pagethree")}
              >
                Back
              </button>
            </div>
            <div className="col-lg-6" style={{display: "flex", justifyContent: "flex-end"}}>
              <button 
                className="btn btn-success" 
                style={{marginTop: '5rem', backgroundColor: '#064420'}}
                onClick={() => onButtonClick("pagefive")}
              >
                Next
              </button>
            </div>
          </div> */}
        </div>
      </form>
    </main>
  );
};

export default PageFour;
