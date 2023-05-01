import Input from "../../../../Nisa/Modals/Input";

const list = [
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
  {
    label: "Taluk",
    name: "taluk",
  },
  {
    label: "District",
    name: "district",
  },
]

function Step3({ backBtnStyle, nextBtnStyle, setStep, register, errors }) {
  return (
    <>
      {
        list.map(l => (
          <Input
            {...l}
            key={l.name}
            disabled
            errors={errors}
            register={register}
          />
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