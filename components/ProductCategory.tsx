"use client"
import React, { useRef } from 'react';
import '@/styles/ProductCategory.css';
import Image from 'next/image';

const categories = [
  { id: 1, name: 'Protein', image: '/logo.webp' },
  { id: 2, name: 'Gainer', image: '/logo.webp' },
  { id: 5, name: 'Creatine', image: '/logo.webp' },
  { id: 6, name: 'Multivitamin', image: '/logo.webp' },
  { id: 7, name: 'PreWorkout', image: '/logo.webp' },
  { id: 8, name: 'AminoAcid', image: '/logo.webp' },
  { id: 9, name: 'Fat Loss', image: '/logo.webp' },
  { id: 10, name: 'Wellness', image: '/logo.webp' },
  { id: 11, name: 'Protein Food', image: '/logo.webp' },
  { id: 12, name: 'Accessories', image: '/logo.webp' },
];

const ProductCategory = () => {
  const carouselRef = useRef(null); // Create a reference for the carousel

  return (
    <div className="category-container">
      <div className="category-carousel" ref={carouselRef}>
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <Image
              src={category.image}
              alt={category.name}
              width={300} 
              height={200} 
              layout="responsive"
              className="category-image"
            />
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductCategory;
