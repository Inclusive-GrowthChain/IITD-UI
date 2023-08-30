import React from 'react'
import { Modal } from 'react-bootstrap'
import { months } from '../../../constants/Date'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { placeRequirement } from '../../../actions/farmer'

const PlaceRequirement = ({ show, closeModal }) => {
    const { register, reset, handleSubmit } = useForm({
        defaultValues: {
            inputType: "",
            brand: "",
            quantity: "",
            month: ""
        }
    })

    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationFn: placeRequirement,
        onSuccess : () => {
            queryClient.invalidateQueries("getPlacedRequirements")
            reset()
            closeModal()
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
                <form onSubmit={handleSubmit(mutate)}>
                    <div className="row m-2">
                        <div className="col-lg-6">
                            <label>Input Type</label>
                        </div>
                        <div className="col-lg-6">
                            <select {...register("inputType")} className='form-control' required>
                                <option value="">Select</option>
                                <option value="Brood Lac">Brood Lac</option>
                                <option value="Pesticide">Nylon Bag</option>
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
                        className="loan_button my-2"
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