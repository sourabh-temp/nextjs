"use client"
import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import '@/styles/Header.css';
import Subheader from '@/components/Subheader.tsx'
import Image from 'next/image';

const Header = () => {

  return (
    <div>
      <Subheader />
      <header className="header">
        <div className="header-logo">
          <Image
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
