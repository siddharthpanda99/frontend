import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

const PrivateRoutes = () => {
  const { user } = useUserContext();
  return user?.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
