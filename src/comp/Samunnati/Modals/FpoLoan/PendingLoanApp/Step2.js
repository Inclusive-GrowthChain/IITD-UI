import useModal from '../../../../../hooks/useModal';
import DocImg from '../../../../Common/DocImg';

const list = [
  { lable: "MOA", name: "moa" },
  { lable: "AOA", name: "aoa" },
  { lable: "Certificate of Incorporation", name: "coi" },
  { lable: "GST Certificate", name: "gst" },
  { lable: "PAN Card", name: "pan" },
]

function Step2({ data, backBtnStyle, nextBtnStyle, btnStyle, h5Style, setStep }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      <h5 style={h5Style}>
        KYC Documents
      </h5>

      {
        list.map(l => (
          <div key={l.name} className="row m-2">
            <div className="col-lg-6">
              <label>{l.lable}</label>
            </div>
            <div className="col-lg-6 text-center">
              <button
                className="py-0.5"
                style={btnStyle}
                onClick={() => updateModal(l.lable, {
                  imgUrl: data?.kycDocuments?.find(d => d.name === l.name)?.doc
                })}
              >
                View
              </button>
            </div>
          </div>
        ))
      }

      <div className="row m-2 justify-content-between px-2">
        <button
          className="btn btn-success"
          onClick={() => setStep(1)}
          style={backBtnStyle}
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(3)}
          style={nextBtnStyle}
        >
          Next
        </button>
      </div>

      {
        modal.state &&
        <DocImg
          show
          title={modal.state}
          imgUrl={modal.data.imgUrl}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default Step2