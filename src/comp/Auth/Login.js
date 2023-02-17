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

const Login = () => {
  const [isOpenSamunnati, setIsOpenSamunnati] = useState(false)
  const [isOpenCorporate, setIsOpenCorporate] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false)
  const [isOpenIinrg, setIsOpenIinrg] = useState(false)
  const [isOpenFpo, setIsOpenFpo] = useState(false)
  const [details, setDetails] = useState({
    username: "",
    password: "",
  })
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [isOpenHamburgerSamunnati, setIsOpenHamburgerSamunnati] = useState(false)
  const [isOpenHamburgerCorporate, setIsOpenHamburgerCorporate] = useState(false)
  const [isOpenHamburgerIinrg, setIsOpenHamburgerIinrg] = useState(false)
  const [isOpenHamburgerFpo, setIsOpenHamburgerFpo] = useState(false)

  const navigate = useNavigate()

  const onChange = e => {
    setDetails((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = () => {
    if (details.username === "farmer" && details.password === "farmer") {
      navigate("/farmer/dashboard")
    }
    if (details.username === "fpo" && details.password === "fpo") {
      navigate("/fpo/farmer")
    }
    if (details.username === "nisa" && details.password === "nisa") {
      navigate("/nisa/crop-advisory")
    }
    if (details.username === "samunnati" && details.password === "samunnati") {
      navigate("/samunnati/fpo-loan")
    }
    if (
      details.username === "corporate_client" &&
      details.password === "corporate_client"
    ) {
      navigate("/corporate-client/lac-bidding")
    }
  }

  const togglePasswordVisibility = () => setPasswordShown(passwordShown ? false : true)

  return (
    <div className="auth-bg">
      <div className="header">
        <div className="header_wrapper">
          <div className="logo_container">
            <img src={logo} className="logo" alt="logo" />
            <p className="logo_text">IIT DHANBAD</p>
          </div>
          <div
            style={{
              position: "relative",
              backgroundColor: "green",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "20px",
            }}
            className="header_wrapper_menu_container"
          >
            <Dropdown className="fullwidth_menu">
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
                        <Dropdown.Item onClick={() => setIsOpenHamburgerFpo(true)}>
                          FPO
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setIsOpenHamburgerIinrg(true)}>
                          NISA
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setIsOpenHamburgerSamunnati(true)}>
                          Samunnati
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setIsOpenHamburgerCorporate(true)}>
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

          <Link to="/signup" className="account_wrapper" id="fullwidth_menu">
            Farmer Signup
          </Link>
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