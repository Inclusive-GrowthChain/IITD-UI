import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Button from "react-bootstrap/Button";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditIcon from "@mui/icons-material/Edit";

import { getCropAdvisory } from "../../actions/nisa";

import ViewCADescription from "./Modals/ViewCADescription";
import Loader from "../Common/Loader";
import AddCA from "./Modals/AddCA";

import "./Nisa.css";

const CropAdvisory = () => {
  const [modal, setModal] = useState({ state: false, data: {} })

  const { isLoading, data } = useQuery({
    queryKey: ["nisa/crop-advisory"],
    queryFn: getCropAdvisory
  })

  const updateModal = (state, val) => setModal({ state, data: val })
  const closeModal = () => setModal({ state: "", data: {} })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <div className="item_Container">
      <div className="list_title">
        <div className="crop__title container-fluid" style={{ marginBottom: '100px' }}>
          <div className="crop_container d-sm-flex justify-content-between align-items-center" style={{ marginBottom: '50px' }}>
            <h3
              className="text-dark mb-0"
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "rgb(33, 37, 41)",
              }}
            >
              Crop Advisory
            </h3>
            <div
              className="list__btn"
              style={{
                position: "relative",
                float: "right",
                right: "18px",
                top: "10px",
              }}
            >
              <Button
                className="crop-advisory_button"
                style={{
                  backgroundColor: "#064420",
                  border: "none",
                  width: "fit-content",
                  marginTop: "50px",
                }}
                onClick={() => updateModal("add", {})}
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
                    className="card_title mb-2 text-black text-bold"
                    style={{ fontSize: "30px" }}
                  >
                    {ca.title}
                  </div>
                  <div
                    style={{
                      position: "relative",
                      float: "right",
                      right: "18px",
                      top: "-3rem",
                    }}
                  >
                    <button
                      onClick={() => updateModal("edit", ca)}
                      style={{ backgroundColor: "white" }}
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

      <ViewCADescription
        show={modal.state === "readMore"}
        data={modal.data}
        handleClose={closeModal}
      />

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