import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getLoanwindow({ windowType = "fpo" }) {
  return sendApiReq({
    url: endPoints.samunnati.loanwindow + windowType,
  })
}

export function updateLoanWindowStatus(data) {
  return sendApiReq({
    method: "put",
    url: `${endPoints.loanwindow}/${data.id}/approval`,
    data
  })
}

export function updateLoanStatus(data) {
  return sendApiReq({
    method: "put",
    url: `${endPoints.loanwindow}/${data.windowId}/loan/${data.id}/approval`,
    data
  })
}

export function updateRepayment(data) {
  return sendApiReq({
    method: "put",
    url: `${endPoints.loanwindow}/${data.lWId}/repayment/${data.id}`,
    data
  })
}
