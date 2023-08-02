import Modal from "react-bootstrap/Modal"

const ResetPassword = ({ show, closeModal }) => {
    return (
        <Modal size="lg" show={show} onHide={closeModal} centered>
            <Modal.Header closeButton>Reset Password</Modal.Header>
            <Modal.Body>
                <div className='px-4'>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Select your Role:</label>
                        <select className="form-control" required id="exampleFormControlSelect1">
                            <option>FPO</option>
                            <option>NISA</option>
                            <option>Samunnati</option>
                            <option>Corporate Client</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Enter your email address:</label>
                        <input type="password" required className="form-control" id="exampleInputPassword1" placeholder="Enter your email..." />
                    </div>
                </div>
                <div className="submit_btn">
                    <button type='Submit'>Submit</button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ResetPassword