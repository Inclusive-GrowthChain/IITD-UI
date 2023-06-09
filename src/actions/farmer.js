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

export function getAllProduceList(data) {
  return sendApiReq({
    url: endPoints.farmer.produce + `/produce`,
  })
}

export function addProduce(data) {
  console.log(data)
  const formData = new FormData()
  formData.append("farmerId", data.farmerId)
  formData.append("lacStrainType", data.lacStrainType)
  formData.append("treeSource", data.treeSource)
  formData.append("origin", data.origin)
  formData.append("quantity", data.quantity)
  formData.append("image", data.image[0])
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
