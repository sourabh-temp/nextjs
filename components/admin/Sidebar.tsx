"use client"
import React, { useState } from 'react';
import '@/styles/admin/Sidebar.css';
import { FaUser, FaBox, FaList } from 'react-icons/fa'; // Icons from react-icons

// Define the props type
interface SidebarProps {
  setActiveComponent: (component: string) => void; // Function type to set active component
}

function Sidebar({ setActiveComponent }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item: string) => {
    setActiveComponent(item);
    setActiveItem(item);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <nav>
        <ul>
          <li
            className={activeItem === 'Users' ? 'active' : ''}
            onClick={() => handleItemClick('Users')}
          >
            <FaUser className="sidebar-icon" /> Users
          </li>
          <li
            className={activeItem === 'Products' ? 'active' : ''}
            onClick={() => handleItemClick('Products')}
          >
            <FaBox className="sidebar-icon" /> Products
          </li>
          <li
            className={activeItem === 'Orders' ? 'active' : ''}
            onClick={() => handleItemClick('Orders')}
          >
            <FaList className="sidebar-icon" /> Orders
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
