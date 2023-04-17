import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getLacTest() {
  return sendApiReq({
    url: endPoints.nisa.getLactTest,
  })
}

export function getCropAdvisory() {
  return sendApiReq({
    url: endPoints.nisa.getCropAdvisory,
  })
}

export function addCropAdvisory(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.nisa.getCropAdvisory,
    data
  })
}

export function editCropAdvisory(data) {
  return sendApiReq({
    method: "put",
    url: endPoints.nisa.getCropAdvisory + `/${data.cropAdvisoryId}`,
    data
  })
}
