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
