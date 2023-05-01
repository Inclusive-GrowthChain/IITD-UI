
function Step1({ setStep, nextBtnStyle }) {
  return (
    <>
      <div className="row m-2">
        <p className="col-lg-6">
          FPO Name
        </p>
        <p className="col-lg-6">
          FPO 1
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Bank Name
        </p>
        <p className="col-lg-6">
          SBI
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Account Number
        </p>
        <p className="col-lg-6">
          1234567890
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Bank IFSC
        </p>
        <p className="col-lg-6">
          23423XXXX
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Branch Name
        </p>
        <p className="col-lg-6">
          Branch Name
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Applicant Name
        </p>
        <p className="col-lg-6">
          N 1
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Applicant Gender
        </p>
        <p className="col-lg-6">
          Male
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Applicant Mobile Number
        </p>
        <p className="col-lg-6">
          1234567890
        </p>
      </div>

      <div className="row m-2">
        <div className="col-lg-12">
          <button
            className="btn btn-success"
            onClick={() => setStep(1)}
            style={nextBtnStyle}
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default Step1