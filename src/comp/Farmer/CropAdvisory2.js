import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useQuery } from "@tanstack/react-query";
import { getCropAdvisory } from "../../actions/nisa";
import useModal from "../../hooks/useModal";
import ReadMore from "./Modals/CropAdvisory/ReadMore";
import Loader from "../Common/Loader";

const CropAdvisory2 = () => {
  const { modal, updateModal, closeModal } = useModal()
  const { isLoading, data } = useQuery({
    queryKey: ["nisa/crop-advisory"],
    queryFn: getCropAdvisory
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <>
      <div className="item_Container">
        <div className="list_title">
          <div className="crop__title container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
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
            </div>

            {data.data.map((ca, ind) => (
              <div key={ca.id}>
                <div className="card_wrapper">
                  <div
                    className="card_title mb-2 text-black text-bold"
                    style={{ fontSize: "30px" }}
                  >
                    {ca.title}
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
                    <p> 2 months ago</p>
                    <p> 19/08/2022</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {
        modal.state &&
        <ReadMore
          show
          data={modal.data}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default CropAdvisory2