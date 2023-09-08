import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";

import { samunnatiSignup } from "../../../actions/auth";
import states from '../../../constants/states';
import FormHelp from "./FormHelp";

const btnStyle = {
  backgroundColor: "#064420",
  marginTop: "10px",
  color: "#fff",
  alignItems: "center",
  width: "20%",
  fontSize: "15px",
}

const fieldSet1 = [
  {
    name: "userName",
    label: "Username",
    type: "text"
  },
  {
    name: "password",
    label: "Password",
    type: "text"
  },
  {
    name: "address",
    label: "Address",
    type: 'text'
  },
  {
    name: "district",
    label: "District",
    type: "text"
  },
  {
    name: "city",
    label: "City",
    type: "text"
  },
  {
    name: "state",
    label: "State",
    options: states,
    isSelect: true,
  },
  {
    name: "pinCode",
    label: "Pin Code",
    type: "number",
    validation: {
      minLength: {
        value: 6,
        message: "Pincode number is not valid"
      },
    }
  },
  {
    name: "contactNumber",
    label: "Contact Number",
    type: "number",
    validation: {
      minLength: {
        value: 10,
        message: "Contact number is not valid"
      },
    }
  },
  {
    name: "email",
    label: "Email",
    type: "email"
  },
  {
    name: "website",
    label: "Website",
    type: 'text'
  },
  {
    name: "licenseKey",
    label: "License Key",
    type: "text"
  },
];

function SamunnatiSignup({ show, close }) {
  const {
    register, setValue,
    formState: { errors },
    handleSubmit, reset,
    clearErrors
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
      address: "",
      city: "",
      state: "",
      pinCode: "",
      contactNumber: "",
      email: "",
      website: "",
      licenseKey: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: samunnatiSignup,
    onSuccess: () => {
      reset()
      close()
    }
  })

  return (
    <Modal size="lg" show={show} onHide={close} centered>
      <Modal.Header closeButton>Samunnati Signup</Modal.Header>
      <Modal.Body>
        <div className="samunnati_signup">
          <form onSubmit={handleSubmit(mutate)}>
            <div className="row mb-2">
              <FormHelp
                fields={fieldSet1}
                errors={errors}
                register={register}
                setValue={setValue}
                clearErrors={clearErrors}
              />
            </div>

            <div className="row mt-2">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-block shadow"
                  style={btnStyle}
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

export default SamunnatiSignup