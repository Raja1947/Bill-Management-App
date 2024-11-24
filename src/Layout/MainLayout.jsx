import React from 'react';
import Sidebar from '../Pages/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './MainLayout.css'; 

function MainLayout() {
  return (
    <div className="main-layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
