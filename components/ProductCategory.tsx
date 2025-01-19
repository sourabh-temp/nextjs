"use client"
import React, { useRef } from 'react';
import '@/styles/ProductCategory.css';

// Example category data
const categories = [
  { id: 1, name: 'Protein', image: 'https://hsfnutrition.in/cdn/shop/files/6_2af872b5-2d8b-4bca-aa95-34acbb03dbe4.png?v=1728126234' },
  { id: 2, name: 'Gainer', image: 'https://hsfnutrition.in/cdn/shop/files/1_e537a841-e44b-49ef-9dd0-66436a2819fd.png?v=1728125313' },
  { id: 5, name: 'Creatine', image: 'https://hsfnutrition.in/cdn/shop/files/1_67dc6719-e877-41cc-8bb5-e551fc0698de.png?v=1727902057' },
  { id: 6, name: 'Multivitamin', image: ' https://hsfnutrition.in/cdn/shop/files/5_29ac299c-18bb-48c2-bccd-4af02a63f07f.png?v=1728208335' },
  { id: 7, name: 'PreWorkout', image: 'https://hsfnutrition.in/cdn/shop/files/HOLD_STRONG_FITNESS_NUTRITION_33.png?v=1730721798' },
  { id: 8, name: 'AminoAcid', image: '  https://hsfnutrition.in/cdn/shop/files/1_e78983df-e7f6-47d0-a8a5-5d62dc9c8f4c.png?v=1728130050' },
  { id: 9, name: 'Fat Loss', image: 'https://hsfnutrition.in/cdn/shop/files/1_ca7a00df-b6fc-4d3f-af6d-3c300e7476ea.png?v=1730722283' },
  { id: 10, name: 'Wellness', image: 'https://hsfnutrition.in/cdn/shop/files/45.png?v=1728133750' },
  { id: 11, name: 'Protein Food', image: 'https://hsfnutrition.in/cdn/shop/files/3_67e796e6-49b6-456c-ade8-2de946dbe10b.png?v=1728044587' },
  { id: 12, name: 'Accessories', image: 'https://hsfnutrition.in/cdn/shop/files/HOLDSTRONGFITNESS_NUTRITION_1.png?v=1728114751' },
];

const ProductCategory = () => {
  const carouselRef = useRef(null); // Create a reference for the carousel

  return (
    <div className="category-container">
      <div className="category-carousel" ref={carouselRef}>
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <img
              src={category.image}
              alt={category.name}
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
