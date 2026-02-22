import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import Home from "../features/home/pages/Home";
import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

// Minimal components for other routes to prevent errors
const Placeholder = ({ name }) => <div className="p-20 text-center text-2xl font-bold">{name} Page Coming Soon</div>;

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes - Wrapped in MainLayout for the Navbar */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          {/* These will show up in the Outlet of MainLayout */}
          <Route index element={<Home />} />
          <Route path="about" element={<Placeholder name="About Us" />} />
          <Route path="relaxation" element={<Placeholder name="Relaxation Corner" />} />
          <Route path="assessments" element={<Placeholder name="Assessments" />} />
          <Route path="blog" element={<Placeholder name="Blogs" />} />
          <Route path="games" element={<Placeholder name="Games" />} />
        </Route>

        {/* Catch-all: Redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;