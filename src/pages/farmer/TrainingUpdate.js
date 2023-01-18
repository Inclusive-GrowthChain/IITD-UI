import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

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
  return (
    <div className="farmer">
      <Sidebar />
      <div className="farmerContainer">
        <Navbar />
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
                        {/* <th></th> */}
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
                        data.map(d => (
                          <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.courseName}</td>
                            <td>{d.courseStartDate}</td>
                            <td>{d.duration}</td>
                            <td>{d.applicationStartDate}</td>
                            <td>{d.applicationEndDate}</td>
                            <td>{d.fee}</td>
                            <td>{d.remarks}</td>
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
      </div>
    </div>
  );
}

export default TrainingUpdate;
