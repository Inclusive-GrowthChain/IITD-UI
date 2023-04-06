import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useState } from "react";

function AddLacProcurement({ show, handleClose }) {
  const [productId, setProductId] = useState("PROD002");
  const [name, setName] = useState("");
  const [marketPrice, setMarketPrice] = useState(0);
  const [fpoPrice, setFpoPrice] = useState(0);
  const [image, setImage] = useState("");
  const [isProcuring, setIsProcuring] = useState(true);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeMarketPrice = (e) => {
    setMarketPrice(e.target.value);
  };

  const onChangeFpoPrice = (e) => {
    setFpoPrice(e.target.value);
  };

  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const resetInputs = () => {
    setName("");
    setMarketPrice(0);
    setFpoPrice(0);
    setImage("");
    setIsProcuring(true);
  }

  const addItem = async () => {
    if (name == "" || marketPrice == 0 || fpoPrice == 0 || image == "") {
      alert("Please fill all details and try again");
      return;
    }

    if(fpoPrice < 0) {
      alert("FPO Price cannot be negative");
      return;
    }

    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("productName", name);
    formData.append("marketPrice", marketPrice);
    formData.append("fpoPrice", fpoPrice);
    formData.append("productImg", image);
    formData.append("isProcurable", isProcuring);

    await axios
      .post("http://13.232.131.203:3000/api/fpo/lac", formData)
      .then((response) => {
        console.log(response.data);
        resetInputs();
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.reload();
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="store_card"
    >
      <Modal.Header closeButton>Lac Procurement</Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <form>
              <div className="p-2">
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Lac Name</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" onChange={onChangeName}/>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Market Price</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" onChange={onChangeMarketPrice}/>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>FPO Price</label>
                  </div>
                  <div className="col-lg-6">
                    <input className="form-control" type="text" onChange={onChangeFpoPrice}/>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>Upload Image</label>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="file"
                      className="form-control"
                      required=""
                      accept="image/*"
                      onChange={onChangeImage}
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-lg-6">
                    <label>List of Items</label>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            onChange={() => setIsProcuring(true)}
                          />
                        </div>
                        <label className="form-check-label">
                          Procuring
                        </label>
                      </div>
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            onChange={() => setIsProcuring(false)}
                          />
                        </div>
                        <label className="form-check-label">
                          Not-Procuring
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row m-2">
                  <button className="btn btn-success" style={{ backgroundColor: "#064420" }} onClick={(e) => {
                    e.preventDefault();
                    addItem();
                  }}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddLacProcurement