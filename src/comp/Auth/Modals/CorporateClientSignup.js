import Modal from "react-bootstrap/Modal";
import states from '../../../constants/states';
import { useState } from "react";
import axios from "axios";

function CorporateClientSignup({ show, close }) {
  const [clientName, setClientName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [ciNumber, setCiNumber] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [licenseKey, setLicenseKey] = useState("");

  const onChangeClientName = (e) => {
    setClientName(e.target.value);
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

  const onChangeCiNumber = (e) => {
    setCiNumber(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeWebsite = (e) => {
    setWebsite(e.target.value);
  };

  const onChangeGstNumber = (e) => {
    setGstNumber(e.target.value);
  }

  const onChangeLicenseKey = (e) => {
    setLicenseKey(e.target.value);
  };

  const resetInputs = () => {
    setClientName("");
    setUserName("");
    setPassword("");
    setAddress("");
    setCity("");
    setState("");
    setPinCode("");
    setContactNumber("");
    setCiNumber("");
    setEmail("");
    setWebsite("");
    setGstNumber("");
    setLicenseKey("");
  };

  const addCorporateClient = async () => {
    if(!clientName || !userName || !password || !address || !city || !state || !pinCode || !contactNumber || !ciNumber || !email || !website || !gstNumber || !licenseKey) {
      alert("Please fill all details and try again");
      return;
    }

    const newCorporateClient = {
      "clientName": clientName,
      "userName": userName,
      "password": password,
      "address": address,
      "city": city,
      "state": state,
      "pinCode": pinCode,
      "contactNumber": contactNumber,
      "ciNumber": ciNumber,
      "email": email,
      "website": website,
      "gstNumber": gstNumber,
      "licenseKey": licenseKey
    };
    
    await axios
      .post("http://13.232.131.203:3000/api/signup/corporateclient", newCorporateClient)
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
      <Modal.Header closeButton>Corporate Client Signup</Modal.Header>
      <Modal.Body>
        <div className="corporate_signup">
          <form>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">Client Name *</label>
                <input type="text" className="form-control" required="" onChange={onChangeClientName}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Username *</label>
                <input type="text" className="form-control" required="" onChange={onChangeUserName}/>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">Password *</label>
                <input type="password" className="form-control" onChange={onChangePassword}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Address *</label>
                <input type="text" className="form-control" required="" onChange={onChangeAddress}/>
              </div>
            </div>
            <div className="row mb-2">
            <div className="col-12 col-md-6">
                <label className="form-label">City *</label>
                <input type="text" className="form-control" onChange={onChangeCity}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">State *</label>
                <select className="form-select" value={state} onChange={onChangeState}>
                  {states.map((state) => (
                    <option value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mb-2">
            <div className="col-12 col-md-6">
                <label className="form-label">PinCode *</label>
                <input className="form-control" type="text" required="" onChange={onChangePinCode}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Contact Number *</label>
                <input type="text" className="form-control" onChange={onChangeContactNumber}/>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">CI Number *</label>
                <input type="text" className="form-control" onChange={onChangeCiNumber}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Email *</label>
                <input type="text" className="form-control" onChange={onChangeEmail}/>
              </div>
            </div>
            <div className="row mb-2">
            <div className="col-12 col-md-6">
                <label className="form-label">Website *</label>
                <input type="text" className="form-control" onChange={onChangeWebsite}/>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">GST Number *</label>
                <input type="text" className="form-control" required="" onChange={onChangeGstNumber}/>
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
                    addCorporateClient();
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

export default CorporateClientSignup