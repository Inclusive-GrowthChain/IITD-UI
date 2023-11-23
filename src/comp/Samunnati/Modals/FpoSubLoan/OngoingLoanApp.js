import { useState } from "react";
import { Modal } from "react-bootstrap";
import useModal from "../../../../hooks/useModal";
import DocImg from "../../../Common/DocImg";

const btnStyle = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "100%",
  fontSize: "1rem",
  lineHeight: "2rem",
}

// const btnStyle2 = {
//   color: "blue",
//   alignItems: "center",
//   borderRadius: "5px",
//   border: "none",
//   padding: "0.25rem 1rem",
//   width: "100%",
//   fontSize: "1rem",
//   lineHeight: "2rem",
//   textDecoration: "underline",
//   backgroundColor: "rgb(255, 255, 255, 0)",
// }

// const repaymentsList = [
//   {
//     id: 1,
//     date: "12-10-2021",
//     amt: "100000",
//     amt2: "90000"
//   },
//   {
//     id: 2,
//     date: "12-10-2021",
//     amt: "100000",
//     amt2: "90000"
//   },
//   {
//     id: 3,
//     date: "12-10-2021",
//     amt: "100000",
//     amt2: "90000"
//   },
//   {
//     id: 4,
//     date: "12-10-2021",
//     amt: "100000",
//     amt2: "90000"
//   },
// ]

const step1Data = [
  {
    label: "Loan ID",
    value: "loanId",
  },
  {
    label: "Name of Payee",
    value: "payeeName",
  },
  {
    label: "Account Number",
    value: "accountNumber",
  },
  {
    label: "IFSC Code",
    value: "ifscNumber",
  },
  {
    label: "Granted Amount",
    value: "grantedAmount",
  },
  {
    label: "Tenure of Loan (in months)",
    value: "loanTenure",
  },
  {
    label: "Purpose",
    value: "purpose",
  },
  {
    label: "Invoice",
    value: "invoice",
    isFile: true,
  },
  {
    label: "Payment Proof",
    value: "paymentProof",
    isFile: true,
  },
]

function Step1({ data, setStep }) {
  const { modal, updateModal, closeModal } = useModal()

  return (
    <div className="form">
      <div className="card p-2">
        {
          step1Data.map(d => (
            <div key={d.value} className="row m-2">
              <div className="col-lg-6">
                <label>{d.label}</label>
              </div>
              <div className="col-lg-6">
                {
                  d.isFile ?
                    <button
                      style={btnStyle}
                      onClick={() => updateModal(d.label, { imgUrl: data?.[d.value] })}
                    >
                      view
                    </button>
                    :
                    <input
                      type="text"
                      className="form-control"
                      value={data?.[d.value]}
                      disabled
                    />
                }
              </div>
            </div>
          ))
        }

        {/* <div className="row m-2">
          <div className="col-lg-12">
            <button
              className="btn btn-primary"
              onClick={() => setStep(2)}
              style={{ float: "right", backgroundColor: '#064420' }}
            >
              View Repayment Details
            </button>
          </div>
        </div> */}
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
    </div>
  )
}

// function Step2() {
//   return (
//     <>
//       <div className="repayment_title">
//         <div className="row">
//           <div className="col-lg-6">
//             <div className="row">
//               <div className="col-6">
//                 <strong>Loan ID : </strong>
//               </div>
//               <div className="col-6">
//                 <span>12345</span>
//               </div>
//               <div className="col-6">
//                 <strong>FPO Name : </strong>
//               </div>
//               <div className="col-6">
//                 <span>abcd</span>
//               </div>
//               <div className="col-6">
//                 <strong>
//                   Loan Amount :
//                 </strong>
//               </div>
//               <div className="col-6">
//                 <span>400</span>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-6">
//             <div className="row">
//               <div className="col-6">
//                 <strong>
//                   Loan Period in Months :
//                 </strong>
//               </div>
//               <div className="col-6">
//                 <span>1</span>
//               </div>
//               <div className="col-6">
//                 <strong>
//                   No of Repayment :
//                 </strong>
//               </div>
//               <div className="col-6">
//                 <span>1</span>
//               </div>
//               <div className="col-6">
//                 <strong>
//                   Annual Interest Rate :
//                 </strong>
//               </div>
//               <div className="col-6">
//                 <span>14%</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-5">
//         <table style={{ border: "1px solid #eee" }}>
//           <thead style={{ backgroundColor: "#eee" }}>
//             <tr>
//               <th>S.No.</th>
//               <th>Scheduled Repayment Date</th>
//               <th>Scheduled EMI Amount</th>
//               <th>Repayment</th>
//               <th>Balance</th>
//             </tr>
//           </thead>

//           <tbody>
//             {
//               repaymentsList.map(r => (
//                 <tr key={r.id}>
//                   <td>{r.id}</td>
//                   <td>{r.date}</td>
//                   <td>{r.amt}</td>
//                   <td>
//                     <button
//                       style={btnStyle2}
//                     >
//                       Repayment
//                     </button>
//                   </td>
//                   <td>{r.amt2}</td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//       </div>
//     </>
//   )
// }

function OngoingLoanApp({ show, handleClose, data }) {
  const [step, setStep] = useState(1)

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size='xl'
    >
      <Modal.Header closeButton>Loan/Transaction Details</Modal.Header>

      <Modal.Body style={{ overflowY: 'auto' }}>
        {
          step === 1 &&
          <Step1
            data={data}
            setStep={setStep}
          />
        }
{/* 
        {
          step === 2 &&
          <Step2 />
        } */}
      </Modal.Body>
    </Modal>
  )
}

export default OngoingLoanApp