import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getUserDetails } from "../../../actions/fpo";
import Loader from "../../Common/Loader";

function Panel1() {
  const { farmerId } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["get_users_details"],
    queryFn: () => getUserDetails(farmerId),
  });

  if (isLoading) return <Loader wrapperCls="loader-main-right" />;

  return (
    <div className="card_table">
      <h6 className="heading-small text-muted text-bold text-uppercase mb-4">
        farmer information
      </h6>
      <div className="pl-lg-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">Name</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">{data?.data?.userName}</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">
                Mobile Number
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">
                {data?.data?.contactNumber}
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">
                Date of Birth
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">
                {data?.data?.DOB}
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">Gender</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">{data?.data?.gender}</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">Address</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">
                {data?.data?.doorNumber} {data?.data?.streetName} {data?.data?.village} {data?.data?.taluk} {data?.data?.district} {data?.data?.state} {data?.data?.pinCode}
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">
                Aadhaar Number
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">
                {data?.data?.aadharCardNumber}
              </label>
            </div>
          </div>
        </div>
        {
          data?.data?.panCardNumber && <>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label text-black">
                    PAN Number
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label text-black">
                    {data?.data?.panCardNumber}
                  </label>
                </div>
              </div>
            </div>
          </>
        }
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">Bank Name</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">{data?.data?.bankName}</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">
                Bank Account Number
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">
                {data?.data?.accountNumber}
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">IFSC Code</label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group focused">
              <label className="form-control-label text-black">
                {data?.data?.ifscCode}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel1;
