

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "../Layout/AdminDashboard";
import Random from "../Random";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      
        {/* Parent layout */}
        <Route path="/" element={<AdminDashboard />}>
          <Route path="doctor" element={<Random />} />
          <Route path="patient" element={<Random />} />
          <Route path="appointment" element={<Random />} />
          <Route path="vaccine" element={<Random />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
