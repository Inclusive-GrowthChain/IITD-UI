import { useQuery } from "@tanstack/react-query";

import { getFpoProducts } from "../../actions/farmer";
import { root } from "../../utils/endPoints";
import Loader from "../Common/Loader";

function Store() {
  const { isLoading, data } = useQuery({
    queryKey: ["fpo/products"],
    queryFn: getFpoProducts,
  });

  if (isLoading) return <Loader wrapperCls="loader-main-right" />;

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
            {data?.data
              ?.filter((a) => a.isAvailable)
              .map((item) => (
                <div className="col" key={item._id}>
                  <div className="card" style={{ marginBottom: "50px" }}>
                    <img
                      src={`${root.imgUrl}/img/${item.imageUrl}`}
                      alt=""
                      height={280}
                      className="store_img"
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h5 className="fw-bold text-capitalize">
                            {item.productName}
                          </h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-7">
                          <div className="row">
                            <div className="col">
                              <strong className="h6 fw-bold">
                                Market Price
                              </strong>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <p className="pt-2 fw-bold">
                                ₹ {item.marketPrice}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="row">
                            <div className="col">
                              <strong className="h6 fw-bold">FPO Price</strong>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <p className="pt-2 fw-bold">₹ {item.fpoPrice}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
