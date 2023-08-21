import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getLacTest() {
  return sendApiReq({
    url: endPoints.nisa.lactTest,
  })
}

export function getLacTest2() {
  return sendApiReq({
    url: endPoints.nisa.lactTest2,
  })
}

export function addLacTest(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.nisa.lactTest,
    data,
    successMsg: "Product added successfully"
  })
}

export function addLacTest2(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.nisa.lactTest2,
    data,
    successMsg: "Product added successfully"
  })
}

export function approveLacTest(data) {
  return sendApiReq({
    method: "put",
    url: endPoints.nisa.lactTest2 + `/${data.id}`,
    data,
    successMsg: "Lac test updated successfully"
  })
}

export function getCropAdvisory() {
  return sendApiReq({
    url: endPoints.nisa.cropAdvisory,
  })
}

export function addCropAdvisory(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.nisa.cropAdvisory,
    data,
    successMsg: "Crop advisory added successfully"
  })
}

export function editCropAdvisory(data) {
  return sendApiReq({
    method: "put",
    url: endPoints.nisa.cropAdvisory + `/${data.cropAdvisoryId}`,
    data,
    successMsg: "Crop advisory updated successfully"
  })
}

export function getTraining() {
  return sendApiReq({
    url: endPoints.nisa.training,
  })
}

export function addTraining(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.nisa.training,
    data,
    successMsg: "New Training details added successfully"
  })
}

export function editTraining(data) {
  return sendApiReq({
    method: "put",
    url: endPoints.nisa.training + `/${data.traningId}`,
    data,
    successMsg: "Training details updated successfully"
  })
}
