import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getFpoProducts() {
  return sendApiReq({
    url: endPoints.fpo.products,
  })
}
