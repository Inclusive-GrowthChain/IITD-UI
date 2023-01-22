import Modal from "react-bootstrap/Modal";
import states from '../../../constants/states';

function NisaSignup({ show, close }) {
  return (
    <Modal size="lg" show={show} onHide={close} centered>
      <Modal.Header closeButton>NISA Signup</Modal.Header>
      <Modal.Body>
        <div className="iinrg_signup">
          <form>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">Username *</label>
                <input type="text" className="form-control" required="" />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Password *</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">Address *</label>
                <input type="text" className="form-control" required="" />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">City *</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">State *</label>
                <select className="form-select">
                  {states.map((state) => (
                    <option value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">PinCode *</label>
                <input className="form-control" type="text" required="" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">Contact Number *</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Email *</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label className="form-label">Website *</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Lincese Key *</label>
                <input type="text" className="form-control" required="" />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-block shadow"
                  style={{
                    backgroundColor: "#064420",
                    marginTop: "10px",
                    color: "#fff",
                    alignItems: "center",
                    width: "20%",
                    fontSize: "15px",
                  }}
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default NisaSignup