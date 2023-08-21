
const list = [
  {
    label: "Co-Applicant Name",
    name: "coApplicantName",
  },
  {
    label: "Co-Applicant Gender",
    name: "coApplicantGender",
  },
  {
    label: "Co-Applicant DOB",
    name: "coApplicantDob",
    type: "date"
  },
  {
    label: "Co-Applicant Age",
    name: "coApplicantAge",
    disabled: true
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
          <div key={l.name} className="row m-2">
            <p className="col-lg-6">
              {l.label}
            </p>
            <p className="col-lg-6">
              {data[l.name]}
            </p>
          </div>
        ))
      }

      <div className="row m-2 justify-content-between px-2">
        <button
          className="btn btn-success"
          onClick={() => setStep(2)}
          style={backBtnStyle}
          type="button"
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(4)}
          style={nextBtnStyle}
          type="button"
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Step3