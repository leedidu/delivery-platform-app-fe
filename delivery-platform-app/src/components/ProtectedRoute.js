import React from "react";
import { Navigate } from "react-router-dom";

// !! >> 값이 있는지 확인하기 위해 논리형
const isAuthenticated = () => !!localStorage.getItem("accessToken"); // accessToken 있는지 확인

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/user/login" />;
};

export default ProtectedRoute;
