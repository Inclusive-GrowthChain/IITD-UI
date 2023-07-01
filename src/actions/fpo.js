import sendApiReq from "../utils/sendApiReq";
import endPoints from "../utils/endPoints";

export function getFpoProducts() {
  return sendApiReq({
    url: endPoints.fpo.products,
  });
}

export function getLoansData(farmerId) {
  return sendApiReq({
    url: endPoints.fpo.loanData + `${farmerId}`,
  });
}

export function getUserDetails(farmerId) {
  return sendApiReq({
    url: endPoints.fpo.userDetails + `/${farmerId}`,
  });
}

export function addFpoSale(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.fpo.products,
    data,
    successMsg: "Product added successfully",
  });
}

export function addPurchase(data_passed, farmerId) {
  const restructuredData = {
    transactions: [data_passed],
    type: "purchase",
    farmerId: farmerId,
  };

  return sendApiReq({
    method: "post",
    url: endPoints.fpo.purchase,
    data: restructuredData,
    successMsg: "Purchase details added successfully",
  });
}

export function addSale(data_passed, farmerId) {
  const restructuredData = {
    transactions: [data_passed],
    type: "sale",
    farmerId: farmerId,
  };

  return sendApiReq({
    method: "post",
    url: endPoints.fpo.sale,
    data: restructuredData,
    successMsg: "Sale details added successfully",
  });
}

export function addFpoProduct(data) {
  const formData = new FormData();
  formData.append("productId", data.productId);
  formData.append("productName", data.productName);
  formData.append("marketPrice", data.marketPrice);
  formData.append("fpoPrice", data.fpoPrice);
  formData.append("productImg", data.image[0]);
  formData.append("isAvailable", data.isAvailable);

  console.log(formData);
  return sendApiReq({
    method: "post",
    url: endPoints.fpo.products,
    data: formData,
    successMsg: "Product added successfully",
  });
}

export function editFpoProduct(data) {
  const formData = new FormData();
  formData.append("productId", data.productId);
  formData.append("productName", data.productName);
  formData.append("marketPrice", data.marketPrice);
  formData.append("fpoPrice", data.fpoPrice);
  formData.append("isAvailable", data.isAvailable);
  formData.append("productImg", data.image[0]);

  return sendApiReq({
    method: "put",
    url: endPoints.fpo.products + `/${data.productId}`,
    data: formData,
    successMsg: "Product updated successfully",
  });
}

export function getFpoFarmers() {
  return sendApiReq({
    url: endPoints.fpo.farmers,
  });
}

export function getItemNames() {
  return sendApiReq({
    url: endPoints.fpo.itemsName,
  });
}

export function getLacTypes() {
  return sendApiReq({
    url: endPoints.fpo.lacType,
  });
}

export function getFpoLac() {
  return sendApiReq({
    url: endPoints.fpo.lac,
  });
}

export function addFpoLac(data) {
  const formData = new FormData();
  formData.append("productId", data.productId);
  formData.append("productName", data.productName);
  formData.append("marketPrice", data.marketPrice);
  formData.append("fpoPrice", data.fpoPrice);
  formData.append("productImg", data.image[0]);
  formData.append("isProcurable", data.isProcurable);

  return sendApiReq({
    method: "post",
    url: endPoints.fpo.lac,
    data: formData,
    successMsg: "Product added successfully",
  });
}

export function editFpoLac(data) {
  const formData = new FormData();
  formData.append("productId", data.productId);
  formData.append("productName", data.productName);
  formData.append("marketPrice", data.marketPrice);
  formData.append("fpoPrice", data.fpoPrice);
  formData.append("isProcurable", data.isProcurable);

  if (data.image[0]) {
    formData.append("productImg", data.image[0]);
  }

  return sendApiReq({
    method: "put",
    url: endPoints.fpo.lac + `/${data.productId}`,
    data: formData,
    successMsg: "Product updated successfully",
  });
}

export function getLoanwindow({ windowType = "farmer" }) {
  return sendApiReq({
    url: endPoints.loanwindow,
    params: { windowType },
  });
}

export function getLoanHistory({ type = "fpo", userId }) {
  return sendApiReq({
    url: endPoints.loanHistory,
    params: {
      status: "approved",
      userId,
      type,
    },
  });
}

export function getActiveLoanwindow({ windowType = "fpo", fpoId }) {
  let url = `${endPoints.loanwindow}/activeLoanWindow/${windowType}`;
  if (fpoId) url = `${url}?fpoId=${fpoId}`;

  return sendApiReq({ url });
}

export function createLoanwindow(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.loanwindow,
    data,
    successMsg: "Loan window created successfully",
  });
}

export function createLoan(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.loanwindow + `/${data.id}/loan`,
    data,
    successMsg: "Loan created successfully",
  });
}

export function updateFarmerLoanRepayment(rData) {
  let data = {
    paymentDate: rData.paymentDate,
    paidAmount: rData.paidAmount,
  };

  return sendApiReq({
    method: "put",
    url:
      endPoints.loanwindow +
      `/${rData.windowId}/loan/${rData.loanId}/repayment/${rData.repaymentId}`,
    data,
    successMsg: "Repayment updated successfully",
  });
}

export function updateFarmerLoanStatus(data) {
  return sendApiReq({
    method: "put",
    url: `${endPoints.loanwindow}/${data.windowId}/loan/${data.id}/approval`,
    data,
    successMsg: "Status updated successfully",
  });
}

export function getFarmerApplication(userId) {
  return sendApiReq({
    url: endPoints.user + `/${userId}`,
  });
}

export function updateFarmerApplication(data) {
  return sendApiReq({
    method: "put",
    url: `${endPoints.fpo.farmers}/${data._id}`,
    data,
    successMsg: "Farmer application status updated successfully",
  });
}

export function setFarmerIntrestRate(data) {
  return sendApiReq({
    method: "put",
    url: endPoints.fpo.interstRate,
    data,
    successMsg: "Interest updated successfully",
  });
}

// Bidding requests
export function placeBidForAuction(data) {
  let dataObject = {
    bidAmount: data.data.bidAmount,
    fpoId: data.data.fpoId,
    fpoName: data.data.fpoName,
    fpoPhone: data.data.fpoPhone,
  };
  return sendApiReq({
    method: "post",
    url: endPoints.auction + `/${data.data.auctionId}/bid`,
    data: dataObject,
  });
}

export function sendTestReports(data) {
  let dataObject = {
    requiredTestReports: data.requiredTestReports,
  };
  return sendApiReq({
    method: "put",
    url: endPoints.auction + `/${data.auctionId}/bid/${data.bidId}/testreport`,
    data: dataObject,
  });
}

export function sendInvoice(data) {
  let dataObject = {
    invoice: data.invoice,
  };
  return sendApiReq({
    method: "put",
    url: endPoints.auction + `/${data.auctionId}/bid/${data.bidId}/invoice`,
    data: dataObject,
  });
}

export function approveClientPayment(data) {
  return sendApiReq({
    method: "post",
    url:
      endPoints.auction +
      `/${data.data.auctionId}/bid/${data.data.bidId}/payment/approve`,
  });
}
