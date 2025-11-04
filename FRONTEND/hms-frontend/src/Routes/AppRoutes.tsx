// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AdminDashboard from "../Layout/AdminDashboard";
// import Random from "../Random";

// const AppRoutes = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Parent layout */}
//         <Route path="/" element={<AdminDashboard />}>
//           <Route path="/doctor" element={<Random />} />
//           <Route path="/patient" element={<Random />} />
//           <Route path="/appointment" element={<Random />} />
//           <Route path="/vaccine" element={<Random />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRoutes;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "../Layout/AdminDashboard";
import Random from "../Random";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
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
