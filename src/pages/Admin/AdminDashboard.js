import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Main() {
  return (
    <div className="farmer">
      <Sidebar />
      <div className="farmerContainer">
        <Navbar />
        <div className="itemContainer">
          <div className="list_title">
            <div className="dashboard__title"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                padding: "10px",
                borderRadius: "10px",
                width: "33%"
              }}
            >
              <div className="row">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;