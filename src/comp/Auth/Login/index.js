import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/img/logo.png";
import "../Login.css";

import CorporateClientSignup from "../Modals/CorporateClientSignup";
import SamunnatiSignup from "../Modals/SamunnatiSignup";
import NisaSignup from "../Modals/NisaSignup";
import FpoSignup from "../Modals/FpoSignup";

import DropDownWrapper from "./DropDownWrapper";
import Form from "./Form";

const wrapperStyle = {
  position: "relative",
  backgroundColor: "green",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  borderRadius: "20px",
  marginRight: "20px",
  top: "-20px",
}

const farmerLinkStyle = { textDecoration: 'none', color: '#fff' }
const igcSpanStyle = { color: "#0089f0", fontSize: "21px", fontWeight: "bold" }

const Login = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const [modal, setModal] = useState("")

  const closeModal = () => setModal("")

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
            style={wrapperStyle}
            className="header_wrapper_menu_container"
          >
            <DropDownWrapper onClk={setModal} />
          </div>
          <div className="account_wrapper">
            <Link to="/signup" className="account_wrapper_link" style={farmerLinkStyle}>
              Farmer Signup
            </Link>
          </div>
        </div>

        <div className="header_wrapper_3">
          <div className="hamburger_menu" onClick={() => setHamburgerOpen(p => !p)}>
            <div className="hamburger_menu_line"></div>
            <div className="hamburger_menu_line"></div>
            <div className="hamburger_menu_line"></div>
          </div>
          {
            hamburgerOpen && (
              <div className="hamburger_container">
                <div className="hamburger_menu_wrapper_item">
                  <DropDownWrapper onClk={setModal} />
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
          <Form />
        </div>
      </div>

      <div className="footer">
        <p style={{ color: "#000" }}>
          Powered by
          <span style={igcSpanStyle}>
            IGC
          </span>
        </p>
      </div>

      {
        modal === "Fpo" &&
        <FpoSignup
          show
          close={closeModal}
        />
      }
      {
        modal === "Nisa" &&
        <NisaSignup
          show
          close={closeModal}
        />
      }

      {
        modal === "Samunnati" &&
        <SamunnatiSignup
          show
          close={closeModal}
        />
      }

      {
        modal === "CorporateClient" &&
        <CorporateClientSignup
          show
          close={closeModal}
        />
      }
    </div>
  )
}

export default Login