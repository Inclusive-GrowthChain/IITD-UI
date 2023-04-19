import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getBidding() {
  return sendApiReq({
    url: endPoints.corporateClient.lacBidding,
  })
}
