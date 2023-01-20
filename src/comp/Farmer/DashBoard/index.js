import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

import ImageSliders from "./ImageSliders";
import { SliderContent } from "./SliderContent";

function Dashboard() {
  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="container-fluid dash__content">
          <div className="dash__wrapper">
            <h3 className="dash__heading mb-4">Dashboard</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="mb-2 p-3 dash__card">
                <h5 className="card_title text-center">
                  Training Programs
                </h5>
                <div className="card-text">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Update</th>
                      </tr>
                    </thead>
                    <tbody className="fw-light fs-10">
                      <tr>
                        <td>14-07-22</td>
                        <td>--</td>
                      </tr>
                      <tr>
                        <td>14-07-22</td>
                        <td>--</td>
                      </tr>
                      <tr>
                        <td>14-07-22</td>
                        <td>--</td>
                      </tr>
                      <tr>
                        <td>14-07-22</td>
                        <td>--</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="mb-2 p-3 dash__card">
                <h5 className="card_title text-center">Current Weather</h5>
                <div className="card-text">
                  <table className="table table-borderless">
                    <thead className="">
                      <tr>
                        <th>Temperature</th>
                        <th>Humadity</th>
                        <th>rainfall</th>
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
            <div className="col-lg-4 col-md-4 col-12">
              <div className="mb-2 p-3 dash__card">
                <h5 className="card_title text-center">Crop Advisory</h5>
                <div className="card-text">
                  <table className="table table-borderless">
                    <thead className="">
                      <tr>
                        <th>Date</th>
                        <th>Update</th>
                      </tr>
                    </thead>
                    <tbody className="fw-light fs-10">
                      <tr>
                        <td>14-07-22</td>
                        <td>September week update</td>
                      </tr>
                      <tr>
                        <td>14-07-22</td>
                        <td>September week update</td>
                      </tr>
                      <tr>
                        <td>14-07-22</td>
                        <td>September week update</td>
                      </tr>
                      <tr>
                        <td>14-07-22</td>
                        <td>September week update</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="mb-2 mt-2 p-3 dash__card">
                <h5 className="card_title text-center">Store</h5>
                <div>
                  <ImageSlider slides={SliderData} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 ">
              <div className="mb-2 mt-2 p-3 dash__card">
                <h5 className="card_title text-center">Selling Price</h5>
                <div>
                  <ImageSliders slides={SliderContent} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="mb-2 mt-2 p-3 dash__card">
                <h5 className="card_title text-center">Loan Updates</h5>
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