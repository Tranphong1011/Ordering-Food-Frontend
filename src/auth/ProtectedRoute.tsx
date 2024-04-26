import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const {isAuthenticated} = useAuth0();
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
  // <Outlet />: indicates that if the user is authenticated (isAuthenticated is true), the child routes should be rendered.
}

export default ProtectedRoute;