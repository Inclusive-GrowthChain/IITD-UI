import useModal from "../../../../../hooks/useModal";
import ApproveLoanApp from "../ApproveLoanApp";
import RejectLoanApp from "../RejectLoanApp";

const list = [
  {
    label: "Land Holding",
    name: "landHolding",
  },
  {
    label: "Type of Land Holding",
    name: "landHoldingType",
  },
  {
    label: "Caste",
    name: "caste",
  },
  {
    label: "Religion",
    name: "religion",
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
    label: "Loan Purpose",
    name: "purpose",
  },
  {
    label: "Loan Tenure (months)",
    name: "tenure",
  },
]

function Step5({ data, backBtnStyle, setStep, closeAll }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      {
        list.map(l => (
          <div className="row m-2" key={l.name}>
            <div className="col-lg-6">
              <label>{l.label}</label>
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                value={data[l.name]}
                disabled
              />
            </div>
          </div>
        ))
      }

      <div className="row m-2">
        <div className="col-lg-12">
          <select
            className="form-control"
            style={{ marginTop: '7%' }}
            value={modal.state}
            onChange={e => updateModal(e.target.value)}
          >
            <option value="" disabled>Change Loan Status</option>
            <option value="Approved">Approve Loan</option>
            <option value="Rejected">Reject Loan</option>
          </select>
        </div>
      </div>

      <div className="row m-2 justify-content-between px-2">
        <button
          className="btn btn-success"
          onClick={() => setStep(4)}
          style={backBtnStyle}
        >
          Back
        </button>
      </div>

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

export default Step5