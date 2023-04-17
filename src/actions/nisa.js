import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getLacTest() {
  return sendApiReq({
    url: endPoints.nisa.lactTest,
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
    data
  })
}

export function editCropAdvisory(data) {
  return sendApiReq({
    method: "put",
    url: endPoints.nisa.cropAdvisory + `/${data.cropAdvisoryId}`,
    data
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
    data
  })
}

export function editTraining(data) {
  return sendApiReq({
    method: "put",
    url: endPoints.nisa.training + `/${data.traningId}`,
    data
  })
}
