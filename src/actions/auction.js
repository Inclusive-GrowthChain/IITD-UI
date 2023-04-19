import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getAuction() {
  return sendApiReq({
    url: endPoints.auction,
  })
}
