import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "../Layout/AdminDashboard";
// import Dashboard from "../pages/Dashboard";
// import Doctor from "../pages/Doctor";
// import Patient from "../pages/Patient";
// import Appointment from "../pages/Appointment";
// import Vaccine from "../pages/Vaccine";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/vaccine" element={<Vaccine />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
