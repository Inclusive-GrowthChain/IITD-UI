import sendApiReq, { cookies } from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function setTokenToApp(token) {
  cookies.set("IITD", token, {
    path: '/',
    domain: window.location.hostname,
    expires: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
  })
}

export function login(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.login,
    data
  })
}

export function fpoSignup(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.fpoSignup,
    data
  })
}

export function nisaSignup(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.nisaSignup,
    data
  })
}

export function samunnatiSignup(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.samunnatiSignup,
    data
  })
}

export function corporateClientSignup(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.corporateClientSignup,
    data
  })
}

export function farmerSignup(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.farmerSignup,
    data
  })
}

export function getFpoList() {
  return sendApiReq({
    url: endPoints.userList.fpo + "?mini=true",
    isAuthendicated: false,
  })
}
