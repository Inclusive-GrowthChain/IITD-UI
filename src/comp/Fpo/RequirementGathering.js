import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getRequirements } from '../../actions/fpo'

const RequirementGathering = () => {
    const { data } = useQuery({
        queryKey: ["/farmer/requiremens/gathering"],
        queryFn: getRequirements
    })

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
                                Input Requirements Gathering
                            </h3>
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
                                            <th>Farmer Name</th>
                                            <th>Application Date</th>
                                            <th>Input Type</th>
                                            <th>Brand</th>
                                            <th>Quantity</th>
                                            <th>Month</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((tp, ind) => {
                                            const famerName = tp.farmerName

                                            return tp.requirements?.map((requirement, requirementIndex) => {
                                                return <tr className="fw-bold text-capitalize" key={requirementIndex}>
                                                    <td>{famerName}</td>
                                                    <td>{ new Date(requirement.updatedAt).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) || 'N/A'}</td>
                                                    <td>{requirement.type || requirement.inputType || 'N/A'}</td>
                                                    <td>{requirement.Brand || requirement.brand || 'N/A'}</td>
                                                    <td>{requirement.quantity || 'N/A'}</td>
                                                    <td>{requirement.month || 'N/A'}</td>
                                                </tr>
                                            })
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RequirementGathering