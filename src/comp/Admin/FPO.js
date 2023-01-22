import { useState } from "react";
import Button from "react-bootstrap/Button";
import AddFPO from "./Modals/AddFPO";

const FPO = () => {
  const [show, setShow] = useState(false)

  const updateShow = () => setShow(p => !p)

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="fpo__wrapper">
          <Button
            className="loan_button mb-3"
            onClick={updateShow}
            style={{
              backgroundColor: "#064420",
              color: "#fff",
              border: "none",
            }}
          >
            Add FPO
          </Button>

          <div className="card shadow">
            <div className="card-body table-responsive">
              <table className="table table-borderless">
                <thead
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    color: "#064420",
                  }}
                >
                  <tr>
                    <td>S.No.</td>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Location</td>
                    <td>Mobile Number</td>
                    <td>Number of Users (Under FPO)</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>427135</td>
                    <td>Hyderabad</td>
                    <td>78451XXXXX</td>
                    <td>14-05-2022</td>
                    <td>2</td>
                    <td>pending</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>427135</td>
                    <td>Hyderabad</td>
                    <td>78451XXXXX</td>
                    <td>14-05-2022</td>
                    <td>4</td>
                    <td>view</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <AddFPO
        show={show}
        updateShow={updateShow}
      />
    </div>
  )
}

export default FPO