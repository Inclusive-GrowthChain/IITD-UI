
function Step4({ data, backBtnStyle, nextBtnStyle, setStep }) {
  return (
    <>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Taluk</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.taluk}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>District</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.district}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>State</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.state}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Pin Code</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.pinCode}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Occupation</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.occupation}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Education</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.education}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Nature of Place</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.nativePlace}
            disabled
          />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-lg-6">
          <label>Residence</label>
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            value={data.residence}
            disabled
          />
        </div>
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