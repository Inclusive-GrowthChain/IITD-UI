import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function EditTraining({ currentTP, showEditTP, handleEditTPClose, t_id, cur_trainingId, cur_courseName, cur_courseStartDate, cur_duration, cur_appStartDate, cur_appEndDate, cur_fee, cur_remarks }) {
  const [courseName, setCourseName] = useState("");
  const [courseStartDate, setCourseStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [appStartDate, setAppStartDate] = useState("");
  const [appEndDate, setAppEndDate] = useState("");
  const [fee, setFee] = useState(0);
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    setCourseName(cur_courseName);
    setCourseStartDate(cur_courseStartDate);
    setDuration(cur_duration);
    setAppStartDate(cur_appStartDate);
    setAppEndDate(cur_appEndDate);
    setFee(cur_fee);
    setRemarks(cur_remarks);
  }, [cur_courseName, cur_courseStartDate, cur_duration, cur_appStartDate, cur_appEndDate, cur_fee, cur_remarks]);

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

  const editTrainingProgram = async () => {
    if(courseName=="" || courseStartDate=="" || duration=="" || appStartDate=="" || appEndDate=="" || fee==0 || remarks=="") {
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
      "traningId": cur_trainingId,
      "courseName": courseName,
      "courseStartDate": courseStartDate,
      "duration": duration,
      "applicationStartDate": appStartDate,
      "applicationEndDate": appEndDate,
      "fee": fee,
      "remarks": remarks,
    };
    
    await axios
      .put(`http://13.232.131.203:3000/api/nisa/traning/${t_id}`, newTP)
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
    <Modal show={showEditTP} onHide={handleEditTPClose}>
      <Modal.Header closeButton>Edit Training Program</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Training Course Name</label>
                    </div>
                    <div className="col-lg-12">
                      <input className="form-control" type="text" defaultValue={currentTP.courseName} onChange={onChangeCourseName}/>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Course Start Date</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="date" defaultValue={currentTP.courseStartDate} onChange={onChangeCourseStartDate}/>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Duration</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="text" defaultValue={currentTP.duration} onChange={onChangeDuration}/>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Application Start Date</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="date" defaultValue={currentTP.applicationStartDate} onChange={onChangeAppStartDate}/>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Application End Date</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="date" defaultValue={currentTP.applicationEndDate} onChange={onChangeAppEndDate}/>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Fee (in Rs.)</label>
                    </div>
                    <div className="col-lg-6">
                      <input className="form-control" type="number" defaultValue={currentTP.fee} onChange={onChangeFee}/>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Remarks</label>
                    </div>
                    <div className="col-lg-12">
                      <textarea className="form-control"
                        style={{ height: "200%" }}
                        defaultValue={100}
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
                        editTrainingProgram();
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

export default EditTraining