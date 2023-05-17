import Input from "../../../../Nisa/Modals/Input";

const list = [
  {
    label: "Co-Applicant Name",
    name: "coApplicantName",
  },
  {
    label: "Co-Applicant Gender",
    name: "coApplicantGender",
    isSelect: true,
    options: [
      "Male",
      "Female",
      "Other"
    ]
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
    label: "Land Holding",
    name: "landHolding",
  },
  {
    label: "Type of Land Holding",
    name: "landHoldingType",
  },
  {
    label: "Monthly HH Income",
    name: "monthlyHHIncome",
  },
  {
    label: "Monthly HH Expenses",
    name: "monthlyHHExpenses",
  },
  {
    label: "Loan Requested Amount",
    name: "requestedAmount",
    type: "number",
  },
  {
    label: "Loan Purpose",
    name: "purpose",
  },
  {
    label: "Loan Tenure (in months)",
    name: "tenure",
    type: "number",
  },
  {
    label: "Interest Rate",
    name: "intrest",
    disabled: true
  },
  {
    label: "Loan ID",
    name: "loanId",
    disabled: true
  },
]

function Step5({ isCreate, backBtnStyle, nextBtnStyle, isSubmiting, setStep, register, errors }) {
  return (
    <>
      {
        list.map(l => (
          <Input
            {...l}
            key={l.name}
            errors={errors}
            register={register}
          />
        ))
      }

      <div className="row m-2 justify-content-between px-2">
        <button
          className="btn btn-success"
          onClick={() => setStep(3)}
          style={backBtnStyle}
          type="button"
        >
          Back
        </button>

        {
          isCreate &&
          <button
            className="btn btn-success"
            style={nextBtnStyle}
            disabled={isSubmiting}
            type="submit"
          >
            Submit
          </button>
        }
      </div>
    </>
  )
}

export default Step5