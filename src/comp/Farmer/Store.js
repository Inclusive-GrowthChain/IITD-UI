import { useState, useEffect } from "react";
import axios from "axios";

import Nylonbag from "../../assets/img/nylonbag.png";

function Store() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
    axios
      .get("http://13.232.131.203:3000/api/fpo/product")
      .then((response) => {
        console.log(response.data.data);
        setItemList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="itemContainer">
      <div className="list_title">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-between align-items-center mb-4">
            <h3
              className="text-dark mb-0"
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "rgb(33, 37, 41)",
              }}
            >
              Shop from FPO
            </h3>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
            {
              itemList.map((item, index) => (
                <div className="col">
                  <div className="card" style={{ marginBottom: '50px' }}>
                    <img
                      style={{ height: "280px", objectFit: "contain" }}
                      src={Nylonbag}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h4>Nylon Bag</h4>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-7">
                          <div className="row">
                            <div className="col">
                              <strong>Market Price</strong>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="price_tag">520</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="row">
                            <div className="col">
                              <strong>FPO Price</strong>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="price_tag">520</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store