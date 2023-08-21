import { useMutation } from "@tanstack/react-query"
import Modal from "react-bootstrap/Modal"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { forgotPassword } from "../../../actions/auth"
import { errorNotify, successNotify } from "../../../utils/toastifyHlp"

const ResetPassword = ({ show, closeModal }) => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            type: "",
            email: ""
        }
    })

    const navigate = useNavigate()

    const {mutate} = useMutation({
        mutationFn: forgotPassword,
        onSuccess: (e) => {
            successNotify(e.message)
            reset()
            navigate("/")
            closeModal()
        },
        onError : (e) => {
            errorNotify(e.message)
        }
    })

    return (
        <Modal size="lg" show={show} onHide={closeModal} centered>
            <Modal.Header closeButton>Reset Password</Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(mutate)}>
                    <div className='px-4'>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Select your Role:</label>
                            <select {...register("type")} className="form-control" required id="exampleFormControlSelect1">
                                <option value="">Select</option>
                                <option value="fpo">FPO</option>
                                <option value="nisa">NISA</option>
                                <option value="lendingpartner">Samunnati</option>
                                <option value="corporateclient">Corporate Client</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Enter your email address:</label>
                            <input {...register("email")} type="email" required className="form-control" id="exampleInputPassword1" placeholder="Enter your email..." />
                        </div>
                    </div>
                    <div className="submit_btn">
                        <button type='Submit'>Submit</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default ResetPassword