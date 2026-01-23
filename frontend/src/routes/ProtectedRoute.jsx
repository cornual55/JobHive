import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";

const ProtectedRoute = ({ requiredRole }) => {
  // будет сделано позже
  return <Outlet />;
};

export default ProtectedRoute;
