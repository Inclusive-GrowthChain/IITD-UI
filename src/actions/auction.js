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
    url: endPoints.auction + `/${data.data.auctionId}/bid/${data.data.bidId}/testreport`,
  })
}

export function rejectTestReports(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.auction + `/${data.data.auctionId}/bid/${data.data.bidId}/testreport/reject`,
  })
}

export function makePaymentToFpo(data) {
  let dataObject = {
    clientInvoice: data.clientInvoice,
    clientAmount: data.clientAmount,
    clientInvoiceNumber: data.clientInvoiceNumber,
    clientInvoiceDate: data.clientInvoiceDate,
  }

  console.log(dataObject)

  return sendApiReq({
    method: "post",
    url: endPoints.auction + `/${data.auctionId}/bid/${data.bidId}/payment`,
    data: dataObject
  })
}
