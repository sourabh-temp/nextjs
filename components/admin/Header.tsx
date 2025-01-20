"use client";
import React from 'react';
import Link from 'next/link';

const Header = () => {
  // Placeholder data for admin's profile
  const adminName = "Admin Name";

  // Handle logout action (you can use your auth logic here)
  const handleLogout = () => {
    // Example: You can add your logout logic here
    console.log("Logged out");
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Side - Profile */}
        <div className="flex items-center space-x-4">
          
          <span className="text-lg font-semibold">Welcome, {adminName}</span>
        </div>

        {/* Right Side - Admin Info & Logout */}
        <div className="flex items-center space-x-4">
          <Link href="/admin/dashboard">
            <p className="text-lg font-semibold">Dashboard</p>
          </Link>
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
