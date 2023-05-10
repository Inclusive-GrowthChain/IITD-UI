
function Step3({ data, backBtnStyle, nextBtnStyle, setStep }) {
  return (
    <>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Co-Applicant DOB</label>
        </div>
        <div className="col-lg-6">
          <input
            type="date"
            className="form-control"
            value={data.coApplicantDOB}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Co-Applicant Age</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.coApplicantAge}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Relationship with Applicant</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.relationWithApplicant}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Applicant Father Name</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.applicantFatherName}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Applicant Mother Name</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.applicantMotherName}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Door Number</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.doorNumber}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Street Name</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.streetName}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Village</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.village}
            disabled
          />
        </div>
      </div>

      <div className="row m-2 justify-content-between px-2">
        <button
          className="btn btn-success"
          onClick={() => setStep(2)}
          style={backBtnStyle}
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(4)}
          style={nextBtnStyle}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Step3