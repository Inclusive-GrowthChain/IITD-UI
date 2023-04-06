import { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

function AddTraing({ showAddTP, handleTPClose }) {
  const [trainingId, setTrainingId] = useState("TRAN004");
  const [courseName, setCourseName] = useState("");
  const [courseStartDate, setCourseStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [appStartDate, setAppStartDate] = useState("");
  const [appEndDate, setAppEndDate] = useState("");
  const [fee, setFee] = useState(0);
  const [remarks, setRemarks] = useState("");

  const onChangeCourseName = (e) => {
    setCourseName(e.target.value);
  }

  const onChangeCourseStartDate = (e) => {
    setCourseStartDate(e.target.value);
  }

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  }

  const onChangeAppStartDate = (e) => {
    setAppStartDate(e.target.value);
  }

  const onChangeAppEndDate = (e) => {
    setAppEndDate(e.target.value);
  }

  const onChangeFee = (e) => {
    setFee(e.target.value);
  }

  const onChangeRemarks = (e) => {
    setRemarks(e.target.value);
  }

  const resetInputs = () => {
    setCourseName("");
    setCourseStartDate("");
    setDuration("");
    setAppStartDate("");
    setAppEndDate("");
    setFee(0);
    setRemarks("");
  }

  const addTrainingProgram = async () => {
    if(courseName=="" || courseStartDate=="" || duration=="" || appStartDate=="" || appEndDate=="" || fee=="" || remarks=="") {
      alert("Please fill all details and try again");
      return;
    }

    if(appStartDate > appEndDate) {
      alert("Application start date cannot be greater than application end date");
      return;
    }

    if(fee < 0) {
      alert("Fee cannot be negative");
      return;
    }

    const newTP = {
      "traningId": trainingId,
      "courseName": courseName,
      "courseStartDate": courseStartDate,
      "duration": duration,
      "applicationStartDate": appStartDate,
      "applicationEndDate": appEndDate,
      "fee": fee,
      "remarks": remarks,
    };
    
    await axios
      .post("http://13.232.131.203:3000/api/nisa/traning", newTP)
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
    <Modal show={showAddTP} onHide={handleTPClose}>
      <Modal.Header closeButton>Add Training Program</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Training ID</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" value={trainingId} disabled />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Training Course Name</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" onChange={onChangeCourseName}/>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Course Start Date</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="date" onChange={onChangeCourseStartDate}/>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Duration</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" onChange={onChangeDuration}/>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Application Start Date</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="date" onChange={onChangeAppStartDate}/>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Application End Date</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="date" onChange={onChangeAppEndDate}/>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Fee (in Rs.)</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="number" onChange={onChangeFee}/>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Remarks</label>
                    </div>
                    <div className="col-lg-12">
                      <textarea className="form-control"
                        style={{ height: "200%" }}
                        onChange={onChangeRemarks}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <button
                      className="btn btn-success"
                      style={{ marginTop: '5rem', backgroundColor: '#064420' }}
                      onClick={(e) => {
                        e.preventDefault();
                        addTrainingProgram();
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

export default AddTraing