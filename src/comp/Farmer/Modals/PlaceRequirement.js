import React from 'react'
import { Modal } from 'react-bootstrap'
import { months } from '../../../constants/Date'
import { useForm } from 'react-hook-form'

const PlaceRequirement = ({ show, closeModal }) => {
    const { register, reset, handleSubmit } = useForm({
        defaultValues: {
            inputType: "",
            brand: "",
            quantity: "",
            unit: "",
            month: ""
        }
    })


    const applyBtnStyle = {
        backgroundColor: "#064420",
        border: "none",
        borderRadius: "5px",
        width: "130px",
        color: "#fff",
        padding: "5px 8px"
    }

    return (
        <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>Enter details</Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(console.log)}>
                    <div className="row m-2">
                        <div className="col-lg-6">
                            <label>Input Type</label>
                        </div>
                        <div className="col-lg-6">
                            <select {...register("inputType")} className='form-control' required>
                                <option value="">Select</option>
                                <option value="Brood Lac">Brood Lac</option>
                                <option value="Pesticide">Pesticide</option>
                                <option value="Insecticide">Insecticide</option>
                            </select>
                        </div>
                    </div>

                    <div className="row m-2">
                        <div className="col-lg-6">
                            <label>Brand</label>
                        </div>
                        <div className="col-lg-6 text-center">
                            <input
                                {...register("brand")}
                                type="text"
                                className="form-control"
                                placeholder="Enter the Brand Name"
                            />
                        </div>
                    </div>

                    <div className="row m-2">
                        <div className="col-lg-6">
                            <label>Quantity</label>
                        </div>
                        <div className="col-lg-6 text-center">
                            <div className='d-flex'>
                                <input
                                    {...register("quantity")}
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter the Quantity"
                                />
                                <select {...register('unit')} className='form-control' required>
                                    <option value="">Select in Kg/L</option>
                                    <option value="Kg">Kg</option>
                                    <option value="L">L</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col-lg-6">
                            <label>Month</label>
                        </div>
                        <div className="col-lg-6 text-center">
                            <select {...register("month")} className='form-control' required>
                                <option value="">Select the Month</option>
                                {
                                    months?.map((month, ind) => (
                                        <option key={ind} value={month}>{month}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <button
                        className="loan_button"
                        style={applyBtnStyle}
                    >
                        Submit
                    </button>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default PlaceRequirement