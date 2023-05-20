import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getAuction() {
  return sendApiReq({
    url: endPoints.auction,
  })
}

export function startAuction(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.auction,
    data
  })
}

export function getBidding() {
  return sendApiReq({
    url: endPoints.auction,
  })
}

export function requestTestReports(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.auction + `/${data.data.bidId}/bid/${data.data.bidbidId}/testreport`,
  })
}

export function makePaymentToFpo(data) {
  const formData = new FormData()
  formData.append("invoice", data.invoice)
  formData.append("amount", data.amount)
  formData.append("invoiceNumber", data.invoiceNumber)
  formData.append("invoiceDate", data.invoiceDate)
  // console.log(data)

  return sendApiReq({
    method: "post",
    url: endPoints.auction + `/${data.bidId}/bid/${data.bidbidId}/payment`,
    data: formData
  })
}
