
function Step3({ backBtnStyle, nextBtnStyle, setStep, farmerDetails }) {
  return (
    <>
      <div className="row m-2">
        <p className="col-lg-6">
          Co-Applicant DOB
        </p>
        <p className="col-lg-6">
          02-03-2000
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Co-Applicant Age
        </p>
        <p className="col-lg-6">
          22
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Relationship with Applicant
        </p>
        <p className="col-lg-6">
          Son
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Applicant Father Name
        </p>
        <p className="col-lg-6">
          {farmerDetails.fatherName}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Applicant Mother Name
        </p>
        <p className="col-lg-6">
          {farmerDetails.motherName}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Door Number
        </p>
        <p className="col-lg-6">
          {farmerDetails.doorNumber}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Street Name
        </p>
        <p className="col-lg-6">
          {farmerDetails.street}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Village
        </p>
        <p className="col-lg-6">
          {farmerDetails.village}
        </p>
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