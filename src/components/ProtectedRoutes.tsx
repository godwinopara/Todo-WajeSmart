import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const isTokenExpired = (token: string): boolean => {
  const payloadBase64 = token.split(".")[1];
  const decodedPayload = JSON.parse(atob(payloadBase64));
  return decodedPayload.exp * 1000 < Date.now();
};

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem("token");

  if (!isTokenExpired) {
    localStorage.removeItem("token");
  }
  if (!token || !isTokenExpired) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
export default ProtectedRoute;
