import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import logo from "../../../assets/img/logo.png";

function LoanInfoTab() {
  const [showRepayment, setShowRepayment] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [showImg, setShowImg] = useState(false);
  const [show, setShow] = useState(false);

  const toggleTab = (index) => setToggleState(index)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowRepayment = () => setShowRepayment(true)
  const handleCloseRepayment = () => setShowRepayment(false);

  const handleShowImg = () => setShowImg(true);
  const handleCloseImg = () => setShowImg(false);

  return (
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
                    // textAlign: "center",
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
                        }}
                        onClick={handleShowRepayment}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        className="py-0.5"
                        style={{
                          backgroundColor: "#FFD700",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "5px 10px",
                          width: "fit-content",
                          fontSize: ".75rem",
                          lineHeight: "1rem",
                        }}
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
                        }}
                        onClick={handleShowRepayment}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        className="py-0.5"
                        style={{
                          backgroundColor: "#FFD700",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "5px 10px",
                          width: "fit-content",
                          fontSize: ".75rem",
                          lineHeight: "1rem",
                        }}
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
                    // textAlign: "center",
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
                        }}
                        onClick={handleShow}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        className="py-0.5"
                        style={{
                          backgroundColor: "#FFD700",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "5px 10px",
                          width: "fit-content",
                          fontSize: ".75rem",
                          lineHeight: "1rem",
                        }}
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
                        }}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        className="py-0.5"
                        style={{
                          backgroundColor: "#FFD700",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "5px 10px",
                          width: "fit-content",
                          fontSize: ".75rem",
                          lineHeight: "1rem",
                        }}
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
                        }}
                      >
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        className="py-0.5"
                        style={{
                          backgroundColor: "#FFD700",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "5px 10px",
                          width: "fit-content",
                          fontSize: ".75rem",
                          lineHeight: "1rem",
                        }}
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
                        style={{
                          backgroundColor: "#FFD700",
                          alignItems: "center",
                          borderRadius: "5px",
                          border: "none",
                          padding: "5px 10px",
                          width: "fit-content",
                          fontSize: ".75rem",
                          lineHeight: "1rem",
                        }}
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

      <Modal
        size="xl"
        show={showRepayment}
        onHide={handleCloseRepayment}
      >
        <Modal.Header closeButton>
          Repayment Structure
        </Modal.Header>
        <Modal.Body>
          <div className="repayment_title">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-6">
                    <strong>Loan ID : </strong>
                  </div>
                  <div className="col-6">
                    <span>12345</span>
                  </div>
                  <div className="col-6">
                    <strong>FPO Name : </strong>
                  </div>
                  <div className="col-6">
                    <span>abcd</span>
                  </div>
                  <div className="col-6">
                    <strong>Loan Amount : </strong>
                  </div>
                  <div className="col-6">
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-6">
                    <strong>Loan Period in Years : </strong>
                  </div>
                  <div className="col-6">
                    <span>1</span>
                  </div>
                  <div className="col-6">
                    <strong>No of Payment Per Year : </strong>
                  </div>
                  <div className="col-6">
                    <span>1</span>
                  </div>
                  <div className="col-6">
                    <strong>Annual Interest Rate : </strong>
                  </div>
                  <div className="col-6">
                    <span>14%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <table style={{ border: "1px solid #eee" }}>
              <thead style={{ backgroundColor: "#eee" }}>
                <tr>
                  <th>Payment Number</th>
                  <th>Payment Date</th>
                  <th>Principle Amount</th>
                  <th>Interest Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123456</td>
                  <td>12-09-2021</td>
                  <td>400</td>
                  <td>14%</td>
                  <td>status</td>
                </tr>
                <tr>
                  <td>123456</td>
                  <td>12-09-2021</td>
                  <td>400</td>
                  <td>14%</td>
                  <td>status</td>
                </tr>
                <tr>
                  <td>123456</td>
                  <td>12-09-2021</td>
                  <td>400</td>
                  <td>14%</td>
                  <td>status</td>
                </tr>
                <tr>
                  <td>123456</td>
                  <td>12-09-2021</td>
                  <td>400</td>
                  <td>14%</td>
                  <td>status</td>
                </tr>
                <tr>
                  <td>123456</td>
                  <td>12-09-2021</td>
                  <td>400</td>
                  <td>14%</td>
                  <td>status</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          Loan Application
        </Modal.Header>
        <Modal.Body>
          <div className="row ">
            <div className="col">
              <form>
                <div className="form">
                  <div className="card p-2">
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Name as per PAN</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                          value={"Name"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Email</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="email"
                          value={"Email"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Mobile</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="number"
                          value={"1234567890"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Aadhaar Number</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="number"
                          value={"1234567890"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>PAN Card Number</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="number"
                          value={"1234567890"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Address</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                          value={"Address"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Income Type</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                          value={"Income Type"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Amount Required</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="number"
                          value={"100000"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Date of Birth</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="date"
                          value={"2021-10-10"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Land Owned</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                          value={"Land Owned"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-lg-6">
                        <label>Reason for loan</label>
                      </div>
                      <div className="col-lg-6">
                        <input
                          className="form-control"
                          type="text"
                          value={"Reason"}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-12 col-md-6">
                        <label className="form-label">
                          Aadhar Picture
                        </label>
                        <button
                          className="py-0.5"
                          style={{
                            backgroundColor: "#064420",
                            color: "#fff",
                            alignItems: "center",
                            borderRadius: "5px",
                            border: "none",
                            padding: "5px 10px",
                            width: "100%",
                            fontSize: ".75rem",
                            lineHeight: "1.7rem",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            handleShowImg();
                          }}
                        >
                          View
                        </button>
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label">
                          PAN Card Picture
                        </label>
                        <button
                          className="py-0.5"
                          style={{
                            backgroundColor: "#064420",
                            color: "#fff",
                            alignItems: "center",
                            borderRadius: "5px",
                            border: "none",
                            padding: "5px 10px",
                            width: "100%",
                            fontSize: ".75rem",
                            lineHeight: "1.7rem",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            handleShowImg();
                          }}
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-12 col-md-6">
                        <label className="form-label">
                          Bank Statements
                        </label>
                        <button
                          className="py-0.5"
                          style={{
                            backgroundColor: "#064420",
                            color: "#fff",
                            alignItems: "center",
                            borderRadius: "5px",
                            border: "none",
                            padding: "5px 10px",
                            width: "100%",
                            fontSize: ".75rem",
                            lineHeight: "1.7rem",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            handleShowImg();
                          }}
                        >
                          View
                        </button>
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label">
                          Address Proof
                        </label>
                        <button
                          className="py-0.5"
                          style={{
                            backgroundColor: "#064420",
                            color: "#fff",
                            alignItems: "center",
                            borderRadius: "5px",
                            border: "none",
                            padding: "5px 10px",
                            width: "100%",
                            fontSize: ".75rem",
                            lineHeight: "1.7rem",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            handleShowImg();
                          }}
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="row m-2">
                      <div className="col-md-6">
                        <button className="btn btn-success w-100" style={{ backgroundColor: "#064420", marginTop: "3rem" }}>
                          Approve
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button className="btn btn-success w-100" style={{ backgroundColor: "#064420", marginTop: "3rem" }}>
                          Reject
                        </button>
                      </div>
                    </div>
                    <div className="row m-2">
                      <button className="btn btn-success" style={{ backgroundColor: "#064420" }}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showImg} onHide={handleCloseImg}>
        <Modal.Header closeButton>Img</Modal.Header>
        <Modal.Body>

          <img
            src={logo}
            alt="Payment"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      </Modal>

      <Modal
        size="xl"
        show={showRepayment}
        onHide={handleCloseRepayment}
      >
        <Modal.Header closeButton>
          Repayment Structure
        </Modal.Header>
        <Modal.Body>
          <div className="repayment_title">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-6">
                    <strong>Loan ID : </strong>
                  </div>
                  <div className="col-6">
                    <span>12345</span>
                  </div>
                  <div className="col-6">
                    <strong>FPO Name : </strong>
                  </div>
                  <div className="col-6">
                    <span>abcd</span>
                  </div>
                  <div className="col-6">
                    <strong>Loan Amount : </strong>
                  </div>
                  <div className="col-6">
                    <span>400</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-6">
                    <strong>Loan Period in Years : </strong>
                  </div>
                  <div className="col-6">
                    <span>1</span>
                  </div>
                  <div className="col-6">
                    <strong>No of Payment Per Year : </strong>
                  </div>
                  <div className="col-6">
                    <span>1</span>
                  </div>
                  <div className="col-6">
                    <strong>Annual Interest Rate : </strong>
                  </div>
                  <div className="col-6">
                    <span>14%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <table style={{ border: "1px solid #eee" }}>
              <thead style={{ backgroundColor: "#eee" }}>
                <tr>
                  <th>Payment Number</th>
                  <th>Payment Date</th>
                  <th>Principle Amount</th>
                  <th>Interest Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123456</td>
                  <td>12-09-2021</td>
                  <td>400</td>
                  <td>14%</td>
                  <td>status</td>
                </tr>
                <tr>
                  <td>123456</td>
                  <td>12-09-2021</td>
                  <td>400</td>
                  <td>14%</td>
                  <td>status</td>
                </tr>
                <tr>
                  <td>123456</td>
                  <td>12-09-2021</td>
                  <td>400</td>
                  <td>14%</td>
                  <td>status</td>
                </tr>
                <tr>
                  <td>123456</td>
                  <td>12-09-2021</td>
                  <td>400</td>
                  <td>14%</td>
                  <td>status</td>
                </tr>
                <tr>
                  <td>123456</td>
                  <td>12-09-2021</td>
                  <td>400</td>
                  <td>14%</td>
                  <td>status</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LoanInfoTab;
