import { useQuery } from '@tanstack/react-query'
import useModal from '../../hooks/useModal'
import PlaceRequirement from './Modals/PlaceRequirement'
import { getPlacedRequirements } from '../../actions/farmer'
import Loader from '../Common/Loader'

const InputRequirement = () => {
    const { modal, closeModal, updateModal } = useModal()

    const applyBtnStyle = {
        backgroundColor: "#064420",
        border: "none",
        borderRadius: "5px",
        width: "130px",
        color: "#fff",
        padding: "5px 8px"
    }

    const { isLoading, data } = useQuery({
        queryFn: getPlacedRequirements,
        queryKey: ["getPlacedRequirements"]
    })

    if (isLoading) return <Loader wrapperCls="loader-main-right" />

    return (
        <>
            <div className="itemContainer">
                <div className="list_title">
                    <div className="container-fluid">
                        <div className="d-sm-flex justify-content-between align-items-start mb-4">
                            <h3
                                className="text-dark mb-0"
                                style={{
                                    fontSize: "22px",
                                    fontWeight: "800",
                                    color: "rgb(33, 37, 41)",
                                }}
                            >
                                Input Requirement
                            </h3>
                            <button
                                className="loan_button"
                                style={applyBtnStyle}
                                onClick={() => updateModal("PlaceRequirement")}
                            >
                                Place a Requirement
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <div className="table-responsive p-3">
                                <table className="table table-striped">
                                    <thead
                                        style={{
                                            color: "green",
                                            fontSize: "15px",
                                            verticalAlign: "top",
                                        }}
                                    >
                                        <tr>
                                            <th>Application Date</th>
                                            <th>Input Type</th>
                                            <th>Brand</th>
                                            <th>Quantity</th>
                                            <th>Months</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data?.length > 0 && data?.map((item) => {
                                                return (
                                                    <tr key={item?._id}>
                                                        <td>{item?.updatedAt}</td>
                                                        <td>{item?.inputType}</td>
                                                        <td>{item?.brand}</td>
                                                        <td>{item?.quantity}</td>
                                                        <td>{item?.month}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                modal.state === "PlaceRequirement" && <PlaceRequirement show closeModal={closeModal} />
            }
        </>
    )
}

export default InputRequirement 