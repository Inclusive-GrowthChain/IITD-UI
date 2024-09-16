import sendApiReq from "../utils/sendApiReq";
import endPoints from "../utils/endPoints";

export function getLicenses(role) {
  return sendApiReq({
    url: endPoints.admin.getLicenses + `/${role}`,
  });
}

export function deleteLicense(id) {
  const restructuredData = {
    licenseKey: id.id,
  };
  return sendApiReq({
    method: "delete",
    url: endPoints.admin.getLicenses,
    data: restructuredData,
  });
}

export function createLicense(licenseData) {
  const restructuredData = {
    name: licenseData.name,
    role: licenseData.role
  };
  return sendApiReq({
    method: "post",
    url: endPoints.admin.getLicenses,
    data: restructuredData,
  });
}
