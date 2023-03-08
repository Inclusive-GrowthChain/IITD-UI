import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import LockSharpIcon from "@mui/icons-material/LockSharp";
import Dropdown from "react-bootstrap/Dropdown";

import logo from "../../assets/img/logo.png";
import "./Login.css";

import CorporateClientSignup from "./Modals/CorporateClientSignup";
import SamunnatiSignup from "./Modals/SamunnatiSignup";
import NisaSignup from "./Modals/NisaSignup";
import FpoSignup from "./Modals/FpoSignup";

const navigationList = {
  fpo: "farmer",
  nisa: "crop-advisory",
  admin: "farmer",
  farmer: "dashboard",
  samunnati: "fpo-loan",
  "iit-dhanbad": "dashboard",
  "corporate-client": "lac-bidding",
}

const Login = () => {
  const [isOpenSamunnati, setIsOpenSamunnati] = useState(false)
  const [isOpenCorporate, setIsOpenCorporate] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false)
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [isOpenIinrg, setIsOpenIinrg] = useState(false)
  const [isOpenFpo, setIsOpenFpo] = useState(false)
  const [details, setDetails] = useState({
    username: "",
    password: "",
  })

  const navigate = useNavigate()

  const onChange = e => {
    setDetails((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = e => {
    e.preventDefault()

    if (details.username !== details.password) return;

    let to = navigationList[details.username]
    if (to) navigate(`/${details.username}/${to}`)
  }

  const togglePasswordVisibility = () => setPasswordShown(passwordShown ? false : true)

  return (
    <div className="auth-bg">
      <div className="header">
        <div className="header_wrapper">
          <div className="logo_container">
            <img src={logo} className="logo" alt="logo" />
            IIT DHANBAD
          </div>
        </div>
        <div className="header_wrapper_2">
          <div
            style={{
              position: "relative",
              backgroundColor: "green",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "20px",
              marginRight: "20px",
              top: "-20px",
            }}
            className="header_wrapper_menu_container"
          >
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Organization Signup
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setIsOpenFpo(true)}>
                  FPO
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setIsOpenIinrg(true)}>
                  NISA
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setIsOpenSamunnati(true)}>
                  Samunnati
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setIsOpenCorporate(true)}>
                  Corporate Client
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="account_wrapper">
            <Link to="/signup" className="account_wrapper_link" style={{ textDecoration: 'none', color: '#fff' }}>
              Farmer Signup
            </Link>
          </div>
        </div>
        <div className="header_wrapper_3">
          <div className="hamburger_menu" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
            <div className="hamburger_menu_line"></div>
            <div className="hamburger_menu_line"></div>
            <div className="hamburger_menu_line"></div>
          </div>
          {
            hamburgerOpen && (
              <div className="hamburger_container">
                <div className="hamburger_menu_wrapper_item">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Organization Signup
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => setIsOpenFpo(true)}>
                        FPO
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setIsOpenIinrg(true)}>
                        NISA
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setIsOpenSamunnati(true)}>
                        Samunnati
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setIsOpenCorporate(true)}>
                        Corporate Client
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="hamburger_menu_wrapper_item">
                  <Link to="/signup" className="account_wrapper">
                    Farmer Signup
                  </Link>
                </div>
              </div>
            )
          }
        </div>
      </div>

      <div className="left-side">
        <div className="widget_auth">
          <form>
            <div className="hello">
              <h3>Login</h3>
            </div>

            <div className="input_text">
              <label>Username</label>
              <input
                className=""
                type="text"
                placeholder="username"
                name="username"
                value={details.username}
                onChange={onChange}
              />
              <PersonSharpIcon
                style={{
                  position: "relative",
                  bottom: "37px",
                  left: "10px",
                  fontSize: "19px",
                }}
              />
            </div>
            <div className="input_text">
              <label>Password</label>
              <input
                className=""
                type={passwordShown ? "text" : "password"}
                placeholder="password"
                name="password"
                value={details.password}
                onChange={onChange}
              />
              <LockSharpIcon
                style={{
                  position: "relative",
                  bottom: "37px",
                  left: "10px",
                  fontSize: "19px",
                }}
              />
              <VisibilityOutlinedIcon
                onClick={togglePasswordVisibility}
                style={{
                  position: "relative",
                  float: "right",
                  bottom: "30px",
                  fontSize: "18px",
                  right: "10px",
                  cursor: "pointer",
                }}
              />
              <Link to="/forget-password" className="pass__contant">
                Forgot password?
              </Link>
            </div>
            <div className="submit_btn">
              <button type="submit" value="submit" onClick={onSubmit}>
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="footer">
        <p style={{ color: "#000" }}>
          Designed and Developed by
          <span
            style={{ color: "#064420", fontSize: "21px", fontWeight: "bold" }}
          >
            IGC
          </span>
        </p>
      </div>

      <FpoSignup
        show={isOpenFpo}
        close={() => setIsOpenFpo(false)}
      />

      <NisaSignup
        show={isOpenIinrg}
        close={() => setIsOpenIinrg(false)}
      />

      <SamunnatiSignup
        show={isOpenSamunnati}
        close={() => setIsOpenSamunnati(false)}
      />

      <CorporateClientSignup
        show={isOpenCorporate}
        close={() => setIsOpenCorporate(false)}
      />
    </div>
  )
}

export default Login