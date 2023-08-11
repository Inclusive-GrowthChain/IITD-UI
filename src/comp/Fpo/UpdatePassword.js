import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { updatePassword } from '../../actions/auth'
import { errorNotify } from '../../utils/toastifyHlp'
import { successNotify } from '../../utils/toastifyHlp'

const UpdatePassword = ({ userId }) => {
    const { register, reset, handleSubmit } = useForm()
    const { mutate} = useMutation({
        mutationFn: (data) => updatePassword(data, userId),
        onSuccess: (e) => {
            console.log(e)
            successNotify(e.message)
            reset()
        },
        onError: (e) => {
            console.log(e)
            errorNotify(e.message)
        }
    })


    return (
        <div className="profile_1 mt-4">
            <div className="pl-lg-4">
                <form onSubmit={handleSubmit(mutate)}>
                    <div className="col">
                        <div className="col-lg-6">
                            <div className="form-group focused">
                                <label className="form-control-label text-black">
                                    Enter the Old Password
                                </label>
                                <input
                                    {...register("oldPassword")}
                                    type="text"
                                    className="form-control form-control-alternative"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group focused">
                                <label className="form-control-label text-black">
                                    Enter the new Password
                                </label>
                                <input
                                    {...register("newPassword")}
                                    type="text"
                                    className="form-control form-control-alternative"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className=""
                        style={{ display: "flex", justifyContent: "start" }}
                    >
                        <button
                            className="btn btn-info mt-4"
                            style={{
                                backgroundColor: "#064420",
                                border: "none",
                                color: "#fff",
                            }}
                            type="submit"
                        >
                            Update Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdatePassword