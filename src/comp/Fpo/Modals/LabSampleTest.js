import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";

function LabSampleTest({ show, handleClose }) {
  const [fpoName, setFpoName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [sampleId, setSampleId] = useState("");
  const [date, setDate] = useState("");
  const [testCategory, setTestCategory] = useState("");
  const [test, setTest] = useState("");
  const [amount, setAmount] = useState(0);
  const [paymentRefNo, setPaymentRefNo] = useState("");
  const [paymentImage, setPaymentImage] = useState("");
  const [lacSampleImage, setLacSampleImage] = useState("");
  const [remarks, setRemarks] = useState("");

  const onChangeFpoName = (e) => {
    setFpoName(e.target.value);
  };

  const onChangeContactNo = (e) => {
    setContactNo(e.target.value);
  };

  const onChangeSampleId = (e) => {
    setSampleId(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeTestCategory = (e) => {
    setTestCategory(e.target.value);
  };

  const onChangeTest = (e) => {
    setTest(e.target.value);
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onChangePaymentRefNo = (e) => {
    setPaymentRefNo(e.target.value);
  };

  const onChangePaymentImage = (e) => {
    setPaymentImage(e.target.value);
  };

  const onChangeLacSampleImage = (e) => {
    setLacSampleImage(e.target.value);
  };

  const onChangeRemarks = (e) => {
    setRemarks(e.target.value);
  };

  const resetInputs = () => {
    setFpoName("");
    setContactNo("");
    setSampleId("");
    setDate("");
    setTestCategory("");
    setTest("");
    setAmount(0);
    setPaymentRefNo("");
    setPaymentImage("");
    setLacSampleImage("");
    setRemarks("");
  };

  const addNewTest = async () => {
    if(fpoName=="" || contactNo=="" || sampleId=="" || date=="" || testCategory=="" || test=="" || amount==0 || paymentRefNo=="" || paymentImage=="" || lacSampleImage=="" || remarks=="") {
      alert("Please fill all details and try again");
      return;
    }

    const newTest = {
      "fpoName": fpoName,
      "fpoContact": contactNo,
      "sampleId": sampleId,
      "dateOfApplication": date,
      "category": testCategory,
      "testName": test,
      "amount": amount,
      "paymentRefNo": paymentRefNo,
      "paymentImg": paymentImage,
      "lacSampleImg": lacSampleImage,
      "remarks": remarks
    }
    
    await axios
      .post("http://13.232.131.203:3000/api/nisa/lactest", newTest)
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
      className="store_card"
    >
      <Modal.Header closeButton>Lab Sample Test</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form>
              <div className="p-2">
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>FPO Name</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" placeholder="FPO Name" onChange={onChangeFpoName}/>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Contact No.</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" placeholder="98765XXXXX" onChange={onChangeContactNo}/>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Sample Id</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" placeholder="SAX34265" onChange={onChangeSampleId}/>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Date</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="date" onChange={onChangeDate}/>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Test Category</label>
                  </div>
                  <div className="col-lg-6">
                    <select className="form-select" required="" onChange={onChangeTestCategory}>
                      <option value="select">Select</option>
                      <option value="category1">option 1</option>
                      <option value="category2">option 2</option>
                    </select>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Test</label>
                  </div>
                  <div className="col-lg-6">
                    <select className="form-select" required="" onChange={onChangeTest}>
                      <option value="select">Select</option>
                      <option value="test1">option 1</option>
                      <option value="test2">option 2</option>
                    </select>
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
                      placeholder="Amount"
                      onChange={onChangeAmount}
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Payment Reference No.</label>
                  </div>
                  <div className="col-lg-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Number"
                      onChange={onChangePaymentRefNo}
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Payment Image</label>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="file"
                      className="form-control"
                      required=""
                      accept="image/*"
                      onChange={onChangePaymentImage}
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Lac Sample Image</label>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="file"
                      className="form-control"
                      required=""
                      accept="image/*"
                      onChange={onChangeLacSampleImage}
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Remarks</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" onChange={onChangeRemarks}/>
                  </div>
                </div>
                <div className="row m-2">
                  <button className="btn btn-success" style={{ backgroundColor: "#064420" }} onClick={(e) => {
                    e.preventDefault();
                    addNewTest();
                  }}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default LabSampleTest