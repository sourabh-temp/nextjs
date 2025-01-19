"use client"
import React from 'react';
import '@/styles/SubFooter.css';
import Image from 'next/image';

const SubFooter = () => {
  const brands = [
    '/logo.webp',
    '/logo.webp',
    '/logo.webp',
    '/logo.webp',
    '/logo.webp',
    '/logo.webp',
    '/logo.webp',
    '/logo.webp',
    '/logo.webp',
    '/logo.webp',
    '/logo.webp',
    '/logo.webp',
    '/logo.webp',
    '/logo.webp',
    '/logo.webp'
  ];

  return (
    <div className="sub-footer">
      <div className="brands-marquee">
        <div className="brands-container">
          {brands.map((brand, index) => (
            <Image key={index} src={brand} width={300} height={200} layout="responsive" alt={`Brand ${index + 1}`} className="brand-logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
