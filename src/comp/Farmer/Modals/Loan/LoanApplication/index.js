import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import { nanoid } from 'nanoid';

import { getActiveLoanwindow } from '../../../../../actions/fpo';
import { useAuthStore } from '../../../../../store/useAuthStore';
import { applyLoan } from "../../../../../actions/farmer";

import Loader from "../../../../Common/Loader";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

const nextBtnStyle = {
  marginTop: "20px",
  backgroundColor: "#064420",
  width: "20%",
  minWidth: "80px",
  position: "relative",
  float: "right",
}

const backBtnStyle = {
  marginTop: "1rem",
  backgroundColor: "#064420",
  width: "20%",
  minWidth: "80px",
}

function LoanApplication({ show, data, isCreate, handleClose }) {
  const [step, setStep] = useState(1)
  const userDetails = useAuthStore(s => s.userDetails)
  const queryClient = useQueryClient()

  const {
    register, formState: { errors }, handleSubmit,
    setValue, getValues, watch
  } = useForm({
    defaultValues: {
      fpoId: userDetails.fpoId,
      fpoName: !isCreate ? data.fpoName : "",
      bankName: userDetails.bankName,
      accountNumber: userDetails.accountNumber,
      ifscCode: userDetails.ifscCode,
      branchName: userDetails.branchName,
      name: userDetails.userName,
      gender: userDetails.gender,
      mobile: userDetails.mobile,
      dob: userDetails.dateOfBirth,
      age: userDetails.age,
      aadharCardNumber: userDetails.aadharCardNumber,
      aadharCardImage: userDetails.aadharCardImage,
      panCardNumber: userDetails.panCardNumber,
      panCardImage: userDetails.panCardImage,
      fatherName: userDetails.fatherName,
      motherName: userDetails.motherName,
      doorNumber: userDetails.doorNumber,
      street: userDetails.street,
      village: userDetails.village,
      taluk: userDetails.taluk,
      district: userDetails.district,
      state: userDetails.state,
      pinCode: userDetails.pinCode,
      occupation: userDetails.occupation,
      education: userDetails.education,
      natureOfPlace: userDetails.natureOfPlace,
      residence: userDetails.residence,
      caste: userDetails.caste,
      religion: userDetails.religion,
      coApplicantName: !isCreate ? data.coApplicantName : "",
      coApplicantGender: !isCreate ? data.coApplicantGender : "",
      coApplicantDob: !isCreate ? data.coApplicantDob : "",
      coApplicantAge: !isCreate ? data.coApplicantAge : "",
      relationship: !isCreate ? data.relationship : "",
      landHolding: !isCreate ? data.landHolding : "",
      landHoldingType: !isCreate ? data.landHoldingType : "",
      monthlyHHIncome: !isCreate ? data.monthlyHHIncome : "",
      monthlyHHExpenses: !isCreate ? data.monthlyHHExpenses : "",
      requestedAmount: !isCreate ? data.requestedAmount : "",
      purpose: !isCreate ? data.purpose : "",
      loanTenure: !isCreate ? data.loanTenure : "",
      intrest: !isCreate ? data.intrest : "",
      loanId: !isCreate ? data.loanId : nanoid(10),
      loanWindowId: !isCreate ? data.loanWindowId : "",
      id: !isCreate ? data.id : "",
    }
  })

  const coApplicantDob = watch("coApplicantDob")

  useEffect(() => {
    if (coApplicantDob) {
      const dobVal = new Date(coApplicantDob)
      const today = new Date()
      let temp = today.getFullYear() - dobVal.getFullYear()
      const m = today.getMonth() - dobVal.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < dobVal.getDate())) {
        temp--
      }

      setValue("coApplicantAge", temp)
    }
  }, [coApplicantDob, setValue])

  const { isLoading } = useQuery({
    queryKey: ["active-window"],
    queryFn: () => getActiveLoanwindow({ windowType: "farmer", fpoId: userDetails.fpoId }),
    onSuccess: (data) => {
      setValue("id", data?.data?.[0]?.id)
      setValue("fpoName", data?.data?.[0]?.fpoName)
      setValue("intrest", data?.data?.[0]?.intrest)
      setValue("loanWindowId", data?.data?.[0]?.windowId)
    },
    enabled: isCreate
  })

  const { mutate, isLoading: isSubmiting } = useMutation({
    mutationFn: applyLoan,
    onSuccess: () => {
      queryClient.invalidateQueries("farmer/loans")
      handleClose()
    }
  })

  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      scrollable
    >
      <Modal.Header closeButton>Farmer Loan</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(mutate)}>

          {
            isLoading &&
            <div style={{ height: "400px" }}><Loader wrapperCls="h-100" /></div>
          }
          {
            !isLoading && step === 1 &&
            <Step1
              errors={errors}
              setStep={setStep}
              register={register}
              nextBtnStyle={nextBtnStyle}
            />
          }
          {
            step === 2 &&
            <Step2
              errors={errors}
              setStep={setStep}
              register={register}
              getValues={getValues}
              backBtnStyle={backBtnStyle}
              nextBtnStyle={nextBtnStyle}
            />
          }
          {
            step === 3 &&
            <Step3
              errors={errors}
              register={register}
              setStep={setStep}
              backBtnStyle={backBtnStyle}
              nextBtnStyle={nextBtnStyle}
            />
          }
          {
            step === 4 &&
            <Step4
              errors={errors}
              register={register}
              setStep={setStep}
              backBtnStyle={backBtnStyle}
              nextBtnStyle={nextBtnStyle}
            />
          }
          {
            step === 5 &&
            <Step5
              errors={errors}
              register={register}
              setStep={setStep}
              isSubmiting={isSubmiting}
              backBtnStyle={backBtnStyle}
              nextBtnStyle={nextBtnStyle}
              isCreate={isCreate}
            />
          }
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default LoanApplication