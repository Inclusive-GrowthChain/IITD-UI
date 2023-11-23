import { useFormContext } from "react-hook-form";
import useModal from "../../../../../hooks/useModal";
import DocImg from "../../../../Common/DocImg";

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "30%",
  fontSize: ".75rem",
  lineHeight: "1rem",
  textAlign: "center",
}

const list = [
  {
    label: "MOA",
    name: "moa",
    urlTitle: "certificateOfIncorporationImage"
  },
  {
    label: "AOA",
    name: "aoa",
    urlTitle: "copyOfByLawsImage"
  },
  {
    label: "Certificate of Incorporation",
    name: "coi",
    urlTitle: "certificateOfIncorporationImage"
  },
  {
    label: "GST Certificate",
    name: "gst",
    urlTitle: "gstCertificateImage"
  },
  {
    label: "PAN Card",
    name: "pan",
    urlTitle: "panCardImage"
  },
]

function Step1({ setStep, h5Style, nextBtnStyle,user }) {
  const { modal, updateModal, closeModal } = useModal()
  const { getValues } = useFormContext()
  const docs = getValues("kycDocuments")
  return (
    <div>
      <h5 style={h5Style}>KYC Documents</h5>

      {
        list.map(l => (
          <div
            key={l.name}
            className="row m-2"
          >
            <div className="col-lg-6">
              <label>{l.label}</label>
            </div>

            <div className="col-lg-6">
              <button
                className="py-0.5"
                style={btnStyle}
                onClick={() => updateModal(l.name, { title: l.label, urlTitle:l.urlTitle })}
                type="button"
              >
                View
              </button>
            </div>
          </div>
        ))
      }

      <div className="row m-2">
        <div className="col-lg-12">
          <button
            className="btn btn-success"
            onClick={() => setStep(1)}
            style={nextBtnStyle}
            type="button"
          >
            Next
          </button>
        </div>
      </div>

      {
        modal.state &&
        <DocImg
          show
          title={modal.data.title}
          imgUrl={docs?.find(d => d.name === modal.state)?.doc || user[modal.data.urlTitle] || ""}
          handleClose={closeModal}
        />
      }
    </div>
  )
}

export default Step1