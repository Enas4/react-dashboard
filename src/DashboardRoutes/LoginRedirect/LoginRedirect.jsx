import { Navigate } from "react-router-dom";

const LoginRedirect = ({ children }) => {
  const user = localStorage.getItem("user");

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default LoginRedirect;
