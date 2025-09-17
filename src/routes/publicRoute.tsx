// routes/publicRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { getItem } from "../utils/sessionStorageUtils";

const PublicRoute = () => {
  const isAuthenticated = getItem("access_token");

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;
