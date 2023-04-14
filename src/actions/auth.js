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
