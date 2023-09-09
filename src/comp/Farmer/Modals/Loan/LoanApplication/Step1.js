import Input from "../../../../Nisa/Modals/Input";

const list = [
  {
    label: "FPO Name",
    name: "fpoName",
  },
  {
    label: "Bank Name",
    name: "bankName",
  },
  {
    label: "Account Number",
    name: "accountNumber",
  },
  {
    label: "Bank IFSC",
    name: "ifscCode",
  },
  {
    label: "Branch Name",
    name: "branchName",
  },
  {
    label: "Applicant Name",
    name: "name",
  },
  {
    label: "Applicant Gender",
    name: "gender",
    // isSelect: true,
    // options: [
    //   "Male",
    //   "Female",
    //   "Other"
    // ]
  },
]

function Step1({ nextBtnStyle, setStep, register, errors }) {
  return (
    <>
      {
        list.map(l => (
          <Input
            {...l}
            key={l.name}
            disabled
            register={register}
            errors={errors}
          />
        ))
      }

      <div className="row m-2">
        <div className="col-lg-12">
          <button
            className="btn btn-success"
            onClick={() => setStep(2)}
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