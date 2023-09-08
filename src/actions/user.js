import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getNisaList() {
  return sendApiReq({
    url: endPoints.userList.nisa,
  })
}

export function getFpoList() {
  return sendApiReq({
    url: endPoints.userList.fpo,
  })
}


export function getListOfFPO() {
  return sendApiReq({
    url: endPoints.userList.fpolist
  })
}

export function getSamunnatiList() {
  return sendApiReq({
    url: endPoints.userList.samunnati,
  })
}

export function getCorporateClientList() {
  return sendApiReq({
    url: endPoints.userList.corporateClient,
  })
}

export function getFarmerList() {
  return sendApiReq({
    url: endPoints.userList.farmer,
  })
}

export function getUserDetails(data) {
  return sendApiReq({
    url: endPoints.userDetails + "/" + data,
  })
}
