import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import LockSharpIcon from "@mui/icons-material/LockSharp";

import { login, setTokenToApp } from "../../../actions/auth";
import { useAuthStore } from "../../../store/useAuthStore";
import { errorNotify } from "../../../utils/toastifyHlp";

const navigationList = {
  fpo: "farmer",
  nisa: "crop-advisory",
  admin: "farmer",
  farmer: "dashboard",
  samunnati: "fpo-loan",
  "iit-dhanbad": "dashboard",
  "corporateclient": "lac-bidding",
}

const labelIconStyle = {
  position: "relative",
  bottom: "37px",
  left: "10px",
  fontSize: "19px",
}

const visiblityIconStyle = {
  position: "relative",
  float: "right",
  bottom: "30px",
  fontSize: "18px",
  right: "10px",
  cursor: "pointer",
}

const errStyle = { marginTop: "-1rem", fontSize: "12px" }

function Form() {
  const [passwordShown, setPasswordShown] = useState(false)
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  })

  const logIn = useAuthStore(s => s.logIn)
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("access_token", data.token)
      localStorage.setItem("userId", data.data._id)
      setTokenToApp(data.token)
      logIn(data.data)
      let to = navigationList[data.data.type]
      if (data.data.type === "lendingpartner") {
        to = navigationList["samunnati"]
        navigate(`/samunnati/${to}`)
        return
      }
      if (to) navigate(`/${data.data.type}/${to}`)
    },
    onError: () => {
      errorNotify()
    }
  })

  const togglePasswordVisibility = () => setPasswordShown(p => !p)

  return (
    <form onSubmit={handleSubmit(mutate)}>
      <div className="hello">
        <h3>Login</h3>
      </div>

      <div className="input_text">
        <label htmlFor="login-username">UserName</label>
        <input
          id="login-username"
          type="text"
          placeholder="userName"
          name="userName"
          {...register("userName", {
            required: "User name is required"
          })}
        />
        <PersonSharpIcon style={labelIconStyle} />
        {
          errors.userName &&
          <p className="text-danger" style={errStyle}>
            {errors.userName.message}
          </p>
        }
      </div>

      <div className="input_text">
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type={passwordShown ? "text" : "password"}
          placeholder="password"
          name="password"
          {...register("password", {
            required: "Password is required"
          })}
        />

        <LockSharpIcon style={labelIconStyle} />

        <VisibilityOutlinedIcon
          onClick={togglePasswordVisibility}
          style={visiblityIconStyle}
        />
      </div>

      <Link to="/forget-password" className="pass__contant">
        Forgot password?
      </Link>

      {
        errors.password &&
        <p className="text-danger" style={errStyle}>
          {errors.password.message}
        </p>
      }

      <div className="submit_btn">
        <button type="submit">
          Log in
        </button>
      </div>
    </form>
  )
}

export default Form