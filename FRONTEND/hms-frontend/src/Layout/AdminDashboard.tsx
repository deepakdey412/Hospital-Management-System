import React from "react";
import SideBar from "../Components/Sidebar/SideBar";
import Header from "../Components/Header/Header";

const AdminDashboard = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="w-full">
        <Header />
      </div>
    </div>
  );
};

export default AdminDashboard;
