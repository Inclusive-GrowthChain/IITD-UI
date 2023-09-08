import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createLicense,
  deleteLicense,
  getLicenses,
} from "../../../actions/admin";
import Loader from "../../Common/Loader";

const applyBtnStyle = {
  backgroundColor: "#064420",
  border: "none",
  borderRadius: "5px",
  width: "70px",
  color: "#fff",
  padding: "3px 4px",
};

const CorporateClient = () => {
  const { register, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient();

  //Get License Data
  const { isLoading, data } = useQuery({
    queryKey: ["Licenses"],
    queryFn: () => getLicenses("corporateclient"),
  });

  //Create License 
  const { mutate } = useMutation({
    mutationFn: createLicense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Licenses"] });
      reset();
    },
  });

  const onSubmit = (data) => {
    const restructuredData = {
      ...data,
      role: "corporateclient"
    };
    if (data) {
      mutate(restructuredData);
    }
  };


  //Delete License
  const deleteMutation = useMutation({
    mutationFn: (id) => deleteLicense(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Licenses"] });
    },
  });

  //Loading 
  if(isLoading) return <Loader wrapperCls="loader-main-right"/>

  return (
    <div>
      <div className="d-flex justify-content-end align-items-center">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex align-items-center justify-content-center"
          >
            <div class="input-group mb-3">
              <input
                {...register("name", { required: "Name is required" })}
                required
                type="text"
                autoComplete="Name"
                className="form-control"
                placeholder="Enter user Name"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                style={{
                  backgroundColor: "#064420",
                  color: "#fff",
                  border: "none",
                }}
                type="submit"
                id="button-addon2"
              >
                Generate License Key
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="card my-3 shadow ">
        <div className=" table-responsive p-3">
          <table className="table table-striped">
            <thead
              style={{
                fontSize: "15px",
                verticalAlign: "top",
              }}
            >
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>License Key</th>
                <th>Status</th>
                <th>Created Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody
              style={{
                color: "#000",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              {data?.map((license, ind) => {
                const createdDate = new Date(license.createdAt);
                return (
                  <tr key={license._id}>
                    <td>{ind + 1}</td>
                    <td>{license.name}</td>
                    <td>{license.licenseId}</td>
                    <td>{license.status}</td>
                    <td>{createdDate.toLocaleString("en-IN")}</td>
                    <td>
                      <button
                        style={applyBtnStyle}
                        onClick={() => {
                          deleteMutation.mutate({ id: license.licenseId });
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CorporateClient;
