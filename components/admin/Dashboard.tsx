"use client"
import React, { useState } from 'react';
import Header from '@/components/admin/Header'
import Sidebar from '@/components/admin/Sidebar';
import Users from '@/components/admin/User';
import Products from '@/components/admin/Product';
import Orders from '@/components/admin/Order';
import '@/styles/admin/Dashboard.css';

function AdminDashboard() {
  // State to track which component is active
  const [activeComponent, setActiveComponent] = useState('');

  // Function to render the selected component
  const renderComponent = () => {
    if (!activeComponent) {
      // If no component is selected, show the welcome message
      return (
        <div className="welcome-message">
          <h2>Welcome to the Admin Dashboard</h2>
          <p>Select an option from the sidebar to manage your application.</p>
        </div>
      );
    }

    switch (activeComponent) {
      case 'Users':
        return <Users />;
      case 'Products':
        return <Products />;
      case 'Orders':
        return <Orders />;
      default:
        return <Users />;
    }
  };

  return (
    <div className="admin-dashboard">
      <Header />
      <div className="admin-main">
        <Sidebar setActiveComponent={setActiveComponent} />
        <div className="admin-content">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
