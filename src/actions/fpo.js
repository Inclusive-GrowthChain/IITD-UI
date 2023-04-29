import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getFpoProducts() {
  return sendApiReq({
    url: endPoints.fpo.products,
  })
}

export function addFpoSale(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.fpo.products,
    data: data
  })
}

export function addFpoProduct(data) {
  const formData = new FormData()
  formData.append("productId", data.productId)
  formData.append("productName", data.productName)
  formData.append("marketPrice", data.marketPrice)
  formData.append("fpoPrice", data.fpoPrice)
  formData.append("productImg", data.image[0])
  formData.append("isAvailable", data.isAvailable)

  return sendApiReq({
    method: "post",
    url: endPoints.fpo.products,
    data: formData
  })
}

export function editFpoProduct(data) {
  const formData = new FormData()
  formData.append("productId", data.productId)
  formData.append("productName", data.productName)
  formData.append("marketPrice", data.marketPrice)
  formData.append("fpoPrice", data.fpoPrice)
  formData.append("isAvailable", data.isAvailable)

  if (data.image[0]) {
    formData.append("productImg", data.image[0])
  }

  return sendApiReq({
    method: "put",
    url: endPoints.fpo.products + `/${data.productId}`,
    data: formData
  })
}


export function getFpoFarmers() {
  return sendApiReq({
    url: endPoints.fpo.farmers,
  })
}


export function getFpoLac() {
  return sendApiReq({
    url: endPoints.fpo.lac,
  })
}

export function addFpoLac(data) {
  const formData = new FormData()
  formData.append("productId", data.productId)
  formData.append("productName", data.productName)
  formData.append("marketPrice", data.marketPrice)
  formData.append("fpoPrice", data.fpoPrice)
  formData.append("productImg", data.image[0])
  formData.append("isProcurable", data.isProcurable)

  return sendApiReq({
    method: "post",
    url: endPoints.fpo.lac,
    data: formData
  })
}

export function editFpoLac(data) {
  const formData = new FormData()
  formData.append("productId", data.productId)
  formData.append("productName", data.productName)
  formData.append("marketPrice", data.marketPrice)
  formData.append("fpoPrice", data.fpoPrice)
  formData.append("isProcurable", data.isProcurable)

  if (data.image[0]) {
    formData.append("productImg", data.image[0])
  }

  return sendApiReq({
    method: "put",
    url: endPoints.fpo.lac + `/${data.productId}`,
    data: formData
  })
}


export function getLoanwindow({ windowType = "farmer" }) {
  return sendApiReq({
    url: endPoints.loanwindow,
    params: { windowType },
  })
}

export function createLoanwindow(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.loanwindow,
    data,
  })
}

export function createLoan(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.loanwindow + `/${data.id}/loan`,
    data,
  })
}


export function getFarmerApplication(userId) {
  return sendApiReq({
    url: endPoints.user + `/${userId}`,
  })
}


export function setFarmerIntrestRate(data) {
  return sendApiReq({
    method: "put",
    url: endPoints.fpo.interstRate,
    data,
  })
}
