/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Today } from "@mui/icons-material";
import Modal from "react-bootstrap/Modal";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PageTwo = ({onButtonClick}) => {
  const [showConfirmBox, setShowConfirmBox] = useState(false);
  const [currentFPO, setCurrentFPO] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  let fpoBids = [
    {
      id: 1,
      amount: 100000,
      name: "FPO 1",
      village: "Village 1",
      phoneNumber: "1234567890",
      orderPlaced: false
    },
    {
      id: 2,
      amount: 100000,
      name: "FPO 2",
      village: "Village 2",
      phoneNumber: "1234567890",
      orderPlaced: false
    },
    {
      id: 3,
      amount: 80000,
      name: "FPO 3",
      village: "Village 3",
      phoneNumber: "1234567890",
      orderPlaced: false
    },
    {
      id: 4,
      amount: 120000,
      name: "FPO 4",
      village: "Village 4",
      phoneNumber: "1234567890",
      orderPlaced: false
    },
    {
      id: 5,
      amount: 110000,
      name: "FPO 5",
      village: "Village 5",
      phoneNumber: "1234567890",
      orderPlaced: false
    },
  ];

  const confirmOrder = (e) => {
    e.preventDefault();
    setShowConfirmBox(true);
  };

  const handleCloseConfirmBox = () => {
    setShowConfirmBox(false);
  };

  const placeOrder = (e) => {
    e.preventDefault();
    currentFPO.orderPlaced = true;
    setShowConfirmBox(false);
  };

  const checkOrderPlaced = () => {
    let orderPlaced = false;
    fpoBids.forEach((fpo) => {
      if (fpo.orderPlaced) {
        orderPlaced = true;
      }
    });
    if(currentFPO.orderPlaced) {
      orderPlaced = true;
    }
    setOrderPlaced(orderPlaced);
  };

  useEffect(() => {
    checkOrderPlaced();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fpoBids, currentFPO]);

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
            Place Order
          </h5>
        </div>
        <div className="form" style={{marginTop: '3%'}}>
          <div style={{
            position: "relative",
            float: "left",
            left: "-0.781rem",
            top: "4rem",
            }}>
            <button
              onClick={() => onButtonClick("pageone")}
              style={{backgroundColor: 'white'}}
            >
              <ArrowBackIosIcon />
            </button>
          </div>
          <div style={{
            position: "relative",
            float: "right",
            right: "-0.781rem",
            top: "4rem",
            }}>
            <button
              onClick={() => onButtonClick("pagethree")}
              style={{backgroundColor: 'white'}}
              disabled={!orderPlaced}
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
          <div className=" table-responsive">
            <table className="table table-borderless">
              <thead
                style={{
                  color: "#064420",
                  fontSize: "18px",
                  verticalAlign: "top",
                  fontWeight: 600
                }}
              >
                <tr>
                  <td>FPO ID</td>
                  <td>FPO Name</td>
                  <td>Phone Number</td>
                  <td>Bid Amount</td>
                  <td>Place Order</td>
                </tr>
              </thead>
              <tbody
                style={{
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {fpoBids.map((fpo) => (
                  <tr>
                    <td>{fpo.id}</td>
                    <td>{fpo.name}</td>
                    <td>{fpo.phoneNumber}</td>
                    <td>{fpo.amount}</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "#064420",
                          color: "#fff",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "0.25rem 1rem",
                          width: "fit-content",
                          fontSize: ".75rem",
                          lineHeight: "1rem",
                        }}
                        onClick={(e) => {
                          setCurrentFPO(fpo);
                          confirmOrder(e);
                        }}
                        disabled={orderPlaced}
                        className="btn btn-success" 
                      >
                        Place Order
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <Modal show={showConfirmBox} onHide={handleCloseConfirmBox}>
              <Modal.Header closeButton>Confirm Order</Modal.Header>
              <Modal.Body>
                <p>
                  Are you sure you want to place order with FPO {currentFPO.id} for {currentFPO.amount} rupees?
                </p>
                <div className="col-lg-12" style={{display: "flex", justifyContent: "flex-end"}}>
                  <button 
                    className="btn btn-success" 
                    style={{backgroundColor: '#064420'}}
                    onClick={(e) => placeOrder(e)}
                  >
                    Confirm
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
                onClick={() => onButtonClick("pageone")}
              >
                Back
              </button>
            </div>
            <div className="col-lg-6" style={{display: "flex", justifyContent: "flex-end"}}>
              <button 
                className="btn btn-success" 
                style={{marginTop: '5rem', backgroundColor: '#064420'}}
                onClick={() => onButtonClick("pagethree")}
                disabled={!orderPlaced}
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

export default PageTwo;
