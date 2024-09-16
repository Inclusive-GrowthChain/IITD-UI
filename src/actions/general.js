import sendApiReq from '../utils/sendApiReq';
import endPoints from '../utils/endPoints';

export function uploadImg({ file, name }) {
  const formData = new FormData()
  formData.append('doc', file)
  formData.append('documentName', name)

  return sendApiReq({
    method: "post",
    url: endPoints.uploadImg,
    data: formData
  })
}
