import { useState } from "react";
import Button from "react-bootstrap/Button";
import AddSumunnati from "./Modals/AddSumunnati";

const Samunnati = () => {
  const [show, setShow] = useState(false)

  const updateShow = () => setShow(p => !p)

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="">
          <Button
            className="loan_button mb-3"
            onClick={updateShow}
            style={{
              backgroundColor: "#064420",
              color: "#fff",
              border: "none",
            }}
          >
            Add Samunnati Member
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
                    <td>Role</td>
                    <td>Mobile No</td>
                    <td>Email Id</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>54212</td>
                    <td>--</td>
                    <td>78451XXXXX</td>
                    <td>example@email.com</td>
                    <td>view</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>54212</td>
                    <td>--</td>
                    <td>78451XXXXX</td>
                    <td>example@email.com</td>
                    <td>view</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <AddSumunnati
        show={show}
        updateShow={updateShow}
      />
    </div>
  )
}

export default Samunnati