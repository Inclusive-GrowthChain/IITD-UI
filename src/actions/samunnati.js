import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getLoanwindow({ windowType = "fpo" }) {
  return sendApiReq({
    url: endPoints.samunnati.loanwindow + windowType,
  })
}

export function getLoans({ windowType = "fpo", fpoId }) {
  return sendApiReq({
    url: endPoints.loanwindow,
    params: {
      windowType,
      fpoId
    }
  })
}

export function updateLoanWindowStatus(data) {
  return sendApiReq({
    method: "put",
    url: `${endPoints.loanwindow}/${data.id}/approval`,
    data,
    successMsg: "Loan window status updated successfully"
  })
}

export function updateLoanStatus(data) {
  let { id, windowId, isFpo, ...rest } = data

  let url = `${endPoints.loanwindow}/${windowId}/${isFpo ? "fpoloan" : "loan"}/${data.id}/approval`

  return sendApiReq({
    successMsg: "Loan status updated successfully",
    method: "put",
    data: rest,
    url,
  })
}

export function updateRepayment(data) {
  return sendApiReq({
    method: "put",
    url: `${endPoints.loanwindow}/${data.lWId}/repayment/${data.id}`,
    data,
    successMsg: "Loan repayment updated successfully"
  })
}
