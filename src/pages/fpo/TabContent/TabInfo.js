import React, { useState } from "react";
import "../style.css";
import LoanInfoTab from "./LoanInfoTab";
import Modal from "react-bootstrap/Modal";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";

const TabInfo = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const [showAddPurchase, setShowAddPurchase] = useState(false);
  const [showPurchaseDetails, setShowPurchaseDetails] = useState(false);
  const [showSaleDetails, setShowSaleDetails] = useState(false);
  const [showConfirmPurchase, setShowConfirmPurchase] = useState(false);
  const [showConfirmSale, setShowConfirmSale] = useState(false);
  const handleShowAddPurchase = () => {
    setShowAddPurchase(true);
  };
  const handleShowConfirmPurchase = () => {
    setShowConfirmPurchase(true);
  };
  const handleShowConfirmSale = () => {
    setShowConfirmSale(true);
  };
  const handleCloseAddPurchase = () => setShowAddPurchase(false);
  const handleCloseConfirmPurchase = () => setShowConfirmPurchase(false);
  const handleCloseConfirmSale = () => setShowConfirmSale(false);

  const [showAddSale, setShowAddSale] = useState(false);
  const handleShowAddSale = () => {
    setShowAddSale(true);
  };
  const handleCloseAddSale = () => setShowAddSale(false);

  const handleShowPurchaseDetails = () => setShowPurchaseDetails(true);
  const handleClosePurchaseDetails = () => setShowPurchaseDetails(false);

  const handleShowSaleDetails = () => setShowSaleDetails(true);
  const handleCloseSaleDetails = () => setShowSaleDetails(false);

  // Add purchase item details
  const [noOfPurchaseRows, setNoOfPurchaseRows] = useState(1);
  const [noOfSaleRows, setNoOfSaleRows] = useState(1);

  return (
    <>
      <div className="tabs">
        <button
          className={`tab ${checkActive(1, "active")}`}
          onClick={() => handleClick(1)}
        >
          Profile Information
        </button>
        <button
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}
        >
          Loan Information
        </button>
        <button
          className={`tab ${checkActive(3, "active")}`}
          onClick={() => handleClick(3)}
        >
          Purchase History
        </button>
        <button
          className={`tab ${checkActive(4, "active")}`}
          onClick={() => handleClick(4)}
        >
          Sale History
        </button>
      </div>
      <div className="panels">
        <div className={`panel ${checkActive(1, "active")}`}>
          <div className="card_table">
            <h6 className="heading-small text-muted text-bold text-uppercase mb-4">
              farmer information
            </h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      Name
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      Vivek
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      Mobile Number
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      9XXXXXXXXX
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      Date of Birth
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      18-06-1994
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      Gender
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      Male
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      Address
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      9-31/3,blah,blah,blah
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      Aadhaar Number
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      XXXX-XXXX-XXXX
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      PAN Number
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      XXXXXXXXXX
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      Bank Name
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">SBI</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      Bank Account Number
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      XXXXXXXXXX
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      IFSC Code
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label text-black">
                      XXXXXXXXXX
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
          <LoanInfoTab />
        </div>
        <div className={`panel ${checkActive(3, "active")}`}>
          <div>
            <button
              onClick={() => {
                handleShowAddPurchase();
              }}
              style={{
                backgroundColor: "#064420",
                border: "none",
                borderRadius: "10px",
                padding: "10px 15px",
                color: "#fff",
                textTransform: "uppercase",
                fontSize: "12px",
                marginBottom: "15px",
              }}
            >
              Add Purchase
            </button>
            <div>
              <Modal
                show={showAddPurchase}
                size="xl"
                onHide={handleCloseAddPurchase}
              >
                <Modal.Header closeButton>Purchase History</Modal.Header>
                <Modal.Body>
                  <div className="card_table1 table-responsive">
                    <table>
                      <thead
                        style={{
                          color: "green",
                          fontSize: "17px",
                          verticalAlign: "top",
                          fontWeight: "bold",
                          borderBottom: "1px solid #c7ccd1",
                        }}
                      >
                        <tr>
                          <th>Purchase Id</th>
                          <th>Date of Purchase</th>
                          <th>Item Name</th>
                          <th>Quantity</th>
                          <th>Rate/Unit</th>
                          <th>Amount</th>
                          <th>Remarks</th>
                        </tr>
                      </thead>
                      <tbody
                        style={{
                          color: "#000",
                          fontSize: "15px",
                          fontWeight: "500",
                          // textAlign: "center",
                        }}
                      >
                        {[...Array(noOfPurchaseRows)].map(
                          (elementInArray, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="SAM107254367"
                                    style={{ width: "130px" }}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="17-02-22"
                                    style={{ width: "130px" }}
                                  />
                                </td>
                                <td>
                                  <select
                                    style={{ width: "70%" }}
                                    className="select form-control-sm"
                                    required
                                    name="Less than 25 lakhs"
                                    data-mdb-filter="true"
                                    data-mdb-validation="true"
                                    data-mdb-valid-feedback=" "
                                    data-mdb-container=".modal"
                                    data-mdb-invalid-feedback=" "
                                    data-mdb-option-height="50"
                                  >
                                    <option value="select">Select</option>
                                    <option value="">Nylon Bag</option>
                                    <option value="">--</option>
                                  </select>
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="2 kg"
                                    style={{ width: "130px" }}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="3"
                                    style={{ width: "130px" }}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="520"
                                    style={{ width: "130px" }}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="Remarks"
                                    style={{ width: "130px" }}
                                  />
                                </td>
                                <td>
                                  <HighlightOffTwoToneIcon
                                    onClick={() =>
                                      setNoOfPurchaseRows(noOfPurchaseRows - 1)
                                    }
                                    style={{
                                      cursor: "pointer",
                                    }}
                                  />
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="purchase-add-button mt-4">
                    <button
                      onClick={() => {
                        handleShowAddPurchase();
                        setNoOfPurchaseRows(noOfPurchaseRows + 1);
                      }}
                      style={{
                        backgroundColor: "#064420",
                        border: "none",
                        borderRadius: "10px",
                        padding: "10px 15px",
                        color: "#fff",
                        fontSize: "12px",
                        marginBottom: "15px",
                      }}
                    >
                      Add Details
                    </button>
                    <div
                      style={{
                        display: "flex",
                        position: "relative",
                        float: "right",
                      }}
                    >
                      <label>Total Sum :</label>
                      <input
                        type="text"
                        placeholder=""
                        style={{
                          width: "130px",
                          padding: "0 10px",
                          marginLeft: "10px",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      float: "right",
                      right: "30px",
                      top: "10px",
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: "#064420",
                        border: "none",
                        borderRadius: "10px",
                        padding: "10px 15px",
                        color: "#fff",
                        fontSize: "15px",
                        marginBottom: "15px",
                      }}
                      onClick={() => {
                        handleShowConfirmPurchase();
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div>
            <Modal
              show={showConfirmPurchase}
              onHide={handleCloseConfirmPurchase}
            >
              <Modal.Header closeButton>Confirm Purchase History</Modal.Header>
              <Modal.Body>
                <p>Are you confirm?</p>
                <div style={{ display: "flex", justifyContent: "space-between"}} >
                  <button
                    style={{
                      backgroundColor: "#064420",
                      border: "none",
                      borderRadius: "5px",
                      padding: "10px 15px",
                      color: "#fff",
                      fontSize: "15px",
                      width: "20%",
                      marginBottom: "15px",
                    }}
                  >
                    Yes
                  </button>
                  <button
                    style={{
                      backgroundColor: "#064420",
                      border: "none",
                      borderRadius: "5px",
                      padding: "10px 15px",
                      color: "#fff",
                      fontSize: "15px",
                      width: "20%",
                      marginBottom: "15px",
                    }}
                  >
                    No
                  </button>
                </div>
              </Modal.Body>
            </Modal>
          </div>
          <div className="card_table1">
            <div className=" table-responsive">
              <table>
                <thead
                  style={{
                    color: "green",
                    fontSize: "17px",
                    verticalAlign: "top",
                    fontWeight: "bold",
                    borderBottom: "1px solid #c7ccd1",
                  }}
                >
                  <tr>
                    <th>Purchase Id</th>
                    <th>Date of Purchase</th>
                    <th>Total Amount</th>
                    <th>Item Details</th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: "500",
                    // textAlign: "center",
                  }}
                >
                  <tr>
                    <td>SAM107254367</td>
                    <td>17-02-22</td>
                    <td>520</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "#064420",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "0.25rem 1rem",
                          width: "fit-content",
                          fontSize: ".75rem",
                          lineHeight: "1rem",
                          color: "#fff",
                        }}
                        onClick={() => {
                          handleShowPurchaseDetails();
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>SAM107254367</td>
                    <td>17-02-22</td>
                    <td>520</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "#064420",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "0.25rem 1rem",
                          width: "fit-content",
                          fontSize: ".75rem",
                          lineHeight: "1rem",
                          color: "#fff",
                        }}
                        onClick={() => {
                          handleShowPurchaseDetails();
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/*view button modal*/}
        <div>
          <Modal
            show={showPurchaseDetails}
            size="lg"
            onHide={handleClosePurchaseDetails}
          >
            <Modal.Header closeButton>Purchase History</Modal.Header>
            <Modal.Body>
              <div className="card_table1 table-responsive">
                <table>
                  <thead
                    style={{
                      color: "green",
                      fontSize: "17px",
                      verticalAlign: "top",
                      fontWeight: "bold",
                      borderBottom: "1px solid #c7ccd1",
                    }}
                  >
                    <tr>
                      <th>Purchase Id</th>
                      <th>Date of Purchase</th>
                      <th>Item Name</th>
                      <th>Quantity</th>
                      <th>Rate/Unit</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      color: "#000",
                      fontSize: "15px",
                      fontWeight: "500",
                      // textAlign: "center",
                    }}
                  >
                    <tr>
                      <td>SAM107254367</td>
                      <td>17-02-22</td>
                      <td>Nylon Bag</td>
                      <td>2 kg</td>
                      <td>2</td>
                      <td>520</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <div className={`panel ${checkActive(4, "active")}`}>
          <div>
            <button
              onClick={handleShowAddSale}
              style={{
                backgroundColor: "#064420",
                border: "none",
                borderRadius: "10px",
                padding: "10px 15px",
                color: "#fff",
                textTransform: "uppercase",
                fontSize: "12px",
                marginBottom: "15px",
              }}
            >
              Add Sale
            </button>
            <div>
              <Modal show={showAddSale} size="xl" onHide={handleCloseAddSale}>
                <Modal.Header closeButton>Sale History</Modal.Header>
                <Modal.Body>
                  <div className="card_table1 table-responsive">
                    <table>
                      <thead
                        style={{
                          color: "green",
                          fontSize: "17px",
                          verticalAlign: "top",
                          fontWeight: "bold",
                          borderBottom: "1px solid #c7ccd1",
                        }}
                      >
                        <tr>
                          <th>Sale Id</th>
                          <th>Date of Sale</th>
                          <th>Type of Lac</th>
                          <th>Quantity</th>
                          <th>Rate/Unit</th>
                          <th>Amount</th>
                          <th>Remarks</th>
                        </tr>
                      </thead>
                      <tbody
                        style={{
                          color: "#000",
                          fontSize: "15px",
                          fontWeight: "500",
                          // textAlign: "center",
                        }}
                      >
                        {[...Array(noOfSaleRows)].map(
                          (elementInArray, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="SAM107254367"
                                    style={{ width: "130px" }}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="17-02-22"
                                    style={{ width: "130px" }}
                                  />
                                </td>
                                <td>
                                  <select
                                    style={{ width: "70%" }}
                                    className="select form-control-sm"
                                    required
                                    name="Less than 25 lakhs"
                                    data-mdb-filter="true"
                                    data-mdb-validation="true"
                                    data-mdb-valid-feedback=" "
                                    data-mdb-container=".modal"
                                    data-mdb-invalid-feedback=" "
                                    data-mdb-option-height="50"
                                  >
                                    <option value="select">Select</option>
                                    <option value="">Stick Lac</option>
                                    <option value="">Shellac Lac</option>
                                  </select>
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="2 kg"
                                    style={{ width: "130px" }}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="3"
                                    style={{ width: "130px" }}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="520"
                                    style={{ width: "130px" }}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="Remarks"
                                    style={{ width: "130px" }}
                                  />
                                </td>
                                <td>
                                  <HighlightOffTwoToneIcon
                                    onClick={() =>
                                      setNoOfSaleRows(noOfSaleRows - 1)
                                    }
                                    style={{
                                      cursor: "pointer",
                                    }}
                                  />
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="purchase-add-button mt-4">
                    <button
                      onClick={() => {
                        handleShowAddSale();
                        setNoOfSaleRows(noOfSaleRows + 1);
                      }}
                      style={{
                        backgroundColor: "#064420",
                        border: "none",
                        borderRadius: "10px",
                        padding: "10px 15px",
                        color: "#fff",
                        fontSize: "12px",
                        marginBottom: "15px",
                      }}
                    >
                      Add Details
                    </button>
                    <div
                      style={{
                        display: "flex",
                        position: "relative",
                        float: "right",
                      }}
                    >
                      <label>Total Sum :</label>
                      <input
                        type="text"
                        style={{
                          width: "130px",
                          padding: "0 10px",
                          marginLeft: "10px",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      float: "right",
                      right: "30px",
                      top: "10px",
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: "#064420",
                        border: "none",
                        borderRadius: "10px",
                        padding: "10px 15px",
                        color: "#fff",
                        fontSize: "15px",
                        marginBottom: "15px",
                      }}
                      onClick={() => {
                        handleShowConfirmSale();
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div>
            <Modal
              show={showConfirmSale}
              onHide={handleCloseConfirmSale}
            >
              <Modal.Header closeButton>Confirm Sale History</Modal.Header>
              <Modal.Body>
                <p>Are you confirm?</p>
                <div style={{ display: "flex", justifyContent: "space-between"}} >
                  <button
                    style={{
                      backgroundColor: "#064420",
                      border: "none",
                      borderRadius: "5px",
                      padding: "10px 15px",
                      color: "#fff",
                      fontSize: "15px",
                      width: "20%",
                      marginBottom: "15px",
                    }}
                  >
                    Yes
                  </button>
                  <button
                    style={{
                      backgroundColor: "#064420",
                      border: "none",
                      borderRadius: "5px",
                      padding: "10px 15px",
                      color: "#fff",
                      fontSize: "15px",
                      width: "20%",
                      marginBottom: "15px",
                    }}
                  >
                    No
                  </button>
                </div>
              </Modal.Body>
            </Modal>
          </div>
          <div className="card_table1">
            <div className=" table-responsive">
              <table>
                <thead
                  style={{
                    color: "#064420",
                    fontSize: "17px",
                    verticalAlign: "top",
                    fontWeight: "bold",
                    borderBottom: "1px solid #c7ccd1",
                  }}
                >
                  <tr>
                    <th>Sale Id</th>
                    <th>Date of Sale</th>
                    <th>Total Amount</th>
                    <th>Sale Details</th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  <tr>
                    <td>SAM10742671</td>
                    <td>12-02-22</td>
                    <td>₹ 520</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "#064420",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "0.25rem 1rem",
                          width: "fit-content",
                          fontSize: ".75rem",
                          lineHeight: "1rem",
                          color: "#fff",
                        }}
                        onClick={() => {
                          handleShowSaleDetails();
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>SAM10742671</td>
                    <td>12-02-22</td>
                    <td>₹ 520</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "#064420",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "0.25rem 1rem",
                          width: "fit-content",
                          fontSize: ".75rem",
                          lineHeight: "1rem",
                          color: "#fff",
                        }}
                        onClick={() => {
                          handleShowSaleDetails();
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>SAM10742671</td>
                    <td>12-02-22</td>
                    <td>₹ 520</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "#064420",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "0.25rem 1rem",
                          width: "fit-content",
                          fontSize: ".75rem",
                          lineHeight: "1rem",
                          color: "#fff",
                        }}
                        onClick={() => {
                          handleShowSaleDetails();
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <Modal
              show={showSaleDetails}
              size="lg"
              onHide={handleCloseSaleDetails}
            >
              <Modal.Header closeButton>Sale History</Modal.Header>
              <Modal.Body>
                <div className="card_table1 table-responsive">
                  <table>
                    <thead
                      style={{
                        color: "green",
                        fontSize: "17px",
                        verticalAlign: "top",
                        fontWeight: "bold",
                        borderBottom: "1px solid #c7ccd1",
                      }}
                    >
                      <tr>
                        <th>Sale Id</th>
                        <th>Date of Sale</th>
                        <th>Type of Lac</th>
                        <th>Quantity</th>
                        <th>Rate/Unit</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: "500",
                        // textAlign: "center",
                      }}
                    >
                      <tr>
                        <td>SAM107254367</td>
                        <td>17-02-22</td>
                        <td>Stick Lac</td>
                        <td>2 kg</td>
                        <td>2</td>
                        <td>520</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabInfo;
