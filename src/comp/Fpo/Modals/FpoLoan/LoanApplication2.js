import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";

function LoanApplication2({ show, handleClose, loanWindow }) {
  const [loanId] = useState("LOAN0001");
  const [nameOfPayee, setNameOfPayee] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscNumber, setIfscNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(12);
  const [tenure, setTenure] = useState(0);
  const [purpose, setPurpose] = useState("");

  const onChangeNameOfPayee = (e) => {
    setNameOfPayee(e.target.value);
  };

  const onChangeAccountNumber = (e) => {
    setAccountNumber(e.target.value);
  };

  const onChangeIfscNumber = (e) => {
    setIfscNumber(e.target.value);
  };

  const onChangeBankName = (e) => {
    setBankName(e.target.value);
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onChangeTenure = (e) => {
    setTenure(e.target.value);
  };

  const onChangePurpose = (e) => {
    setPurpose(e.target.value);
  };

  const resetInputs = () => {
    setNameOfPayee("");
    setAccountNumber("");
    setIfscNumber("");
    setBankName("");
    setAmount(0);
    setInterest(0);
    setTenure(0);
    setPurpose("");
  };

  const applyForLoan = async () => {
    if (nameOfPayee === "" || accountNumber === "" || ifscNumber === "" || bankName === "" || amount === 0 || interest === 0 || tenure === 0 || purpose === "") {
      alert("Please fill all details and try again");
      return;
    }

    const newLoan = {
      "loanWindowId": loanWindow.windowId,
      "loanId": loanId,
      "payeeName": nameOfPayee,
      "accountNumber": accountNumber,
      "ifscNumber": ifscNumber,
      "bankName": bankName,
      "requestedAmount": amount,
      "intrest": interest,
      "loanTenure": tenure,
      "invoice": "doc-1678828880007-578095983.jpg",
      "purpose": purpose,
    };

    await axios
      .post(`http://13.232.131.203:3000/api/loanwindow/${loanWindow.id}/loan`, newLoan)
      .then((response) => {
        console.log(response.data);
        resetInputs();
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.reload();
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>Loan Application</Modal.Header>
      <Modal.Body>
        <div className="row ">
          <div className="col">
            <form>
              <div className="form">
                <div className="p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Loan Window ID</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={loanWindow.windowId}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Loan ID</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Loan Id"
                        value={loanId}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Name of Payee</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        onChange={onChangeNameOfPayee}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Account Number</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        onChange={onChangeAccountNumber}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>IFSC Number</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="number"
                        className="form-control"
                        onChange={onChangeIfscNumber}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Bank Name</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        onChange={onChangeBankName}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Amount</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="number"
                        className="form-control"
                        onChange={onChangeAmount}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Interest Rate (%)</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        value={interest}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Tenure of Loan (in Months)</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        onChange={onChangeTenure}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Attach Invoice</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="file"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Purpose</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        onChange={onChangePurpose}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-12">
                      <button
                        className="btn btn-primary mt-3"
                        style={{
                          float: "right",
                          backgroundColor: "#064420",
                          border: "none",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          applyForLoan();
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default LoanApplication2