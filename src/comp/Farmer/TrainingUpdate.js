import { useState, useEffect } from "react"
import axios from "axios"

const data = [
  {
    id: "TC-1",
    courseName: "Training 1",
    courseStartDate: "14.02.23",
    duration: "1 Month",
    applicationStartDate: "01.01.23",
    applicationEndDate: "12.02.23",
    fee: "500",
    remarks: "Some Remarks",
  },
  {
    id: "TC-2",
    courseName: "Training 2",
    courseStartDate: "14.02.23",
    duration: "2 Months",
    applicationStartDate: "09.01.23",
    applicationEndDate: "10.02.23",
    fee: "800",
    remarks: "Some Remarks",
  },
  {
    id: "TC-3",
    courseName: "Training 3",
    courseStartDate: "24.02.23",
    duration: "2 Months",
    applicationStartDate: "15.01.23",
    applicationEndDate: "20.02.23",
    fee: "700",
    remarks: "Some Remarks",
  },
  {
    id: "TC-4",
    courseName: "Training 4",
    courseStartDate: "02.03.23",
    duration: "4 Months",
    applicationStartDate: "01.02.23",
    applicationEndDate: "01.03.23",
    fee: "5000",
    remarks: "Some Remarks",
  },
]

function TrainingUpdate() {
  const [tpList, setTpList] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://13.232.131.203:3000/api/nisa/traning")
      .then((response) => {
        console.log(response.data.data);
        setTpList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <div
              className="table-responsive"
            >
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
                    tpList.map(tp => (
                      <tr key={tp.id}>
                        <td>{tp.traningId}</td>
                        <td>{tp.courseName}</td>
                        <td>{tp.courseStartDate}</td>
                        <td>{tp.duration}</td>
                        <td>{tp.applicationStartDate}</td>
                        <td>{tp.applicationEndDate}</td>
                        <td>{tp.fee}</td>
                        <td>{tp.remarks}</td>
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