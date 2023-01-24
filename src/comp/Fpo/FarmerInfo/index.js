import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import ConfirmPurchaseHistory from "../Modals/FarmerInfo/ConfirmPurchaseHistory";
import RepaymentStructure2 from "../Modals/FarmerInfo/RepaymentStructure2";
import RepaymentStructure from "../Modals/FarmerInfo/RepaymentStructure";
import ConfirmSaleHistory from "../Modals/FarmerInfo/ConfirmSaleHistory";
import PurchaseHistory2 from "../Modals/FarmerInfo/PurchaseHistory2";
import PurchaseHistory from "../Modals/FarmerInfo/PurchaseHistory";
import LoanApplication from "../Modals/FarmerInfo/LoanApplication";
import SaleHistory2 from "../Modals/FarmerInfo/SaleHistory2";
import SaleHistory from "../Modals/FarmerInfo/SaleHistory";
import Img from "../Modals/FarmerInfo/Img";

const style1 = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

const style2 = {
  backgroundColor: "#FFD700",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

const style3 = {
  backgroundColor: "#064420",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
  color: "#fff",
}

function FarmerInformation() {
  const [showConfirmPurchase, setShowConfirmPurchase] = useState(false)
  const [showPurchaseDetails, setShowPurchaseDetails] = useState(false)
  const [showAddPurchase, setShowAddPurchase] = useState(false)
  const [showSaleDetails, setShowSaleDetails] = useState(false)
  const [showConfirmSale, setShowConfirmSale] = useState(false)
  const [showRepayment, setShowRepayment] = useState(false)
  const [showAddSale, setShowAddSale] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)
  const [toggleState, setToggleState] = useState(1)
  const [showImg, setShowImg] = useState(false)
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const checkActive = (index, className) =>
    activeIndex === index ? className : ""

  const handleCloseConfirmPurchase = () => setShowConfirmPurchase(false)
  const handleClosePurchaseDetails = () => setShowPurchaseDetails(false)
  const handleShowConfirmPurchase = () => setShowConfirmPurchase(true)
  const handleShowPurchaseDetails = () => setShowPurchaseDetails(true)
  const handleCloseConfirmSale = () => setShowConfirmSale(false)
  const handleCloseAddPurchase = () => setShowAddPurchase(false)
  const handleCloseSaleDetails = () => setShowSaleDetails(false)
  const handleShowAddPurchase = () => setShowAddPurchase(true)
  const handleShowSaleDetails = () => setShowSaleDetails(true)
  const handleShowConfirmSale = () => setShowConfirmSale(true)
  const handleCloseAddSale = () => setShowAddSale(false)
  const handleShowAddSale = () => setShowAddSale(true)
  const handleClick = i => setActiveIndex(i)

  const toggleTab = (index) => setToggleState(index)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleShowRepayment = () => setShowRepayment(true)
  const handleCloseRepayment = () => setShowRepayment(false)

  const handleShowImg = () => setShowImg(true)
  const handleCloseImg = () => setShowImg(false)

  const handleClick2 = () => navigate('/fpo/farmer', { replace: true })

  return (
    <main id="main_container" className="main_container container-fluid">
      <div className="">
        <h3 className="mb-4">Farmer Information</h3>
      </div>
      <div className="list_container">
        <div className="back_btn mt-3 mb-4">
          <button onClick={handleClick2}>
            <ArrowBackIcon className="btn_icon" />
            Back to Farmer Page
          </button>
        </div>

        <div className="list_tab">
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
              <div className="loan_container">
                <div className="bloc-tabs">
                  <button
                    style={{ marginRight: "10px" }}
                    className={toggleState === 1 ? "tabs-1 active-tabs" : "tabs-1"}
                    onClick={() => toggleTab(1)}
                  >
                    Active Loans
                  </button>
                  <button
                    style={{ marginRight: "10px" }}
                    className={toggleState === 2 ? "tabs-1 active-tabs" : "tabs-1"}
                    onClick={() => toggleTab(2)}
                  >
                    Loan History
                  </button>
                  <button
                    className={toggleState === 3 ? "tabs-1 active-tabs" : "tabs-1"}
                    onClick={() => toggleTab(3)}
                  >
                    Loan in Process
                  </button>
                </div>

                <div className="content-tabs">
                  <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                  >
                    <div className="card_table1 text-center">
                      <div className=" table-responsive">
                        <table>
                          <thead
                            style={{
                              color: "#00A877",
                              fontSize: "17px",
                              verticalAlign: "top",
                              fontWeight: "bold",
                              borderBottom: "1px solid #c7ccd1",
                            }}
                          >
                            <tr>
                              <th>Loan Id</th>
                              <th>Loan Application Date</th>
                              <th>Loan Amount</th>
                              <th>Loan Date</th>
                              <th>Outstanding Amount</th>
                              <th>Next Payment Amount</th>
                              <th>Next Payment Date</th>
                              <th>Repayment Structure</th>
                              <th>Status</th>
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
                              <td>2022-800-07</td>
                              <td>01-05-2022</td>
                              <td>₹ 98765</td>
                              <td> 13-07-2022</td>
                              <td>₹ 3778</td>
                              <td>₹ 761434</td>
                              <td> 24-09-2022</td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style1}
                                  onClick={handleShowRepayment}
                                >
                                  View
                                </button>
                              </td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style2}
                                >
                                  Pending
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>2022-800-07</td>
                              <td>01-05-2022</td>
                              <td>₹ 98765</td>
                              <td> 13-07-2022</td>
                              <td>₹ 3778</td>
                              <td>₹ 761434</td>
                              <td> 24-09-2022</td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style1}
                                  onClick={handleShowRepayment}
                                >
                                  View
                                </button>
                              </td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style2}
                                >
                                  Pending
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                  >
                    <div className="card_table1 text-center">
                      <div className=" table-responsive">
                        <table>
                          <thead
                            style={{
                              color: "#00A877",
                              fontSize: "17px",
                              verticalAlign: "top",
                              fontWeight: "bold",
                              borderBottom: "1px solid #c7ccd1",
                            }}
                          >
                            <tr>
                              <th>Loan Id</th>
                              <th>Loan Application Date</th>
                              <th>Loan Amount</th>
                              <th>Loan Date</th>
                              <th>Outstanding Amount</th>
                              <th>Next Payment Amount</th>
                              <th>Next Payment Date</th>
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
                              <td>2022-800-07</td>
                              <td>01-05-2022</td>
                              <td>₹ 98765</td>
                              <td> 13-07-2022</td>
                              <td>₹ 3778</td>
                              <td>₹ 761434</td>
                              <td> 24-09-2022</td>
                            </tr>
                            <tr>
                              <td>2022-800-07</td>
                              <td>01-05-2022</td>
                              <td>₹ 98765</td>
                              <td> 13-07-2022</td>
                              <td>₹ 3778</td>
                              <td>₹ 761434</td>
                              <td> 24-09-2022</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                  >
                    <div className="card_table1 text-center">
                      <div className=" table-responsive">
                        <table>
                          <thead
                            style={{
                              color: "#00A877",
                              fontSize: "17px",
                              verticalAlign: "top",
                              fontWeight: "bold",
                              borderBottom: "1px solid #c7ccd1",
                            }}
                          >
                            <tr>
                              <th>Loan Id</th>
                              <th>Loan Application Date</th>
                              <th>Loan Amount</th>
                              <th>Loan Application</th>
                              <th>Status</th>
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
                              <td>2022-64-07</td>
                              <td>02-05-2022</td>
                              <td>₹ 7345</td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style1}
                                  onClick={handleShow}
                                >
                                  View
                                </button>
                              </td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style2}
                                >
                                  Pending
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>2022-64-07</td>
                              <td>02-05-2022</td>
                              <td>₹ 7345</td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style1}
                                >
                                  View
                                </button>
                              </td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style2}
                                >
                                  Pending
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>2022-64-07</td>
                              <td>02-05-2022</td>
                              <td>₹ 7345</td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style1}
                                >
                                  View
                                </button>
                              </td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style2}
                                >
                                  Pending with samunnati
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>2022-64-07</td>
                              <td>02-05-2022</td>
                              <td>₹ 7345</td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={{
                                    backgroundColor: "#064420",
                                    color: "#fff",
                                    alignItems: "center",
                                    borderRadius: "5px",
                                    border: "none",
                                    padding: "5px 10px",
                                    width: "fit-content",
                                    fontSize: ".75rem",
                                    lineHeight: "1rem",
                                    textAlign: "center",
                                  }}
                                >
                                  View
                                </button>
                              </td>
                              <td>
                                <button
                                  className="py-0.5"
                                  style={style2}
                                >
                                  Pending with samunnati
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`panel ${checkActive(3, "active")}`}>
              <div>
                <button
                  onClick={handleShowAddPurchase}
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
                      }}
                    >
                      <tr>
                        <td>SAM107254367</td>
                        <td>17-02-22</td>
                        <td>520</td>
                        <td>
                          <button
                            style={style3}
                            onClick={handleShowPurchaseDetails}
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
                            style={style3}
                            onClick={handleShowPurchaseDetails}
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
                            style={style3}
                            onClick={handleShowSaleDetails}
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
                            style={style3}
                            onClick={handleShowSaleDetails}
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
                            style={style3}
                            onClick={handleShowSaleDetails}
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
          </div>
        </div>
      </div>

      <ConfirmPurchaseHistory
        showConfirmPurchase={showConfirmPurchase}
        handleCloseConfirmPurchase={handleCloseConfirmPurchase}
      />

      <ConfirmSaleHistory
        showConfirmSale={showConfirmSale}
        handleCloseConfirmSale={handleCloseConfirmSale}
      />

      <PurchaseHistory
        showPurchaseDetails={showPurchaseDetails}
        handleClosePurchaseDetails={handleClosePurchaseDetails}
      />

      <SaleHistory
        showAddSale={showAddSale}
        handleCloseAddSale={handleCloseAddSale}
        handleShowConfirmSale={handleShowConfirmSale}
      />

      <SaleHistory2
        showSaleDetails={showSaleDetails}
        handleCloseSaleDetails={handleCloseSaleDetails}
      />

      <PurchaseHistory2
        showAddPurchase={showAddPurchase}
        handleShowAddPurchase={handleShowAddPurchase}
        handleCloseAddPurchase={handleCloseAddPurchase}
        handleShowConfirmPurchase={handleShowConfirmPurchase}
      />

      <RepaymentStructure
        showRepayment={showRepayment}
        handleCloseRepayment={handleCloseRepayment}
      />

      <RepaymentStructure2
        showRepayment={showRepayment}
        handleCloseRepayment={handleCloseRepayment}
      />

      <LoanApplication
        show={show}
        handleClose={handleClose}
        handleShowImg={handleShowImg}
      />

      <Img
        showImg={showImg}
        handleCloseImg={handleCloseImg}
      />
    </main>
  )
}

export default FarmerInformation