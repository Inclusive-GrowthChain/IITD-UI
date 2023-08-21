import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const ProtectedRoute = ({ role }) => {
  const loggedIn = useAuthStore((auth) => auth.loggedIn);
  const userRole = useAuthStore((user) => user.userDetails);

  return loggedIn && userRole.type === role ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
