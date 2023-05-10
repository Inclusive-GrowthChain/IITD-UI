
const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "100%",
  fontSize: ".75rem",
  lineHeight: "2rem",
}

function Step2({ data, backBtnStyle, nextBtnStyle, setStep }) {
  return (
    <>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Applicant DOB</label>
        </div>
        <div className="col-lg-6">
          <input
            type="date"
            className="form-control"
            value={data.applicantDOB}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Applicant Age</label>
        </div>
        <div className="col-lg-6 text-center">
          <input
            type="text"
            className="form-control"
            value={data.applicantAge}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Aadhar Card Number</label>
        </div>
        <div className="col-lg-6 text-center">
          <input
            type="text"
            className="form-control"
            value={data.aadharNo}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Aadhar Card</label>
        </div>
        <div className="col-lg-6">
          <button
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>PAN Card Number</label>
        </div>
        <div className="col-lg-6 text-center">
          <input
            type="text"
            className="form-control"
            value={data.panNo}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>PAN Card</label>
        </div>
        <div className="col-lg-6">
          <button
            style={btnStyle}
          >
            View
          </button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Co-Applicant Name</label>
        </div>
        <div className="col-lg-6 text-center">
          <input
            type="text"
            className="form-control"
            value={data.coApplicantName}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Co-Applicant Gender</label>
        </div>
        <div className="col-lg-6 text-center">
          <input
            type="text"
            className="form-control"
            value={data.coApplicantGender}
            disabled
          />
        </div>
      </div>

      <div className="row m-2 justify-content-between px-2">
        <button
          className="btn btn-success"
          onClick={() => setStep(1)}
          style={backBtnStyle}
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(3)}
          style={nextBtnStyle}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Step2