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

export function getUserDetails() {
  return sendApiReq({
    url: endPoints.userDetails
  })
}

export function fpoSignup(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.fpoSignup,
    data,
    successMsg: "FPO account created successfully"
  })
}

export function forgotPassword(data) {

  return sendApiReq({
    method: "post",
    url: endPoints.forgotPassword,
    data
  })
}

export function updatePassword(data) {

  return sendApiReq({
    method: "patch",
    url: endPoints.updatePassword,
    data,
    successMsg: "Password has been updated successfully"
  })
}

export function nisaSignup(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.nisaSignup,
    data,
    successMsg: "NISA account created successfully"
  })
}

export function samunnatiSignup(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.samunnatiSignup,
    data,
    successMsg: "Samunnati account created successfully"
  })
}

export function corporateClientSignup(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.corporateClientSignup,
    data,
    successMsg: "Corporate Client account created successfully"
  })
}

export function farmerSignup(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.farmerSignup,
    data,
    successMsg: "Farmer account created successfully"
  })
}

export function getFpoList() {
  return sendApiReq({
    url: endPoints.userList.fpo,
    isAuthendicated: false,
  })
}
