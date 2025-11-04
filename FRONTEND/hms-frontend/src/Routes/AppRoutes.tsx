import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminDashboard from "../Layout/AdminDashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        {/* <Route path="/about" element={<About />} />about route */}
        {/* <Route path="/contact" element={<Contact />} />contact route */}
      </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes