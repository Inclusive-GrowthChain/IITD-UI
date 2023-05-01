
function Step3({ setStep, backBtnStyle, nextBtnStyle }) {
  return (
    <>
      <div className="row m-2">
        <p className="col-lg-6">
          Applicant Father Name
        </p>
        <p className="col-lg-6">
          Father Name
        </p>
      </div>
      <div className="row m-2">
        <p className="col-lg-6">
          Applicant Mother Name
        </p>
        <p className="col-lg-6">
          Mother Name
        </p>
      </div>
      <div className="row m-2">
        <p className="col-lg-6">
          Door Number
        </p>
        <p className="col-lg-6">
          24/H
        </p>
      </div>
      <div className="row m-2">
        <p className="col-lg-6">
          Street Name
        </p>
        <p className="col-lg-6">
          Jv Colony
        </p>
      </div>
      <div className="row m-2">
        <p className="col-lg-6">
          Village
        </p>
        <p className="col-lg-6">
          Hyderabad
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