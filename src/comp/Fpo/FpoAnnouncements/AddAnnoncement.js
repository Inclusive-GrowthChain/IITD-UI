import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";

import Input, { errStyle } from "../../Nisa/Modals/Input";
import { useAuthStore } from "../../../store/useAuthStore";
import { addFpoAnnouncement, editFpoAnnouncement } from "../../../actions/fpo";
import { errorNotify, successNotify } from "../../../utils/toastifyHlp";
import Loader from "../../Common/Loader";

const inputFields = [
  { label: "Heading", name: "heading" },
  { label: "Description", name: "description" },
];

const AddAnnouncement = ({ show, data, isEdit, handleClose }) => {
  const userDetails = useAuthStore((s) => s.userDetails);

  const queryClient = useQueryClient();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      announcementId: isEdit && data?._id,
      fpoId: userDetails?._id,
      heading: isEdit ? data?.heading : "",
      description: isEdit ? data?.description : "",
      fpoAnnouncementImage: isEdit ? data?.image : "",
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationKey: ["addAnnouncement"],
    mutationFn: isEdit ? editFpoAnnouncement : addFpoAnnouncement,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["getAnnouncement"] });
      successNotify(response?.message);
      reset();
      handleClose();
    },
    onError: (error) => {
      errorNotify(error?.message);
    },
  });

  if (isLoading) {
    return <Loader wrapperCls="h-screen" />;
  }

  return (
    <Modal show={show} onHide={handleClose} className="store_card">
      <Modal.Header closeButton>Add Announcement</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(mutate)}>
          <div className="p-2">
            {inputFields.map(({ label, name }) => (
              <Input
                key={name}
                label={label}
                name={name}
                register={register}
                errors={errors}
              />
            ))}

            <div className="m-2">
              <div style={{ padding: "0 12px" }}>
                <label>Upload image</label>
              </div>
              <div style={{ padding: "0 12px" }}>
                <input
                  type="file"
                  className="form-control"
                  required
                  accept="image/*"
                  {...register("fpoAnnouncementImage", {
                    required: "Image is required",
                  })}
                />
                {errors.fpoAnnouncementImage && (
                  <p className="text-danger" style={errStyle}>
                    {errors.fpoAnnouncementImage.message}
                  </p>
                )}
              </div>
            </div>

            <div className="row m-2">
              <button
                type="submit"
                style={{ backgroundColor: "#064420" }}
                disabled={isLoading}
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddAnnouncement;
