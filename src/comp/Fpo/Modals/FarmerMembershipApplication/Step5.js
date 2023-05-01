
function Step5({ setStep, backBtnStyle }) {
  return (
    <>
      <div className="row m-2">
        <p className="col-lg-6">
          Caste
        </p>
        <p className="col-lg-6">
          XXXXXXX
        </p>
      </div>

      <div className="row m-2">
        <p className="col-lg-6">
          Religion
        </p>
        <p className="col-lg-6">
          XXXXXXXX
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
      </div>
    </>
  )
}

export default Step5