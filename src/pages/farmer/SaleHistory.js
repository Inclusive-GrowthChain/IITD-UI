import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function SaleHistory() {
  return (
    <div className="farmer">
      <Sidebar />
      <div className="farmerContainer">
        <Navbar />
        <div className="itemContainer">
          <div className="list_title">
            <div className="container-fluid">
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3
                  className="text-dark mb-0"
                  style={{
                    fontSize: "22px",
                    fontWeight: "800",
                    color: "rgb(33, 37, 41)",
                  }}
                >
                  Sale History
                </h3>
              </div>
              <div className="card shadow">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead
                      style={{
                        color: "green",
                        fontSize: "13px",
                        verticalAlign: "top",
                        // textAlign: "center",
                      }}
                    >
                      <tr>
                        <td>Date</td>
                        <td>Image</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>FPO Name</td>
                      </tr>
                    </thead>
                    <tbody
                      style={{
                        color: "#000",
                        fontSize: "12px",
                        fontWeight: "500",
                        // textAlign: "center",
                      }}
                    >
                      <tr>
                        <td>14-05-2022</td>
                        <td>
                          <img
                            src="https://3.imimg.com/data3/TM/JM/ETO-196508/1-294285-full-images-stick-lac-1081592-500x500.jpg"
                            alt=""
                            style={{ width: '50px', height: '50px', }}
                          />
                        </td>
                        <td>02</td>
                        <td>₹ 377</td>
                        <td>
                          Murhu Nari Shakti Farmer Producer Company Limited
                        </td>
                      </tr>
                      <tr>
                        <td>14-05-2022</td>
                        <td>
                          <img
                            src="https://img1.exportersindia.com/product_images/bc-full/dir_103/3083471/seedlac-1521434846-3729373.jpg"
                            alt=""
                            style={{ width: '50px', height: '50px', }}
                          />
                        </td>
                        <td>02</td>
                        <td>₹ 377</td>
                        <td>
                          Churchu Nari Urja Farmer Producer Company Limited
                        </td>
                      </tr>
                      <tr>
                        <td>14-05-2022</td>
                        <td>
                          <img
                            src="https://5.imimg.com/data5/WH/TW/MY-1496311/shellac-processed-versatile-lac-golden-kusmi-500x500.jpg"
                            alt=""
                            style={{ width: '50px', height: '50px', }}
                          />
                        </td>
                        <td>02</td>
                        <td>₹ 377</td>
                        <td>
                          Churchu Nari Urja Farmer Producer Company Limited
                        </td>
                      </tr>
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

export default SaleHistory;
