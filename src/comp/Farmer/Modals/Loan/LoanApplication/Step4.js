import Input from "../../../../Nisa/Modals/Input";

const list = [
  {
    label: "State",
    name: "state",
  },
  {
    label: "Pin Code",
    name: "pinCode",
  },
  {
    label: "Occupation",
    name: "occupation",
  },
  {
    label: "Education",
    name: "education",
  },
  {
    label: "Nature of Place",
    name: "natureOfPlace",
  },
  {
    label: "Residence",
    name: "residence",
  },
  {
    label: "Caste",
    name: "caste",
  },
  {
    label: "Religion",
    name: "religion",
  },
]

function Step4({ backBtnStyle, nextBtnStyle, setStep, register, errors }) {
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
          onClick={() => setStep(3)}
          style={backBtnStyle}
          type="button"
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(5)}
          style={nextBtnStyle}
          type="button"
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Step4