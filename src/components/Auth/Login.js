import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import loginImage from "../../assets/img/loginImage.svg";
import logo from "../../assets/img/logo.png";
import "../../index.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import LockSharpIcon from "@mui/icons-material/LockSharp";
import Dropdown from "react-bootstrap/Dropdown";
import FpoModal from "../OrganizationSignup/FpoModal";
import NISAModal from "../OrganizationSignup/NISAModal";
import SamunnatiModal from "../OrganizationSignup/SamunnatiModal";
import CorporateClientModal from "../OrganizationSignup/CorporateClientModal";

const Login = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setDetails((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    if (details.username === "farmer" && details.password === "farmer") {
      navigate("/farmer/dashboard");
    }
    if (details.username === "fpo" && details.password === "fpo") {
      navigate("/fpo/farmer");
    }
    if (details.username === "nisa" && details.password === "nisa") {
      navigate("/nisa/crop-advisory");
    }
    if (details.username === "samunnati" && details.password === "samunnati") {
      navigate("/samunnati/fpo-loan");
    }
    if (
      details.username === "corporate_client" &&
      details.password === "corporate_client"
    ) {
      navigate("/corporate-client/lac-bidding");
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [isOpenFpo, setIsOpenFpo] = useState(false);
  const [isOpenIinrg, setIsOpenIinrg] = useState(false);
  const [isOpenSamunnati, setIsOpenSamunnati] = useState(false);
  const [isOpenCorporate, setIsOpenCorporate] = useState(false);

  return (
    <div className="auth-bg">
      <div className="header">
        <div className="header_wrapper">
          <img src={logo} className="logo" alt="logo" />
          <h2>iit dhanbad</h2>
          <div
            style={{
              position: "relative",
              left: "38em",
              backgroundColor: "green",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "20px",
            }}
          >
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Organization Signup
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setIsOpenFpo(true);
                  }}
                >
                  FPO
                </Dropdown.Item>
                <FpoModal show={isOpenFpo} close={() => setIsOpenFpo(false)} />
                <Dropdown.Item
                  onClick={() => {
                    setIsOpenIinrg(true);
                  }}
                >
                  NISA
                </Dropdown.Item>
                <NISAModal
                  show={isOpenIinrg}
                  close={() => setIsOpenIinrg(false)}
                />
                <Dropdown.Item
                  onClick={() => {
                    setIsOpenSamunnati(true);
                  }}
                >
                  Samunnati
                </Dropdown.Item>
                <SamunnatiModal
                  show={isOpenSamunnati}
                  close={() => setIsOpenSamunnati(false)}
                />
                <Dropdown.Item
                  onClick={() => {
                    setIsOpenCorporate(true);
                  }}
                >
                  Corporate Client
                </Dropdown.Item>
                <CorporateClientModal
                  show={isOpenCorporate}
                  close={() => setIsOpenCorporate(false)}
                />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Link to="/signup" className="account_wrapper">
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
    </div>
  );
};

export default Login;
