import sendApiReq, { cookies } from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getNisaList() {
  return sendApiReq({
    url: endPoints.user.nisa,
  })
}

export function getFpoList() {
  return sendApiReq({
    url: endPoints.user.fpo,
  })
}

export function getSamunnatiList() {
  return sendApiReq({
    url: endPoints.user.samunnati,
  })
}

export function getCorporateClientList() {
  return sendApiReq({
    url: endPoints.user.corporateClient,
  })
}
