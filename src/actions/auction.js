import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getAuction() {
  return sendApiReq({
    url: endPoints.auction,
  })
}

export function startAuction(data) {
  return sendApiReq({
    method: "post",
    url: endPoints.auction,
    data
  })
}
