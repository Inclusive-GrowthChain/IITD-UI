import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import axios from "axios";

function AddNewTest({ showNewTest, handleNewTestClose }) {
  const [testId, setTestId] = useState("Test1");
  const [category, setCategory] = useState("");
  const [testName, setTestName] = useState("");
  const [minQuantity, setMinQuantity] = useState(0);
  const [fee, setFee] = useState(0);
  const [reportingPeriod, setReportingPeriod] = useState(0);

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  }

  const onChangeTestName = (e) => {
    setTestName(e.target.value);
  }

  const onChangeMinQuantity = (e) => {
    setMinQuantity(e.target.value);
  }

  const onChangeFee = (e) => {
    setFee(e.target.value);
  }

  const onChangeReportingPeriod = (e) => {
    setReportingPeriod(e.target.value);
  }

  const resetInputs = () => {
    setCategory("");
    setTestName("");
    setMinQuantity(0);
    setFee(0);
    setReportingPeriod(0);
  }

  const addNewTest = async () => {
    if(category=="" || testName=="" || minQuantity=="" || fee=="" || reportingPeriod=="") {
      alert("Please fill all details and try again");
      return;
    }

    const newTest = {
      "testId": testId,
      "category": category,
      "testName": testName,
      "minRequiredQuantity": minQuantity,
      "testFee": fee,
      "reportingPeriod": reportingPeriod
    };
    
    await axios
      .post("http://13.232.131.203:3000/api/nisa/lac-test", newTest)
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
      show={showNewTest}
      onHide={handleNewTestClose}
    >
      <Modal.Header closeButton>
        Add New Test
      </Modal.Header>
      <Modal.Body>
        <div className="row ">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Test</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        value={testId}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Category</label>
                    </div>
                    <div className="col-lg-12">
                      <select
                        className="form-control"
                        name="category"
                        onChange={onChangeCategory}
                      >
                        <option value="0">
                          Select Category
                        </option>
                        <option value="Shellac / Seedlac / By-product of Lac">
                          Shellac / Seedlac / By-product of Lac
                        </option>
                        <option value="Bleached Lac">
                          Bleached Lac
                        </option>
                        <option value="Lac Dye">Lac Dye</option>
                        <option value="Shellac Wax">
                          Shellac Wax
                        </option>
                        <option value="Aleuritic Acid">
                          Aleuritic Acid
                        </option>
                        <option value="Hydrolysed Lac">
                          Hydrolysed Lac
                        </option>
                        <option value="Sealing Wax">
                          Sealing Wax
                        </option>
                        <option value="Gasket Shellac Compound">
                          Gasket Shellac Compound
                        </option>
                        <option value="Organic Substance">
                          Organic Substance
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Test Name</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="text"
                        onChange={onChangeTestName}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>
                        Min Quantity of required sample
                        (grams)
                      </label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="number"
                        style={{ height: "4rem" }}
                        onChange={onChangeMinQuantity}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Test Fee (Rs.)</label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="number"
                        onChange={onChangeFee}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>
                        Reporting Period (days)
                      </label>
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        type="number"
                        onChange={onChangeReportingPeriod}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <button
                      className="btn btn-success"
                      style={{
                        marginTop: "1rem",
                        backgroundColor: "#064420",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        addNewTest();
                      }}
                    >
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
  )
}

export default AddNewTest