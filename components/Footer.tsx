"use client";
import React from 'react';
import Link from 'next/link';
import '@/styles/Footer.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/" className="footer-link">Home Page</Link></li>
            <li><Link href="/collections" className="footer-link">All Collections</Link></li>
            <li><Link href="/products" className="footer-link">All Products</Link></li>
            <li><Link href="/blogs" className="footer-link">Blogs</Link></li>
            <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Hold Strong Fitness & Nutrition</h4>
          <p className="footer-text">hsfnutrition.in - India’s Trusted Supplement Shop</p>
          <p className="footer-text">24*7 WhatsApp Support: <a href="tel:+919155242400" className="footer-link">+91 8595242400</a></p>
          <p className="footer-text">Email: <a href="mailto:holdstrongfitnessnutrition@gmail.com" className="footer-link">holdstrongfitnessnutrition@gmail.com</a></p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="footer-social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-text">© 2024 Hold Strong Fitness & Nutrition. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
