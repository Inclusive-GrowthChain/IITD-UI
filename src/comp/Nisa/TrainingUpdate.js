import { useQuery } from "@tanstack/react-query";
import Button from "react-bootstrap/Button";

import EditIcon from "@mui/icons-material/Edit";

import { getTraining } from "../../actions/nisa";
import useModal from "../../hooks/useModal";

import AddTraing from "./Modals/AddTraing";
import Loader from "../Common/Loader";
import { useState } from "react";

const TrainingUpdate = () => {
  const { modal, updateModal, closeModal } = useModal();
  const [readMore, setReadMore] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { isLoading, data } = useQuery({
    queryKey: ["nisa/traning"],
    queryFn: getTraining,
  });

  const theadStyle = {
    color: "#064420",
    fontSize: "16px",
    verticalAlign: "top",
    fontWeight: 600,
  };

  const tbodyStyle = {
    color: "#000",
    fontSize: "15px",
    fontWeight: "500",
  };

  if (isLoading) return <Loader wrapperCls="loader-main-right" />;

  return (
    <div className="item_Container">
      <div className="list_title">
        <div className="sale__title container-fluid">
          <div className="d-sm-flex justify-content-between align-items-center mb-4">
            <h3
              className="text-dark mb-0"
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "rgb(33, 37, 41)",
              }}
            >
              Training Programs
            </h3>
            <div
              className="list__btn tp__btn"
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
                }}
                onClick={() => updateModal("add", {})}
              >
                Add Training Program
              </Button>
            </div>
          </div>
          <div
            className="tp_container card shadow"
            style={{ marginBottom: "50px" }}
          >
            <div className=" table-responsive p-3">
              <table className="table table-striped">
                <thead style={theadStyle}>
                  <tr>
                    <td>Training Course</td>
                    <td>Course Start Date</td>
                    <td>Duration</td>
                    <td>Application Start Date</td>
                    <td>Application End Date</td>
                    <td>Fee (Rs)</td>
                    <td>Remarks</td>
                  </tr>
                </thead>

                <tbody style={tbodyStyle}>
                  {data.data.map((tp,ind) => (
                    <tr key={tp._id}>
                      <td>{tp.courseName}</td>
                      <td>{tp.courseStartDate}</td>
                      <td>{tp.duration}</td>
                      <td>{tp.applicationStartDate}</td>
                      <td>{tp.applicationEndDate}</td>
                      <td>{tp.fee}</td>
                      <td style={{ textAlign: "left", whiteSpace: "normal" }}>
                        {currentIndex === ind + 1 && readMore ? (
                          tp.remarks
                        ) : (
                          <small
                            onClick={() => {
                              setReadMore(!readMore);
                              setCurrentIndex(ind + 1);
                            }}
                          >
                            {tp.remarks.slice(0, 20)}
                            <span className="text-success">...Read More</span>
                          </small>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => updateModal("edit", tp)}
                          className="bg-white"
                        >
                          <EditIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {modal.state && (
        <AddTraing
          show
          data={modal.data}
          isEdit={modal.state === "edit"}
          handleClose={closeModal}
        />
      )}
    </div>
  );
};

export default TrainingUpdate;
