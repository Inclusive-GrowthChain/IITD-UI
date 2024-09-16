import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getLacTest() {
  return sendApiReq({
    url: endPoints.nisa.lactTest,
  })
}

export function getFpoProducts() {
  return sendApiReq({
    url: endPoints.fpo.products,
  })
}

export function getPurchaseTransactions(_id) {
  return sendApiReq({
    url: endPoints.farmer.purchaseTransaction + `/${_id}/purchase`
  })
}

export function getSaleTransactions(_id) {
  return sendApiReq({
    url: endPoints.farmer.purchaseTransaction + `/${_id}/sale`
  })
}

export function getLoanList() {
  return sendApiReq({
    url: endPoints.farmer.loans,
  })
}

export function getProduceList(data) {
  return sendApiReq({
    url: endPoints.farmer.produce + `/${data.farmerId}/produce`,
  })
}

export function getAllProduceList() {
  return sendApiReq({
    url: endPoints.farmer.produce + `/produce`,
  })
}

export function addProduce(data) {
  const formData = new FormData()
  formData.append("farmerId", data.farmerId)
  formData.append("lacStrainType", data.lacStrainType)
  formData.append("treeSource", data.treeSource)
  formData.append("origin", data.origin)
  formData.append("quantity", data.quantity)
  formData.append("productImg", data.image[0])
  formData.append("remarks", data.remarks)

  return sendApiReq({
    method: "post",
    url: endPoints.farmer.produce + "/produce",
    data: formData,
    successMsg: "Product added successfully"
  })
}

export function applyLoan(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.loanwindow + `/${data.id}/loan`,
    data,
    successMsg: "Loan applied successfully"
  })
}


export function placeRequirement(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.farmer.placeRequirements,
    data,
    successMsg: "Requirement placed successfully!"
  })
}

export function getPlacedRequirements() {
  return sendApiReq({
    url: endPoints.farmer.placeRequirements,
  })
}

export function updateProfile(data, userType, userId) {
  return sendApiReq({
    method: "patch",
    url: endPoints.farmer.updateProfile + `/${userType}/${userId}`,
    data,
    successMsg: "Profile has been updated."
  })
}