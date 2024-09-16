
const list = [
  {
    label: "Co-Applicant DOB",
    name: "coApplicantDob",
  },
  {
    label: "Co-Applicant Age",
    name: "coApplicantAge",
  },
  {
    label: "Relationship with Applicant",
    name: "relationship",
  },
  {
    label: "Applicant Father Name",
    name: "fatherName",
  },
  {
    label: "Applicant Mother Name",
    name: "motherName",
  },
  {
    label: "Door Number",
    name: "doorNumber",
  },
  {
    label: "Street Name",
    name: "street",
  },
  {
    label: "Village",
    name: "village",
  },
]

function Step3({ data, backBtnStyle, nextBtnStyle, setStep }) {
  return (
    <>
      {
        list.map(l => (
          <div className="row m-2" key={l.name}>
            <div className="col-lg-6">
              <label>{l.label}</label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                value={data[l.name]}
                disabled
              />
            </div>
          </div>
        ))
      }

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