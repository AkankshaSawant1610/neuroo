import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar /> {/* Your horizontal top bar */}
      <main className="flex-grow">
        <Outlet /> {/* THIS LOADS THE CONTENT */}
      </main>
    </div>
  );
};

export default MainLayout;