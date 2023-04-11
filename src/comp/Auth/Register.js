import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import states from '../../constants/states';
import axios from "axios";

function Register() {
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [doorNumber, setDoorNumber] = useState("");
  const [street, setStreet] = useState("");
  const [village, setVillage] = useState("");
  const [taluk, setTaluk] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [occupation, setOccupation] = useState("");
  const [education, setEducation] = useState("");
  const [natureOfPlace, setNatureOfPlace] = useState("");
  const [residence, setResidence] = useState("");
  const [caste, setCaste] = useState("");
  const [religion, setReligion] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [branchName, setBranchName] = useState("");
  const [panCardNumber, setPanCardNumber] = useState("");
  const [panCardImage, setPanCardImage] = useState(null);
  const [panCardImageId, setPanCardImageId] = useState("");
  const [aadharCardNumber, setAadharCardNumber] = useState("");
  const [aadharCardImage, setAadharCardImage] = useState(null);
  const [aadharCardImageId, setAadharCardImageId] = useState("");
  const [fpoName, setFpoName] = useState("");
  const [fpoId, setFpoId] = useState("");
  const [fpoList, setFpoList] = useState([]);

  useEffect(() => {
    axios
      .get("http://13.232.131.203:3000/api/signup/fpo")
      .then((response) => {
        console.log(response.data.data);
        setFpoList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAge = (e) => {
    const dob = new Date(e.target.value)
    const today = new Date()
    let temp = today.getFullYear() - dob.getFullYear()
    const m = today.getMonth() - dob.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      temp--
    }
    setAge(temp)
  }

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangeMobile = (e) => {
    setMobile(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onChangeDateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
  };

  const onChangeFatherName = (e) => {
    setFatherName(e.target.value);
  };

  const onChangeMotherName = (e) => {
    setMotherName(e.target.value);
  };

  const onChangeDoorNumber = (e) => {
    setDoorNumber(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeVillage = (e) => {
    setVillage(e.target.value);
  };

  const onChangeTaluk = (e) => {
    setTaluk(e.target.value);
  };

  const onChangeDistrict = (e) => {
    setDistrict(e.target.value);
  };

  const onChangeState = (e) => {
    setState(e.target.value);
  };

  const onChangePinCode = (e) => {
    setPinCode(e.target.value);
  };

  const onChangeOccupation = (e) => {
    setOccupation(e.target.value);
  };

  const onChangeEducation = (e) => {
    setEducation(e.target.value);
  };

  const onChangeNatureOfPlace = (e) => {
    setNatureOfPlace(e.target.value);
  };

  const onChangeResidence = (e) => {
    setResidence(e.target.value);
  };

  const onChangeCaste = (e) => {
    setCaste(e.target.value);
  };

  const onChangeReligion = (e) => {
    setReligion(e.target.value);
  };

  const onChangeBankName = (e) => {
    setBankName(e.target.value);
  };

  const onChangeAccountNumber = (e) => {
    setAccountNumber(e.target.value);
  };

  const onChangeIfscCode = (e) => {
    setIfscCode(e.target.value);
  };

  const onChangeBranchName = (e) => {
    setBranchName(e.target.value);
  };

  const onChangePanCardNumber = (e) => {
    setPanCardNumber(e.target.value);
  };

  const onChangePanCardImage = (e) => {
    setPanCardImage(e.target.files[0]);
  };

  const onChangeAadharCardNumber = (e) => {
    setAadharCardNumber(e.target.value);
  };

  const onChangeAadharCardImage = (e) => {
    setAadharCardImage(e.target.files[0]);
  };

  const onChangeFpoName = (e) => {
    setFpoName(e.target.value);
    fpoList.forEach((fpo) => {
      if (fpo.name == e.target.value) {
        setFpoId(fpo._id);
      }
    });
  };

  const resetInputs = () => {
    setUserName("");
    setMobile("");
    setPassword("");
    setConfirmPassword("");
    setDateOfBirth("");
    setGender("");
    setFatherName("");
    setMotherName("");
    setDoorNumber("");
    setStreet("");
    setVillage("");
    setTaluk("");
    setDistrict("");
    setState("");
    setPinCode("");
    setOccupation("");
    setEducation("");
    setNatureOfPlace("");
    setResidence("");
    setCaste("");
    setReligion("");
    setBankName("");
    setAccountNumber("");
    setIfscCode("");
    setBranchName("");
    setPanCardNumber("");
    setPanCardImage("");
    setPanCardImageId("");
    setAadharCardNumber("");
    setAadharCardImage("");
    setAadharCardImageId("");
    setFpoName("");
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
        if(imageName == "Pan Card") {
          setPanCardImageId(response.data.data.docId);
        }
        if(imageName == "Aadhar Card") {
          setAadharCardImageId(response.data.data.docId);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addFarmer = async () => {
    if(!userName || !mobile || !password || !confirmPassword || !dateOfBirth || !gender || !fatherName || !motherName || !doorNumber || !street || !village || !taluk || !district || !state || !pinCode || !occupation || !education || !natureOfPlace || !residence || !caste || !religion || !bankName || !accountNumber || !ifscCode || !branchName || !panCardNumber || !panCardImage || !aadharCardNumber || !aadharCardImage) {
      alert("Please fill all details and try again");
      return;
    }

    if(password != confirmPassword) {
      alert("Password and Confirm Password should be same");
      return;
    }

    await uploadImage(panCardImage, "Pan Card");
    await uploadImage(aadharCardImage, "Aadhar Card");

    console.log(fpoId);

    const newFarmer = {
      "userName": userName,
      "mobile": mobile,
      "password": password,
      "dateOfBirth": dateOfBirth,
      "age": age,
      "gender": gender,
      "fatherName": fatherName,
      "motherName": motherName,
      "doorNumber": doorNumber,
      "street": street,
      "village": village,
      "taluk": taluk,
      "district": district,
      "state": state,
      "pinCode": pinCode,
      "occupation": occupation,
      "education": education,
      "natureOfPlace": natureOfPlace,
      "residence": residence,
      "caste": caste,
      "religion": religion,
      "bankName": bankName,
      "accountNumber": accountNumber,
      "ifscCode": ifscCode,
      "branchName": branchName,
      "panCardNumber": panCardNumber,
      "panCardImage": panCardImageId,
      "aadharCardNumber": aadharCardNumber,
      "aadharCardImage": aadharCardImageId,
      "fpoName": fpoName,
      "fpoId": fpoId,
    };
    
    await axios
      .post("http://13.232.131.203:3000/api/signup/farmer", newFarmer)
      .then((response) => {
        console.log(response.data);
        resetInputs();
      })
      .catch((error) => {
        console.log(error);
      });

    return;

    window.location.reload();
  }

  return (
    <div id="main-registration-container">
      <div id="register">
        <h3>Farmer Signup</h3>
        <div className="card-body">
          <div className="container">
            <form>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Name *</label>
                  <input type="text" className="form-control" required="" onChange={onChangeUserName}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Mobile *</label>
                  <input type="text" className="form-control" onChange={onChangeMobile}/>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Password *</label>
                  <input type="password" className="form-control" required="" onChange={onChangePassword} style={{borderColor: password!=confirmPassword ? "red" : ""}}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Confirm Password *</label>
                  <input type="password" className="form-control" onChange={onChangeConfirmPassword} style={{borderColor: password!=confirmPassword ? "red" : ""}}/>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Date Of Birth *</label>
                  <input className="form-control" type="date" required="" onChange={(e) => {
                    handleAge(e);
                    onChangeDateOfBirth(e);
                  }} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Age *</label>
                  <input type="text" className="form-control" value={age} disabled />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <label className="col-form-label">Gender *</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value={gender}
                          onChange={() => {
                            setGender("Male");
                          }}
                        />
                        <label className="form-check-label" value="Male">Male</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          value={gender}
                          onChange={() => {
                            setGender("Female");
                          }}
                        />
                        <label className="form-check-label" value="Female">Female</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Father Name *</label>
                  <input type="text" className="form-control" onChange={onChangeFatherName}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Mother Name *</label>
                  <input type="text" className="form-control" onChange={onChangeMotherName}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Door Number *</label>
                  <input type="text" className="form-control" onChange={onChangeDoorNumber}/>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Street Name *</label>
                  <input type="text" className="form-control" onChange={onChangeStreet}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Village *</label>
                  <input type="text" className="form-control" onChange={onChangeVillage}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Taluk *</label>
                  <input type="text" className="form-control" onChange={onChangeTaluk}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">District *</label>
                  <input type="text" className="form-control" onChange={onChangeDistrict}/>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">State *</label>
                  <select className="form-select" value={state} onChange={onChangeState}>
                    {states.map((state) => (
                      <option value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Pincode *</label>
                  <input type="text" className="form-control" onChange={onChangePinCode}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Occupation *</label>
                  <input type="text" className="form-control" onChange={onChangeOccupation}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Education *</label>
                  <input type="text" className="form-control" onChange={onChangeEducation}/>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Nature of Place *</label>
                  <input type="text" className="form-control" onChange={onChangeNatureOfPlace}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Residence *</label>
                  <input type="text" className="form-control" onChange={onChangeResidence}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Caste *</label>
                  <input type="text" className="form-control" onChange={onChangeCaste}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Religion *</label>
                  <input type="text" className="form-control" onChange={onChangeReligion}/>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Bank Name *</label>
                  <input type="text" className="form-control" required="" onChange={onChangeBankName}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Account Number *</label>
                  <input type="text" className="form-control" required="" onChange={onChangeAccountNumber}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">IFSC Code *</label>
                  <input type="text" className="form-control" required="" onChange={onChangeIfscCode}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Branch Name *</label>
                  <input type="text" className="form-control" onChange={onChangeBranchName}/>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">PAN Card Number *</label>
                  <input type="text" className="form-control" required="" onChange={onChangePanCardNumber}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">
                    Upload PAN Card *
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    required=""
                    accept="image/*"
                    onChange={onChangePanCardImage}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Aadhaar Number *</label>
                  <input type="text" className="form-control" onChange={onChangeAadharCardNumber}/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">
                    Upload Aadhar Card *
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    required=""
                    accept="image/*"
                    onChange={onChangeAadharCardImage}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">FPO Name *</label>
                  <select className="form-select" onChange={onChangeFpoName}>
                    {fpoList.map((fpo) => (
                      <option value={fpo.fpoName}>{fpo.fpoName}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <Link to="/">
                    <button
                      type="button"
                      className="btn btn-block shadow"
                      style={{
                        backgroundColor: "#064420",
                        marginTop: "10px",
                        color: "#fff",
                        alignItems: "center",
                        width: "100%",
                        fontSize: "13px",
                      }}
                    >
                      Login
                    </button>
                  </Link>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-block shadow"
                    style={{
                      backgroundColor: "#064420",
                      marginTop: "10px",
                      color: "#fff",
                      alignItems: "center",
                      width: "100%",
                      fontSize: "13px",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      addFarmer();
                    }}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register