import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import { addLacTest} from "../../../actions/nisa";

import FileInput from "../../Common/FileInput";
import Input from '../../Nisa/Modals/Input';

const list = [
  {
    label: "FPO Name",
    name: "fpoName",
  },
  {
    label: "Contact No.",
    name: "fpoContact",
  },
  {
    label: "Sample Id",
    name: "sampleId",
  },
  {
    label: "Date",
    name: "dateOfApplication",
    type: "date"
  },
  {
    label: "Test Category",
    name: "category",
    isSelect: true,
    options: [
      "Shellac / Seedlac / By-product of Lac",
      "Bleached Lac",
      "Lac Dye",
      "Shellac Wax",
      "Aleuritic Acid",
      "Hydrolysed Lac",
      "Sealing Wax",
      "Gasket Shellac Compound",
      "Organic Substance",
    ],
  },
  {
    label: "Test Name",
    name: "testName",
  },
  {
    label: "Amount",
    name: "amount",
    type: "number",
  },
  {
    label: "Payment Reference No.",
    name: "paymentRefNo",
    type: "number",
  },
  {
    label: "Payment Image",
    name: "paymentImg",
    isFile: true
  },
  {
    label: "Lac Sample Image",
    name: "lacSampleImg",
    isFile: true
  },
  {
    label: "Remarks",
    name: "remarks",
  },
]

function LabSampleTest({ show, handleClose }) {
  const queryClient = useQueryClient()
  const { register, formState: { errors }, handleSubmit, setValue, clearErrors } = useForm({
    defaultValues: {
      fpoName: "",
      fpoContact: "",
      sampleId: "",
      dateOfApplication: "",
      category: "",
      testName: "",
      amount: "",
      paymentRefNo: "",
      paymentImg: "",
      lacSampleImg: "",
      remarks: "",
    }
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: addLacTest,
    onSuccess: () => {
      queryClient.invalidateQueries("nisa/lactest")
      handleClose()
    }
  })

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="store_card"
    >
      <Modal.Header closeButton>Lab Sample Test</Modal.Header>
      <Modal.Body>
        <form
          className="p-2"
          onSubmit={handleSubmit(mutate)}
        >
          {
            list.map(l => {
              if (!l.isFile) {
                return (
                  <Input
                    {...l}
                    key={l.name}
                    register={register}
                    errors={errors}
                  />
                )
              }

              return (
                <FileInput
                  {...l}
                  key={l.name}
                  errors={errors}
                  register={register}
                  setValue={setValue}
                  clearErrors={clearErrors}
                />
              )
            })
          }

          <div className="row m-2">
            <button
              className="btn btn-success"
              style={{ backgroundColor: "#064420" }}
              disabled={isLoading}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default LabSampleTest