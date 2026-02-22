import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import Home from "../features/home/pages/Home";
import AboutUs from "../features/home/pages/AboutUs"; // 1. IMPORT THE REAL FILE
import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Area */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          {/* These appear inside MainLayout's <Outlet /> */}
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} /> {/* 2. USE THE REAL COMPONENT */}
          
          {/* Placeholders for other pages until we build them */}
          <Route path="relaxation" element={<div className="p-20 text-center text-3xl font-bold">Explore More Coming Soon</div>} />
          <Route path="assessments" element={<div className="p-20 text-center text-3xl font-bold">Assessments Coming Soon</div>} />
          <Route path="blog" element={<div className="p-20 text-center text-3xl font-bold">Blogs Coming Soon</div>} />
          <Route path="games" element={<div className="p-20 text-center text-3xl font-bold">Games Coming Soon</div>} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;