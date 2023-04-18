import { useState, useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import EditCropAdvisory from "./Modals/CropAdvisory/EditCropAdvisory";
// import AddCropAdvisory from "./Modals/CropAdvisory/AddCropAdvisory";
import ReadMore from "./Modals/CropAdvisory/ReadMore";
import axios from "axios";

const CropAdvisory2 = () => {
  const [showModal, setShowModal] = useState(false)
  const [currentCA, setCurrentCA] = useState({})
  const [caList, setCaList] = useState([])

  const handleClose = () => setShowModal(false)

  const handleShow = (ca) => {
    setShowModal(true)
    setCurrentCA(ca)
  }

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://13.232.131.203:3000/api/nisa/crop-advisory")
      .then((response) => {
        console.log(response.data.data);
        setCaList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

            {caList.map((ca, ind) => (
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
                    <button id="btn-1" onClick={() => handleShow(ca)}>
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

      <ReadMore
        currentCA={currentCA}
        showModal={showModal}
        handleClose={handleClose}
      />
    </>
  )
}

export default CropAdvisory2