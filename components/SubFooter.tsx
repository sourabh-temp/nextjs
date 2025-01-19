"use client"
import React from 'react';
import '@/styles/SubFooter.css';

const SubFooter = () => {
  const brands = [
    'https://hsfnutrition.in/cdn/shop/files/DJSS_NewLogo.webp?height=100&v=1730667325',
    'https://hsfnutrition.in/cdn/shop/files/download_39.jpg?height=100&v=1730666887',
    'https://hsfnutrition.in/cdn/shop/files/Kapiva-new-logo--1.jpg?height=100&v=1730667324',
    'https://hsfnutrition.in/cdn/shop/files/MUSCLE_GARAGE_LOGO_page-0001.webp?height=100&amp;v=1730667325',
    'https://hsfnutrition.in/cdn/shop/files/loginBannerOTP-2.jpg?height=100&amp;v=1730667325',
    'https://hsfnutrition.in/cdn/shop/files/DJSS_NewLogo.webp?height=100&amp;v=1730667325',
    'https://hsfnutrition.in/cdn/shop/files/7888b841-13ae-11eb-9dfd-06f7a2c059a3.png?height=100&amp;v=1730667325',
    'https://hsfnutrition.in/cdn/shop/files/1707763309.png?height=100&amp;v=1730667325',
    'https://hsfnutrition.in/cdn/shop/files/images_6.jpg?height=100&amp;v=1730667325',
    'https://hsfnutrition.in/cdn/shop/files/images_4_830d6e19-4920-484d-9cfd-9427a5b64276.png?height=100&amp;v=1730667624',
    'https://hsfnutrition.in/cdn/shop/files/muscletech-logo-3DBC4BBC88-seeklogo.com.png?height=100&amp;v=1730667648',
    'https://hsfnutrition.in/cdn/shop/files/wellcore-jpg.webp?height=100&amp;v=1730667667',
    'https://hsfnutrition.in/cdn/shop/files/images_5.png?height=100&amp;v=1730667688',
    'https://hsfnutrition.in/cdn/shop/files/atx-logo.webp?height=100&amp;v=1731059380',
    'https://hsfnutrition.in/cdn/shop/files/esD61rl3_400x400_7e2afe39-821f-4195-9d20-ad5801ab4893.jpg?height=100&amp;v=1731059435'
  ];

  return (
    <div className="sub-footer">
      <div className="brands-marquee">
        <div className="brands-container">
          {brands.map((brand, index) => (
            <img key={index} src={brand} alt={`Brand ${index + 1}`} className="brand-logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
