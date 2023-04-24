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
  console.log(data);
  return sendApiReq({
    url: endPoints.farmer.produce + `/${data.farmerId}/produce`,
  })
}

export function addProduce(data) {
  const formData = new FormData()
  formData.append("farmerId", data.farmerId)
  formData.append("lacStrainType", data.lacStrainType)
  formData.append("treeSource", data.treeSource)
  formData.append("origin", data.origin)
  formData.append("quantity", data.quantity)
  formData.append("remarks", data.remarks)

  return sendApiReq({
    method: "post",
    url: endPoints.farmer.produce + "/produce",
    data: formData
  })
}
