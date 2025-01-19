"use client"
import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import '@/styles/Header.css';
import Subheader from '@/components/Subheader'
import Image from 'next/image';

const Header = () => {

  return (
    <div>
      <Subheader />
      <header className="header">
        <div className="header-logo">
          <Image
            src=""
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
