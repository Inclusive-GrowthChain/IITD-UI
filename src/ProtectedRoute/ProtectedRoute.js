import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const ProtectedRoute = ({ role }) => {
  const loggedIn = useAuthStore((auth) => auth.loggedIn);
  const userRole = useAuthStore((user) => user.userDetails);

  console.log(userRole, role,"Role of the route")
  return loggedIn && userRole?.userType || userRole?.role === role ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
