import { useQuery } from "@tanstack/react-query";
import { getTraining } from "../../actions/nisa";
import Loader from "../Common/Loader";

function TrainingUpdate() {
  const { isLoading, data } = useQuery({
    queryKey: ["nisa/training"],
    queryFn: getTraining
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

  return (
    <div className="itemContainer">
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
              Training Update
            </h3>
          </div>
          <div className="card shadow">
            <div className="table-responsive">
              <table>
                <thead
                  style={{
                    fontSize: "17px",
                    verticalAlign: "top",
                  }}
                >
                  <tr>
                    <th>Training Id</th>
                    <th>Course Name</th>
                    <th>Course Start Date</th>
                    <th>Duration</th>
                    <th>Application Start Date</th>
                    <th>Application End Date</th>
                    <th>Fee (Rs)</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {
                    data.data.map(tp => (
                      <tr key={tp.id}>
                        <td>{tp.traningId}</td>
                        <td>{tp.courseName}</td>
                        <td>{tp.courseStartDate}</td>
                        <td>{tp.duration}</td>
                        <td>{tp.applicationStartDate}</td>
                        <td>{tp.applicationEndDate}</td>
                        <td>{tp.fee}</td>
                        <td style={{textAlign: "left", whiteSpace: "normal"}}>{tp.remarks}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingUpdate