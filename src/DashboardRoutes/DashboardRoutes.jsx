import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../pages/DashboardLayout/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import LoginRedirect from "./LoginRedirect/LoginRedirect";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="signup"
        element={
          <ProtectedRoute>
            <SignUp />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard"
        element={
          <LoginRedirect>
            <DashboardLayout />
          </LoginRedirect>
        }
      >
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
