"use client"
import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link'; // Use Link component for navigation in Next.js
// import { useRouter } from 'next/router'; // Import the Next.js router for programmatic navigation
import '@/styles/Header.css'; // Import the CSS for the header
import Subheader from '@/components/Subheader.tsx'

const Header = () => {
  // const router = useRouter(); // Initialize Next.js router

  // Handle navigation
  const handleLogin = () => {
    // router.push('/login'); // Use router.push for programmatic navigation
  };

  const handleAllProduct = () => {
    // router.push('/all-products');
  };

  return (
    <div>
      <Subheader />
      <header className="header">
        <div className="header-logo">
          <img
            src="https://hsfnutrition.in/cdn/shop/files/358b7a219a4c0552166fde9f2d351d3d759031_bdd7429c-5458-4d4b-b0f2-12e43a08ff57.png?v=1728030313"
            alt="HSF Nutrition Logo"
            className="logo-image"
          />
        </div>

        <nav className="header-nav">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Categories</li>
            <Link href="/AllProduct">
              <li>All Products</li>
            </Link>
            <li>HSF Offers</li>
          </ul>
        </nav>

        <div className="header-search">
          <input type="text" placeholder="Search products..." />
        </div>

        <div className="header-cart">
          <Link href="/CartPage">
            <FaShoppingCart />
          </Link>
        </div>

        <div className="header-profile">
          <Link href="/Login">
            <FaUserCircle />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
