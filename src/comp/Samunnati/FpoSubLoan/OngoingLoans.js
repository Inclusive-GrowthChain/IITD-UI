import useModal from "../../../hooks/useModal";
import OngoingLoanApp from "../Modals/FpoSubLoan/OngoingLoanApp";

function OngoingLoans({ data = [], theadStyle, tbodyStyle, btnStyle }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      <div className="card shadow">
        <div className="table-responsive">
          <table className="table table-borderless">
            <thead style={theadStyle}>
              <tr>
                <td>Loan ID</td>
                <td>Date of Loan Approval</td>
                <td>Loan Amount</td>
                <td>Outstanding Amount</td>
                <td>Next Payment Amount</td>
                <td>Next Payment Date</td>
                <td>View Loan Details</td>
              </tr>
            </thead>

            <tbody style={tbodyStyle}>
              {
                data.map(loan => (
                  <tr key={loan.loanId}>
                    <td>{loan.loanId}</td>
                    <td>{loan?.approvalAt?.substring(0, 10)}</td>
                    <td>{loan.grantedAmount}</td>
                    <td>{loan.outstandingAmount}</td>
                    <td>{loan.nextPaymentAmount}</td>
                    <td>{loan.nextPaymentDate}</td>
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

      <div style={{ marginTop: '2%' }}>
        Total amount to be paid in next installment: ???
      </div>

      {
        modal.state &&
        <OngoingLoanApp
          show
          currentLoan={modal.data}
          currentTransaction={{}}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default OngoingLoans