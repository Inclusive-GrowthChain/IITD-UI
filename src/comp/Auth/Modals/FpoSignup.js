import Modal from "react-bootstrap/Modal";
import states from '../../../constants/states';
import { useState } from "react";
import axios from "axios";

function FpoSignup({ show, close }) {
  const [fpoName, setFpoName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [dateOfIncorporation, setDateOfIncorporation] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [panImage, setPanImage] = useState(null);
  const [panImageId, setPanImageId] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [shareholderNumber, setShareholderNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [passbookImage, setPassbookImage] = useState(null);
  const [passbookImageId, setPassbookImageId] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [directorContactNumber, setDirectorContactNumber] = useState("");
  const [directorGender, setDirectorGender] = useState("");
  const [bylawsImage, setBylawsImage] = useState(null);
  const [bylawsImageId, setBylawsImageId] = useState("");
  const [incorporationCertifcateImage, setIncorporationCertifcateImage] = useState(null);
  const [incorporationCertifcateImageId, setIncorporationCertifcateImageId] = useState("");
  const [gstCertificate, setGstCertificate] = useState(null);
  const [gstCertificateId, setGstCertificateId] = useState("");
  const [licenseKey, setLicenseKey] = useState("");

  const onChangeFpoName = (e) => {
    setFpoName(e.target.value);
  };

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onChangeState = (e) => {
    setState(e.target.value);
  };

  const onChangePinCode = (e) => {
    setPinCode(e.target.value);
  };

  const onChangeContactNumber = (e) => {
    setContactNumber(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeWebsite = (e) => {
    setWebsite(e.target.value);
  };

  const onChangeDateOfIncorporation = (e) => {
    setDateOfIncorporation(e.target.value);
  };

  const onChangePanNumber = (e) => {
    setPanNumber(e.target.value);
  };

  const onChangePanImage = (e) => {
    setPanImage(e.target.files[0]);
  };

  const onChangeRegistrationNumber = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const onChangeShareholderNumber = (e) => {
    setShareholderNumber(e.target.value);
  };

  const onChangeBankName = (e) => {
    setBankName(e.target.value);
  };

  const onChangeBankAccountNumber = (e) => {
    setBankAccountNumber(e.target.value);
  };

  const onChangeIfscCode = (e) => {
    setIfscCode(e.target.value);
  };

  const onChangePassbookImage = (e) => {
    setPassbookImage(e.target.files[0]);
  };

  const onChangeDirectorName = (e) => {
    setDirectorName(e.target.value);
  };

  const onChangeDirectorContactNumber = (e) => {
    setDirectorContactNumber(e.target.value);
  };

  const onChangeDirectorGender = (e) => {
    setDirectorGender(e.target.value);
  };

  const onChangeBylawsImage = (e) => {
    setBylawsImage(e.target.files[0]);
  };

  const onChangeIncorporationCertifcateImage = (e) => {
    setIncorporationCertifcateImage(e.target.files[0]);
  };

  const onChangeGstCertificate = (e) => {
    setGstCertificate(e.target.files[0]);
  };

  const onChangeLicenseKey = (e) => {
    setLicenseKey(e.target.value);
  };

  const resetInputs = () => {
    setFpoName("");
    setUserName("");
    setPassword("");
    setAddress("");
    setCity("");
    setState("");
    setPinCode("");
    setContactNumber("");
    setEmail("");
    setWebsite("");
    setDateOfIncorporation("");
    setPanNumber("");
    setPanImage(null);
    setPanImageId("");
    setRegistrationNumber("");
    setShareholderNumber("");
    setBankName("");
    setBankAccountNumber("");
    setIfscCode("");
    setPassbookImage(null);
    setPassbookImageId("");
    setDirectorName("");
    setDirectorContactNumber("");
    setDirectorGender("");
    setBylawsImage(null);
    setBylawsImageId("");
    setIncorporationCertifcateImage(null);
    setIncorporationCertifcateImageId("");
    setGstCertificate(null);
    setGstCertificateId("");
    setLicenseKey("");
  };

  const uploadImage = async (image, imageName) => {
    // const imageUpload = {
    //   "doc": image,
    //   "documentName": imageName,
    // };

    const formData = new FormData();
    formData.append('doc', image);
    formData.append('documentName', imageName);

    await axios
      .post("http://13.232.131.203:3000/api/document", formData)
      .then((response) => {
        console.log(response.data);
        if(imageName === "Pan Card") {
          setPanImageId(response.data.data.docId);
        }
        if(imageName === "Passbook") {
          setPassbookImageId(response.data.data.docId);
        }
        if(imageName === "Bylaws") {
          setBylawsImageId(response.data.data.docId);
        }
        if(imageName === "Incorporation Certifcate") {
          setIncorporationCertifcateImageId(response.data.data.docId);
        }
        if(imageName === "GST Certificate") {
          setGstCertificateId(response.data.data.docId);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addFpo = async () => {
    if(!fpoName || !userName || !password || !address || !city || !state || !pinCode || !contactNumber || !email || !website || !dateOfIncorporation || !panNumber || !panImage || !registrationNumber || !shareholderNumber || !bankName || !bankAccountNumber || !ifscCode || !passbookImage || !directorName || !directorContactNumber || !directorGender || !bylawsImage || !incorporationCertifcateImage || !gstCertificate || !licenseKey) {
      alert("Please fill all details and try again");
      return;
    }

    uploadImage(panImage, "Pan Card");
    uploadImage(passbookImage, "Passbook");
    uploadImage(bylawsImage, "Bylaws");
    uploadImage(incorporationCertifcateImage, "Incorporation Certifcate");
    uploadImage(gstCertificate, "GST Certificate");

    const newFpo = {
      "fpoName": fpoName,
      "userName": userName,
      "password": password,
      "address": address,
      "city": city,
      "state": state,
      "pinCode": pinCode,
      "contactNumber": contactNumber,
      "email": email,
      "website": website,
      "dateOfIncorporation": dateOfIncorporation,
      "panNumber": panNumber,
      "panImage": panImageId,
      "registrationNumber": registrationNumber,
      "shareholderNumber": shareholderNumber,
      "bankName": bankName,
      "bankAccountNumber": bankAccountNumber,
      "ifscCode": ifscCode,
      "passbookImage": passbookImageId,
      "directorName": directorName,
      "directorContactNumber": directorContactNumber,
      "directorGender": directorGender,
      "bylawsImage": bylawsImageId,
      "incorporationCertifcateImage": incorporationCertifcateImageId,
      "gstCertificate": gstCertificateId,
      "licenseKey": licenseKey
    };
    
    await axios
      .post("http://13.232.131.203:3000/api/signup/fpo", newFpo)
      .then((response) => {
        console.log(response.data);
        resetInputs();
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.reload();
  }

  return (
    <Modal size="lg" show={show} onHide={close} centered>
      <Modal.Header closeButton>FPO Signup</Modal.Header>
      <Modal.Body>
        <div className="fpo_signup">
          <form>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">Name of FPO *</label>
                <input type="text" className="form-control" required="" onChange={onChangeFpoName}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Username *</label>
                <input type="text" className="form-control" onChange={onChangeUserName}/>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">Password *</label>
                <input type="password" className="form-control" required="" onChange={onChangePassword}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Address *</label>
                <input type="text" className="form-control" onChange={onChangeAddress}/>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">City *</label>
                <input className="form-control" type="text" required="" onChange={onChangeCity}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">State *</label>
                <select className="form-select" value={state} onChange={onChangeState}>
                  {states.map((state) => (
                    <option value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">PinCode *</label>
                <input className="form-control" type="text" required="" onChange={onChangePinCode}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Contact Number *</label>
                <input className="form-control" type="text" required="" onChange={onChangeContactNumber}/>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">Email *</label>
                <input type="text" className="form-control" onChange={onChangeEmail}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Website *</label>
                <input type="text" className="form-control" onChange={onChangeWebsite}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Date of InCorporation *</label>
                <input type="date" className="form-control" onChange={onChangeDateOfIncorporation}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">PAN Number *</label>
                <input type="text" className="form-control" onChange={onChangePanNumber}/>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">PAN Card Image *</label>
                <input
                  type="file"
                  className="form-control"
                  required=""
                  accept="image/*"
                  onChange={onChangePanImage}
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Registration Number *</label>
                <input type="text" className="form-control" onChange={onChangeRegistrationNumber}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">No of ShareHolders *</label>
                <input type="text" className="form-control" required="" onChange={onChangeShareholderNumber}/>
              </div>
            </div>
            <div className="row mb-2">
              <h5 className="mt-3">Bank Details</h5>
              <div className="col-12 col-md-6">
                <label className="form-label">Bank Name *</label>
                <input type="text" className="form-control" onChange={onChangeBankName}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Account Number *</label>
                <input type="text" className="form-control" required="" onChange={onChangeBankAccountNumber}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">IFSC Number *</label>
                <input type="text" className="form-control" required="" onChange={onChangeIfscCode}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">
                  Upload Bank Passbook Image *
                </label>
                <input
                  type="file"
                  className="form-control"
                  required=""
                  accept="image/*"
                  onChange={onChangePassbookImage}
                />
              </div>
            </div>
            <div className="row mb-2">
              <h5 className="mt-3">Director Details</h5>
              <div className="col-12 col-md-6">
                <label className="form-label">Name *</label>
                <input type="text" className="form-control" onChange={onChangeDirectorName}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Mobile Number *</label>
                <input type="text" className="form-control" required="" onChange={onChangeDirectorContactNumber}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Gender *</label>
                <select className="form-select" required="" value={directorGender} onChange={onChangeDirectorGender}>
                  <option value="select">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">
                  Copy of Bylaws (MOA & AOA) *
                </label>
                <input
                  type="file"
                  className="form-control"
                  required=""
                  accept="image/*"
                  onChange={onChangeBylawsImage}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">
                  Certificate of Incorporation *
                </label>
                <input
                  type="file"
                  className="form-control"
                  required=""
                  accept="image/*"
                  onChange={onChangeIncorporationCertifcateImage}
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">GST Certificate *</label>
                <input
                  type="file"
                  className="form-control"
                  required=""
                  accept="image/*"
                  onChange={onChangeGstCertificate}
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">License Key *</label>
                <input type="text" className="form-control" required="" onChange={onChangeLicenseKey}/>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-block shadow"
                  style={{
                    backgroundColor: "#064420",
                    marginTop: "10px",
                    color: "#fff",
                    alignItems: "center",
                    width: "20%",
                    fontSize: "15px",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    addFpo();
                  }}
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default FpoSignup