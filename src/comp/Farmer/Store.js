import { useState, useEffect } from "react";
import axios from "axios";

import Nylonbag from "../../assets/img/nylonbag.png";

import { useQuery } from "@tanstack/react-query";

import { getFpoProducts } from "../../actions/farmer";
import useModal from "../../hooks/useModal";
import Loader from "../Common/Loader";

function Store() {
  const { modal, updateModal, closeModal } = useModal()
  const { isLoading, data } = useQuery({
    queryKey: ["fpo/products"],
    queryFn: getFpoProducts
  })

  if (isLoading) return <Loader wrapperCls="loader-main-right" />

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
              data.data.map((item, index) => (
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