import { useQuery } from "@tanstack/react-query";
import Button from "react-bootstrap/Button";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditIcon from "@mui/icons-material/Edit";

import { getCropAdvisory } from "../../actions/nisa";
import useModal from "../../hooks/useModal";

import ViewCADescription from "./Modals/ViewCADescription";
import Loader from "../Common/Loader";
import AddCA from "./Modals/AddCA";

const h3Style = {
  fontSize: "22px",
  fontWeight: "800",
  color: "rgb(33, 37, 41)",
}

const btnWrapperStyle = {
  position: "relative",
  float: "right",
  right: "18px",
  top: "10px",
}

const btnStyle = {
  backgroundColor: "#064420",
  border: "none",
  width: "fit-content",
  marginTop: "50px",
}

const editIcStyle = {
  position: "relative",
  float: "right",
  right: "18px",
  top: "-3rem",
}

const CropAdvisory = () => {
  const { modal, updateModal, closeModal } = useModal()
  const { isLoading, data } = useQuery({
    queryKey: ["nisa/crop-advisory"],
    queryFn: getCropAdvisory
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <div className="item_Container">
      <div className="list_title">
        <div className="crop__title container-fluid" style={{ marginBottom: '100px' }}>
          <div className="crop_container d-sm-flex justify-content-between align-items-center" style={{ marginBottom: '50px' }}>
            <h3
              className="text-dark mb-0"
              style={h3Style}
            >
              Crop Advisory
            </h3>
            <div
              className="list__btn"
              style={btnWrapperStyle}
            >
              <Button
                className="crop-advisory_button"
                style={btnStyle}
                onClick={() => updateModal("add")}
              >
                Add Crop Advisory
              </Button>
            </div>
          </div>

          {
            data.data.map(ca => (
              <div
                className="card_container"
                key={ca._id}
              >
                <div className="card_wrapper">
                  <div
                    className="mb-2 text-black text-bold h4"
                  >
                    {ca.title}
                  </div>
                  <div style={editIcStyle}>
                    <button
                      onClick={() => updateModal("edit", ca)}
                      className="bg-white"
                    >
                      <EditIcon />
                    </button>
                  </div>
                  <div className="card_content">
                    <p style={{ fontSize: "20px" }}>
                      {ca.content.substring(0, 100)}
                    </p>
                  </div>
                  <div className="card_button d-flex">
                    <button id="btn-1" onClick={() => updateModal("readMore", ca)}>
                      Read More
                      <ChevronRightIcon className="btn-icon" />
                    </button>
                  </div>
                  <hr />
                  <div className="card__footer text-muted">
                    <p>Created: {ca.createdAt.substring(0, 10)}</p>
                    <p>Last updated: {ca.updatedAt.substring(0, 10)}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {
        modal.state === "readMore" &&
        <ViewCADescription
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }

      {
        (modal.state === "add" || modal.state === "edit") &&
        <AddCA
          show
          data={modal.data}
          isEdit={modal.state === "edit"}
          handleClose={closeModal}
        />
      }
    </div>
  )
}

export default CropAdvisory