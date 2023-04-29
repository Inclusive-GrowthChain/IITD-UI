
function Step4({ backBtnStyle, nextBtnStyle, setStep, farmerDetails }) {
  return (
    <>
      <div className="row m-2">
        <p className="col-lg-6">
          Taluk
        </p>
        <p className="col-lg-6">
          {farmerDetails.taluk}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          District
        </p>
        <p className="col-lg-6">
          {farmerDetails.district}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          State
        </p>
        <p className="col-lg-6">
          {farmerDetails.state}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Pin Code
        </p>
        <p className="col-lg-6">
          {farmerDetails.pinCode}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Occupation
        </p>
        <p className="col-lg-6">
          {farmerDetails.occupation}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Education
        </p>
        <p className="col-lg-6">
          {farmerDetails.education}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Nature of Place
        </p>
        <p className="col-lg-6">
          {farmerDetails.natureOfPlace}
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Residence
        </p>
        <p className="col-lg-6">
          {farmerDetails.residence}
        </p>
      </div>

      <div className="row m-2 justify-content-between px-2">
        <button
          className="btn btn-success"
          onClick={() => setStep(3)}
          style={backBtnStyle}
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(5)}
          style={nextBtnStyle}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Step4