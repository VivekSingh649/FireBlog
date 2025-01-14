import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "./authProvider";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAppContext();

  if (!currentUser) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;
