import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LayoutLogin from "../layouts/LayoutLogin";
import LayoutMain from "../layouts/LayoutMain";
import Login from "../pages/auth/Login";
import PrivateRoute from "./PriveRouter";
import HomePages from "../pages/home/HomePages";
import Quizzes from "../pages/home/Quizzes/Quizzes";
import Dashboard from "../pages/admin/Dashboard";
import Counseling from "../pages/Counseling";
const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      {/* GUEST */}
      <Route element={<LayoutMain />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePages />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/counseling" element={<Counseling />} />
      </Route>
      {/* LAyout_header không có foodter*/}
      <Route element={<LayoutLogin />}>
        <Route path="/login" element={<Login />} />
      </Route>
      {/* CUSTOMER */}
      <Route element={<LayoutMain />}>
        <Route
          path="/home"
          element={
            <PrivateRoute element={HomePages} allowedRoles={["MEMBER"]} />
          }
        />
      </Route>

      {/* NHÀ Trị Liệu */}
      <Route element={<LayoutMain />}>
        <Route
          path="/home"
          element={
            <PrivateRoute element={HomePages} allowedRoles={["EXPERT"]} />
          }
        />
      </Route>
      {/* ADMIN */}
      <Route
        path="/dashboard"
        element={<PrivateRoute element={Dashboard} allowedRoles={["ADMIN"]} />}
      />
    </Routes>
  </Router>
);

export default AppRoutes;
