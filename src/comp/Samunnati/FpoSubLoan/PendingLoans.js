import useModal from "../../../hooks/useModal";
import PendingLoanApp from "../Modals/FpoSubLoan/PendingLoanApp";

function PendingLoans({ data = [], theadStyle, tbodyStyle, btnStyle }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      <div className="card shadow">
        <div className="table-responsive">
          <table className="table table-borderless">
            <thead style={theadStyle}>
              <tr>
                <td>Loan ID</td>
                <td>Date of Application</td>
                <td>Loan Amount</td>
                <td>View Loan Application</td>
              </tr>
            </thead>

            <tbody style={tbodyStyle}>
              {
                data.map((loan) => (
                  <tr>
                    <td>{loan.loanId}</td>
                    <td>{loan.createdAt.substring(0, 10)}</td>
                    <td>{loan.requestedAmount}</td>
                    <td>
                      <button
                        style={btnStyle}
                        onClick={() => updateModal("show", loan)}
                      >
                        view
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      {
        modal.state &&
        <PendingLoanApp
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default PendingLoans