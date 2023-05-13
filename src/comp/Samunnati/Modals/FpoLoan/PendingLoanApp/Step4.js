import useModal from '../../../../../hooks/useModal';
import DocImg from '../../../../Common/DocImg';

const list1 = [
  {
    label: "Incorporation Details",
    name: "incorp",
  },
  {
    label: "Brief Profile of the promoting organization",
    name: "promotingOrg",
  },
  {
    label: "Networth statement of the promoter",
    name: "netWorth",
  },
]

const list2 = [
  {
    label: "Input Licenses",
    name: "inputLicenses",
  },
  {
    label: "Fertilizer Licenses",
    name: "fertilizerLicenses",
  },
]

function Step4({ data, backBtnStyle, nextBtnStyle, btnStyle, h5Style, setStep }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      <h5 style={h5Style}>
        Brief Profile of the FPO
      </h5>

      {
        list1.map(l => (
          <div className="row m-2" key={l.name}>
            <div className="col-lg-6">
              <label>{l.label}</label>
            </div>
            <div className="col-lg-6 text-center">
              <button
                className="py-0.5"
                style={btnStyle}
                onClick={() => updateModal(l.label, {
                  imgUrl: data?.fpoProfile?.find(d => d.name === l.name)?.doc
                })}
              >
                View
              </button>
            </div>
          </div>
        ))
      }

      <h5 className="mt-3" style={h5Style}>
        Applicable License
      </h5>

      {
        list2.map(l => (
          <div className="row m-2" key={l.name}>
            <div className="col-lg-6">
              <label>{l.label}</label>
            </div>
            <div className="col-lg-6 text-center">
              <button
                className="py-0.5"
                style={btnStyle}
                onClick={() => updateModal(l.label, {
                  imgUrl: data?.licenses?.find(d => d.name === l.name)?.doc
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
          onClick={() => setStep(3)}
          style={backBtnStyle}
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(5)}
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

export default Step4