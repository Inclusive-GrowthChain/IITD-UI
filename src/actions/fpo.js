import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function getFpoProducts() {
  return sendApiReq({
    url: endPoints.fpo.products,
  })
}

export function getFpoLacProducts() {
  return sendApiReq({
    url: endPoints.fpo.lac,
  })
}
