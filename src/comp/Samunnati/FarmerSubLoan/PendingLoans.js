import useModal from "../../../hooks/useModal";
import PendingLoanApp from "../Modals/FarmerSubLoan/PendingLoanApp";

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

function PendingLoans({ data = [], theadStyle, tbodyStyle, setLoanWindow }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <>
      <div className="card shadow">
        <div className="table-responsive">
          <table className="table table-borderless">
            <thead style={theadStyle}>
              <tr>
                <td>Loan ID</td>
                <td>Farmer ID</td>
                <td>Farmer Name</td>
                <td>Contact</td>
                <td>Date of Application</td>
                <td>Loan Amount</td>
                <td>View Loan Application</td>
              </tr>
            </thead>

            <tbody style={tbodyStyle}>
              {
                data.map(loan => (
                  <tr key={loan.loanId}>
                    <td>{loan.loanId}</td>
                    <td>{loan.userId}</td>
                    <td>{loan.name}</td>
                    <td>{loan.mobile}</td>
                    <td>{loan.createdAt?.substring(0, 10)}</td>
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
          setLoanWindow={setLoanWindow}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default PendingLoans