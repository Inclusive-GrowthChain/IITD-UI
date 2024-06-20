import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";

import { addLacTest } from "../../../actions/fpo";
import FileInput from "../../Common/FileInput";
import Input from "../../Nisa/Modals/Input";
import { useAuthStore } from "../../../store/useAuthStore";

function LabSampleTest({ show, handleClose, appList }) {
  const fpo = useAuthStore((s) => s.userDetails);
  const uniqueCategories = Array.from(
    new Set(appList.map((item) => item.category))
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
    clearErrors,
  } = useForm({
    defaultValues: {
      fpoName: fpo?.name || "",
      fpoContact: fpo?.contactNumber || "",
      sampleId: "",
      dateOfApplication: "",
      category: "",
      testName: "",
      amount: "",
      paymentRefNo: "",
      paymentImg: "",
      lacSampleImg: "",
      remarks: "",
    },
  });

  const watchedCategory = watch("category");
  const watchedTestName = watch("testName");

  useEffect(() => {
    if (watchedCategory) {
      setValue("testName", "");
      setValue("amount", "");
    }
  }, [watchedCategory, appList, setValue]);

  useEffect(() => {
    if (watchedTestName) {
      const selectedTest = appList.find(
        (test) => test.testName === watchedTestName
      );
      if (selectedTest) {
        setValue("amount", selectedTest.testFee);
      }
    }
  }, [watchedTestName, appList, setValue]);

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: addLacTest,
    onSuccess: () => {
      queryClient.invalidateQueries("fpo/lactest");
      handleClose();
    },
  });

  const list = [
    {
      label: "FPO Name",
      name: "fpoName",
      disabled: true,
    },
    {
      label: "Contact No.",
      name: "fpoContact",
      disabled: true,
    },
    {
      label: "Sample Id",
      name: "sampleId",
    },
    {
      label: "Date",
      name: "dateOfApplication",
      type: "date",
    },
    {
      label: "Test Category",
      name: "category",
      isSelect: true,
      options: uniqueCategories,
    },
    {
      label: "Test Name",
      name: "testName",
      isSelect: true,
      options: watchedCategory
        ? appList
            .filter((item) => item.category === watchedCategory)
            .map((item) => item.testName)
        : [],
    },
    {
      label: "Amount",
      name: "amount",
      type: "number",
      disabled: true,
    },
    {
      label: "Payment Reference No.",
      name: "paymentRefNo",
      type: "number",
    },
    {
      label: "Payment Image",
      name: "paymentImg",
      isFile: true,
    },
    {
      label: "Lac Sample Image",
      name: "lacSampleImg",
      isFile: true,
    },
    {
      label: "Remarks",
      name: "remarks",
    },
  ];

  return (
    <Modal show={show} onHide={handleClose} className="store_card">
      <Modal.Header closeButton>Lab Sample Test</Modal.Header>
      <Modal.Body>
        <form className="p-2" onSubmit={handleSubmit((data) => mutate(data))}>
          {list.map((l) => {
            if (!l.isFile && !l.isSelect) {
              return (
                <Input
                  {...l}
                  key={l.name}
                  register={register}
                  errors={errors}
                />
              );
            }

            if (l.isSelect) {
              return (
                <Input
                  {...l}
                  key={l.name}
                  register={register}
                  errors={errors}
                  isSelect={true}
                  options={l.options}
                />
              );
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
            );
          })}

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
  );
}

export default LabSampleTest;
