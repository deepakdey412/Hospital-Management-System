import React from "react";
import SideBar from "../Components/Sidebar/SideBar";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="w-full">
        <Header />
        <div className='p-5 bg-gray-100 flex-1 overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
