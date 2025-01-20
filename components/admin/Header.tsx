"use client";
import React from 'react';
import Link from 'next/link';

const Header = () => {
  const adminName = "Admin Name";

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-4">
          
          <span className="text-lg font-semibold">Welcome, {adminName}</span>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/admin/login">
            <p className="text-lg font-semibold">Login</p>
          </Link>
          <button 
            onClick={handleLogout} 
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
