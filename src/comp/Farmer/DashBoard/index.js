import { useQueries } from "@tanstack/react-query";

import { getCropAdvisory, getTraining } from "../../../actions/nisa";
import { getFpoProducts, getFpoLac } from "../../../actions/fpo";

import { SliderData } from "./SliderData";
import ImageSlider from "./ImageSlider";

import { SliderContent } from "./SliderContent";
import ImageSliders from "./ImageSliders";
import Loader from "../../Common/Loader";

function Dashboard() {
  const [
    { isLoading: isLoading1, data: caList },
    { isLoading: isLoading2, data: tpList },
    { isLoading: isLoading3, data: storeItemList },
    { isLoading: isLoading4, data: sellItemList },
  ] = useQueries({
    queries: [
      {
        queryKey: ["nisa/crop-advisory"],
        queryFn: getCropAdvisory
      },
      {
        queryKey: ["nisa/traning"],
        queryFn: getTraining
      },
      {
        queryKey: ["fpo/product"],
        queryFn: getFpoProducts
      },
      {
        queryKey: ["fpo/lac"],
        queryFn: getFpoLac,
      },
    ]
  })

  if (isLoading1 || isLoading2 || isLoading3 || isLoading4) return <Loader wrapperCls="loader-main-right" />

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="container-fluid dash__content">
          <div className="dash__wrapper">
            <h3 className="dash__heading mb-4">Dashboard</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="mb-2 p-3 dash__card">
                <p className="card_title text-center">
                  Training Programs
                </p>
                <div className="card-text">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Update</th>
                      </tr>
                    </thead>
                    <tbody className="fw-light fs-10">
                      {
                        tpList.data.slice(0, 4).map(tp => (
                          <tr key={tp._id}>
                            <td>{tp.createdAt.substring(0, 10)}</td>
                            <td>{tp.courseName}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="mb-2 p-3 dash__card">
                <p className="card_title text-center">Current Weather</p>
                <div className="card-text">
                  <table className="table table-borderless">
                    <thead className="">
                      <tr>
                        <th>Temperature</th>
                        <th>Humadity</th>
                        <th>Rainfall</th>
                      </tr>
                    </thead>
                    <tbody className="fw-light fs-10">
                      <tr>
                        <td>23 C</td>
                        <td>55%</td>
                        <td>18.8mm</td>
                      </tr>
                      <tr>
                        <td>30 C</td>
                        <td>66%</td>
                        <td>19mm</td>
                      </tr>
                      <tr>
                        <td>23 C</td>
                        <td>55%</td>
                        <td>18.8mm</td>
                      </tr>
                      <tr>
                        <td>30 C</td>
                        <td>66%</td>
                        <td>19mm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="mb-2 p-3 dash__card">
                <p className="card_title text-center">Crop Advisory</p>
                <div className="card-text">
                  <table className="table table-borderless">
                    <thead className="">
                      <tr>
                        <th>Date</th>
                        <th>Update</th>
                      </tr>
                    </thead>
                    <tbody className="fw-light fs-10">
                      {
                        caList.data.slice(0, 4).map(ca => (
                          <tr key={ca._id}>
                            <td>{ca.createdAt.substring(0, 10)}</td>
                            <td>{ca.title}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="mb-2 mt-2 p-3 dash__card">
                <p className="card_title text-center">Store</p>
                <div>
                  <ImageSlider slides={SliderData} itemList={storeItemList.data} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 ">
              <div className="mb-2 mt-2 p-3 dash__card">
                <p className="card_title text-center">Selling Price</p>
                <div>
                  <ImageSliders slides={SliderContent} itemList={sellItemList.data} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="mb-2 mt-2 p-3 dash__card">
                <p className="card_title text-center">Loan Updates</p>
                <div className="card-text">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Loan Id</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody className="fw-light fs-10">
                      <tr>
                        <td>334521</td>
                        <td>₹ 372</td>
                        <td>pending</td>
                      </tr>
                      <tr>
                        <td>334521</td>
                        <td>₹ 372</td>
                        <td>pending</td>
                      </tr>
                      <tr>
                        <td>334521</td>
                        <td>₹ 372</td>
                        <td>pending</td>
                      </tr>
                      <tr>
                        <td>334521</td>
                        <td>₹ 372</td>
                        <td>pending</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard