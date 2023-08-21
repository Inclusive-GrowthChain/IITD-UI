import useModal from '../../../../../hooks/useModal';
import DocImg from '../../../../Common/DocImg';

const list = [
  {
    label: "Last 3 years audited financial statements",
    name: "last3YearFinancial",
  },
  {
    label: "Current year provisonal/Interim financials",
    name: "currentYearFinancial",
  },
  {
    label: "Month wise purchase and sales data for last 6 months",
    name: "last6MonthPurchaseAndSalesData",
  },
  {
    label: "Latest 3 months stock statement",
    name: "latest3MonthStock",
  },
  {
    label: "Business Plan",
    name: "businessPlan",
  },
  {
    label: "Bank statement for last 1 year",
    name: "bankStatement",
  },
  {
    label: "Sanction letter copies",
    name: "sanctionLetter",
  },
  {
    label: "GST returns for the past 6 months",
    name: "gstReturn",
  },
]

function Step5({ data, backBtnStyle, nextBtnStyle, btnStyle, h5Style, setStep }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      <h5 style={h5Style}>
        Financial Details
      </h5>

      {
        list.map(l => (
          <div className="row m-2" key={l.name}>
            <div className="col-lg-6">
              <label>{l.label}</label>
            </div>
            <div className="col-lg-6 text-center">
              <button
                className="py-0.5"
                style={btnStyle}
                onClick={() => updateModal(l.label, {
                  imgUrl: data?.financialDetails?.find(d => d.name === l.name)?.doc
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
          onClick={() => setStep(4)}
          style={backBtnStyle}
        >
          Back
        </button>

        <button
          className="btn btn-success"
          onClick={() => setStep(6)}
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

export default Step5