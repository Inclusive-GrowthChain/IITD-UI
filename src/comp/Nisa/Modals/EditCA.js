import { Modal } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function EditCA({ currentCA, showEditCA, handleEditCAClose, ca_id, cur_title, cur_content }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setTitle(cur_title);
    setContent(cur_content);
  }, [cur_title, cur_content]);

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

  const editCropAdvisory = async () => {
    if(title=="" || content=="") {
      alert("Please fill all details and try again");
      return;
    }

    const newCA = {
      "title": title,
      "content": content
    };
    
    await axios
      .put(`http://13.232.131.203:3000/api/nisa/crop-advisory/${ca_id}`, newCA)
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
      show={showEditCA}
      onHide={handleEditCAClose}
    >
      <Modal.Header closeButton>
        Edit Crop Advisory
      </Modal.Header>

      <Modal.Body>
        <div className="row">
          <div className="col">
            <form>
              <div className="form">
                <div className="card p-2">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label>Title</label>
                    </div>
                    <div className="col-lg-12">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={currentCA.title}
                        onChange={onChangeTitle}
                      />
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
                        defaultValue={currentCA.content}
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
                        editCropAdvisory();
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

export default EditCA