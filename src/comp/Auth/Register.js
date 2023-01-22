import { useState } from 'react';
import { Link } from "react-router-dom";
import states from '../../constants/states';

function Register() {
  const [age, setAge] = useState("")

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
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Mobile *</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Password *</label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Confirm Password *</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Date Of Birth *</label>
                  <input className="form-control" type="date" required="" onChange={handleAge} />
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
                        />
                        <label className="form-check-label">Male</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label className="form-check-label">Female</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Father Name *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Mother Name *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Door Number *</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Street Name *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Village *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Taluk *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">District *</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">State *</label>
                  <select className="form-select">
                    {states.map((state) => (
                      <option value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Pincode *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Occupation *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Education *</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Nature of Place *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Residence *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Caste *</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Religion *</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Bank Name *</label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Account Number *</label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">IFSC Code *</label>
                  <input type="text" className="form-control" required="" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Branch Name *</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">PAN Card Number *</label>
                  <input type="text" className="form-control" required="" />
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
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Aadhaar Number *</label>
                  <input type="text" className="form-control" />
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
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">FPO Name *</label>
                  <select className="form-select" required="">
                    <option value="murhu">Select</option>
                    <option value="murhu">
                      Murhu Nari Shakti Farmer Producer Company Limited
                    </option>
                    <option value="churchu">
                      Churchu Nari Urja Farmer Producer Company Limited
                    </option>
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