
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "../features/auth/pages/Login";
// import Register from "../features/auth/pages/Register";
// import Home from "../features/home/pages/Home";
// import AboutUs from "../features/home/pages/AboutUs"; // 1. IMPORT THE REAL FILE
// import ExploreMore from "../features/home/pages/ExploreMore"; // IMPORT EXPLORE MORE
// import AssessmentsHome from '../features/assessments/pages/AssessmentsHome';
// import MainLayout from "../components/layout/MainLayout";
// import ProtectedRoute from "./ProtectedRoute";

// const AppRoutes = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Protected Area */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <MainLayout />
//             </ProtectedRoute>
//           }
//         >
//           {/* These appear inside MainLayout's <Outlet /> */}
//           <Route index element={<Home />} />
//           <Route path="about" element={<AboutUs />} /> {/* 2. USE THE REAL COMPONENT */}
//           <Route path="explore" element={<ExploreMore />} /> {/* ADDED EXPLORE ROUTE */}
          
//           {/* Placeholders for other pages until we build them */}
//           <Route path="relaxation" element={<div className="p-20 text-center text-3xl font-bold">Relaxation Coming Soon</div>} />
//           <Route path="/assessments" element={<AssessmentsHome />} />
//           <Route path="blog" element={<div className="p-20 text-center text-3xl font-bold">Blogs Coming Soon</div>} />
//           <Route path="games" element={<div className="p-20 text-center text-3xl font-bold">Games Coming Soon</div>} />
//         </Route>

//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRoutes;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import Home from "../features/home/pages/Home";
import AboutUs from "../features/home/pages/AboutUs"; 
import ExploreMore from "../features/home/pages/ExploreMore"; 
import AssessmentsHome from '../features/assessments/pages/AssessmentsHome';
import AssessmentIntro from '../features/assessments/pages/AssessmentIntro';
import AssessmentTest from '../features/assessments/pages/AssessmentTest';
import AssessmentResult from '../features/assessments/pages/AssessmentResult';
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
          <Route path="about" element={<AboutUs />} /> 
          <Route path="explore" element={<ExploreMore />} /> 
          
          {/* Relaxation */}
          <Route path="relaxation" element={<div className="p-20 text-center text-3xl font-bold">Relaxation Coming Soon</div>} />
          
          {/* Assessments Module */}
          <Route path="assessments" element={<AssessmentsHome />} />
          <Route path="assessments/intro/:id" element={<AssessmentIntro />} />
          <Route path="assessments/test/:id" element={<AssessmentTest />} />
          <Route path="assessments/result" element={<AssessmentResult />} />
          
          {/* Placeholders */}
          <Route path="blog" element={<div className="p-20 text-center text-3xl font-bold">Blogs Coming Soon</div>} />
          <Route path="games" element={<div className="p-20 text-center text-3xl font-bold">Games Coming Soon</div>} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;