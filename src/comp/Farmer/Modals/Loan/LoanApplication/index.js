import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import { nanoid } from 'nanoid';

import { getActiveLoanwindow } from '../../../../../actions/fpo';
import { useAuthStore } from '../../../../../store/useAuthStore';
import { applyLoan } from "../../../../../actions/farmer";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Loader from '../../../../Common/Loader';

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
      fpoId: userDetails?.fpoId || data.value.fpoId,
      fpoName: !isCreate ? data.fpoName || data.value.fpoName : "",
      bankName: userDetails.bankName || data.value.bankName,
      accountNumber: userDetails.accountNumber || data.value.accountNumber,
      ifscCode: userDetails.ifscCode,
      branchName: userDetails.branchName || data.value.branchName,
      name: userDetails.userName,
      gender: userDetails.gender,
      mobile: userDetails.mobile || data.value.mobile,
      dob: userDetails.dateOfBirth || data.value.dob,
      age: userDetails.age || data.value.age,
      aadharCardNumber: userDetails.aadharCardNumber || data.value.aadharCardNumber,
      aadharCardImage: userDetails.aadharCardImage || data.value.aadharCardImage,
      panCardNumber: userDetails.panCardNumber || data.value.panCardNumber,
      panCardImage: userDetails.panCardImage || data.value.panCardImage,
      fatherName: userDetails.fatherName || data.value.fatherName,
      motherName: userDetails.motherName || data.value.motherName,
      doorNumber: userDetails.doorNumber || data.value.doorNumber,
      street: userDetails.street || data.value.street,
      village: userDetails.village || data.value.village,
      taluk: userDetails.taluk || data.value.taluk,
      district: userDetails.district || data.value.district,
      state: userDetails.state || data.value.state,
      pinCode: userDetails.pinCode || data.value.pinCode,
      occupation: userDetails.occupation || data.value.occupation,
      education: userDetails.education || data.value.education,
      natureOfPlace: userDetails.natureOfPlace || data.value.natureOfPlace,
      residence: userDetails.residence || data.value.residence,
      caste: userDetails.caste || data.value.caste,
      religion: userDetails.religion || data.value.religion,
      coApplicantName: !isCreate ? data.coApplicantName || data.value.coApplicantName : "",
      coApplicantGender: !isCreate ? data.coApplicantGender || data.value.coApplicantGender : "" ,
      coApplicantDob: !isCreate ? data.coApplicantDob || data.value.coApplicantDob : "" ,
      coApplicantAge: !isCreate ? data.coApplicantAge || data.value.coApplicantAge : "" ,
      relationship: !isCreate ? data.relationship || data.value.relationship : "" ,
      landHolding: !isCreate ? data.landHolding || data.value.landHolding : "" ,
      landHoldingType: !isCreate ? data.landHoldingType || data.value.landHoldingType : "" ,
      monthlyHHIncome: !isCreate ? data.monthlyHHIncome || data.value.monthlyHHIncome : "",
      monthlyHHExpenses: !isCreate ? data.monthlyHHExpenses || data.value.monthlyHHExpenses : "" ,
      requestedAmount: !isCreate ? data.requestedAmount || data.value.requestedAmount : "" ,
      purpose: !isCreate ? data.purpose || data.value.purpose : "" ,
      loanTenure: !isCreate ? data.loanTenure || data.value.loanTenure : "" ,
      intrest: !isCreate ? data.intrest || data.value.intrest : "",
      loanId: !isCreate ? data.loanId || data.value.loanId : nanoid(10),
      loanWindowId: !isCreate ? data.loanWindowId || data.value.loanWindowId : "" ,
      id: !isCreate ? data.id || data.value.id : "",
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

  const {isLoading} = useQuery({
    queryKey: ["active-window"],
    queryFn: () => getActiveLoanwindow({ windowType: "farmer", fpoId: userDetails.fpoId || data.value.fpoId }),
    onSuccess: (data) => {
      setValue("id", data?.data?.[0]?.id)
      setValue("fpoName", data?.data?.[0]?.fpoName)
      setValue("intrest", data?.fpoInterestRate)
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
  
  {
    isLoading && <Loader/>
  }

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

          {/* {
            isLoading &&
            <div style={{ height: "400px" }}><Loader wrapperCls="h-100" /></div>
          } */}
          {
            step === 1 &&
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