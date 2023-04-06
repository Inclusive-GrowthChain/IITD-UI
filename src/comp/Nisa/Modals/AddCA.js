import { Modal } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function AddCA({ showAddCA, handleCAClose }) {
  const [cropAdvisoryId, setCropAdvisoryId] = useState("CA012");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  
  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const resetInputs = () => {
    setTitle("");
    setContent("");
  }

  const addCropAdvisory = async () => {
    if(title=="" || content=="") {
      alert("Please fill all details and try again");
      return;
    }

    const newCA = {
      "cropAdvisoryId": cropAdvisoryId,
      "title": title,
      "content": content
    };
    
    await axios
      .post("http://13.232.131.203:3000/api/nisa/crop-advisory", newCA)
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
      show={showAddCA}
      onHide={handleCAClose}
    >
      <Modal.Header closeButton>Add Crop Advisory</Modal.Header>

      <Modal.Body>
        <div className="row">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Crop Advisory ID</label>
                    </div>
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        type="text"
                        value={cropAdvisoryId}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Title</label>
                    </div>
                    <div className="col-lg-12">
                      <input className="form-control" type="text" onChange={onChangeTitle}/>
                    </div>
                  </div>
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Content</label>
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        className="form-control"
                        style={{ height: "200%" }}
                        onChange={onChangeContent}
                      />
                    </div>
                  </div>
                  <div className="row m-2">
                    <button
                      className="btn btn-success"
                      style={{
                        marginTop: "5rem",
                        backgroundColor: "#064420",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        addCropAdvisory();
                        handleCAClose();
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddCA