import useModal from '../../../../../hooks/useModal';
import DocImg from '../../../../Common/DocImg';

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "5px 10px",
  width: "100%",
  fontSize: ".75rem",
  lineHeight: "1.7rem",
}

const list = [
  {
    label: "Samunnati Payment Proof",
    name: "paymentProof",
    isFile: true,
  },
  {
    label: "Interest Rate (%)",
    name: "intrest",
  },
  {
    label: "Granted Amount (in Rs.)",
    name: "grantedAmount",
  },
]

function Step6({ backBtnStyle, setStep, data }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      {
        list.map(l => (
          <div key={l.name} className="row m-2">
            <p className="col-lg-6">
              {l.label}
            </p>
            <p className="col-lg-6">
              {
                l.isFile ?
                  <button
                    style={btnStyle}
                    onClick={() => updateModal(l.label)}
                  >
                    view
                  </button>
                  : data[l.name]
              }
            </p>
          </div>
        ))
      }

      <div className="row m-2">
        <button
          className="btn btn-success"
          onClick={() => setStep((p) => p - 1)}
          style={backBtnStyle}
        >
          Back
        </button>
      </div>

      {
        modal.state &&
        <DocImg
          show
          title={modal.state}
          imgUrl={data?.paymentProof}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default Step6