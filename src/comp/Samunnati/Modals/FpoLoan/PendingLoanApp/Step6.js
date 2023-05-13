import useModal from '../../../../../hooks/useModal';
import ApproveLoanApp from "../ApproveLoanApp";
import RejectLoanApp from "../RejectLoanApp";
import DocImg from '../../../../Common/DocImg';

const list = [
  {
    label: "Product wise break up of revenues (2 fiscal)",
    name: "productBreakRevenue",
  },
  {
    label: "Latest 3 months stock statements",
    name: "latest3MonthStock",
  },
  {
    label: "Debtors ageing analysis fiscal year end",
    name: "debtorsAgeingAnalysis",
  },
  {
    label: "Top 5 suppliers/vintage (last 6 months)",
    name: "top5Suppliers",
  },
  {
    label: "Top 5 buyers/vintage (last 6 months)",
    name: "top5Buyers",
  },
  {
    label: "Sanction limit & O/s for both WC & TL",
    name: "sanctionLimit",
  },
  {
    label: "Term loan summary",
    name: "termLoanSummary",
  },
  {
    label: "Project estimate & other relavant documents",
    name: "projectEstimate",
  },
]

function Step6({ data, backBtnStyle, btnStyle, h5Style, setStep, closeAll }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      <h5 style={h5Style}>
        Other Details
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
                  imgUrl: data?.otherDetails?.find(d => d.name === l.name)?.doc
                })}
              >
                View
              </button>
            </div>
          </div>
        ))
      }

      <div className="d-flex align-items-center justify-content-between m-2 px-2">
        <button
          className="btn btn-success"
          onClick={() => setStep(2)}
          style={backBtnStyle}
        >
          Back
        </button>

        <select
          className="form-control mt-3"
          value={modal.state}
          onChange={e => updateModal(e.target.value)}
          style={{ maxWidth: "20rem" }}
        >
          <option value="" disabled>Change Loan Window Status</option>
          <option value="Approved">Approve Loan Window</option>
          <option value="Rejected">Reject Loan Window</option>
        </select>
      </div>

      {
        modal.state && modal.state !== "Approved" && modal.state !== "Rejected" &&
        <DocImg
          show
          title={modal.state}
          imgUrl={modal.data.imgUrl}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "Approved" &&
        <ApproveLoanApp
          show
          data={data}
          closeAll={closeAll}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "Rejected" &&
        <RejectLoanApp
          show
          data={data}
          closeAll={closeAll}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default Step6