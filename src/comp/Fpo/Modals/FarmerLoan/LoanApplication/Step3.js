
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
    name: "fathersName",
  },
  {
    label: "Applicant Mother Name",
    name: "mothersName",
  },
  {
    label: "Door Number",
    name: "doorNumber",
  },
  {
    label: "Street Name",
    name: "streetName",
  },
  {
    label: "Village",
    name: "village",
  },
]

function Step3({ backBtnStyle, nextBtnStyle, setStep, data }) {
  console.log(data)
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