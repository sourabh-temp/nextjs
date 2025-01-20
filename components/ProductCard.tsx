"use client"

import React from 'react';
import Link from 'next/link';
import '@/styles/ProductCard.css';
import Image from 'next/image';

const ProductCard = () => {
  const products = [
    {
      id: 1,
      image: '/protien.webp',
      title: 'Protein',
      description: 'AS-IT-IS ATOM Whey Protein - 1 kg, 27GM Protein',
      category: 'ASITIS NUTRITION',
      originalPrice: '3,138.00',
      discountedPrice: '1,790.00',
      inStock: true
    },
    {
      id: 2,
      image: '/gainer.jpeg',
      title: 'Gainer',
      description: 'Portable bluetooth speaker with 10 hours of battery life.',
      category: 'Electronics',
      originalPrice: 80,
      discountedPrice: 60,
      inStock: false
    },
    {
      id: 3,
      image: '/cratine.jpg',
      title: 'Creatine',
      description: 'Fitness tracker with heart rate monitor and GPS.',
      category: 'Wearables',
      originalPrice: 120,
      discountedPrice: 100,
      inStock: true
    },
    {
      id: 4,
      image: '/multivitamin.jpg',
      title: 'Multivitamin',
      description: 'Ergonomic mouse designed for gaming with customizable DPI.',
      category: 'Accessories',
      originalPrice: 40,
      discountedPrice: 35,
      inStock: true
    },
    {
      id: 5,
      image: '/preworkout.png',
      title: 'PreWorkout',
      description: 'Adjustable laptop stand for better posture and ventilation.',
      category: 'Accessories',
      originalPrice: 30,
      discountedPrice: 25,
      inStock: true
    },
    {
      id: 6,
      image: '/aminoacid.webp',
      title: 'AminoAcid',
      description: 'Compact wireless keyboard with a long battery life.',
      category: 'Accessories',
      originalPrice: 50,
      discountedPrice: 45,
      inStock: false
    }
  ];

  return (
    <div className="product-list">
      {products.map((product) => {
        const { id, image, title, description, category, originalPrice, discountedPrice, inStock } = product;

        return (
          <div key={id} className="product-card">
            <Link href={`/ProductView/${id}`} passHref>
              <div className="product-image-wrapper">
                <Image src={image} alt={title} width={300} height={200} layout="responsive" className="product-image" />
                <div className={`stock-status-badge ${inStock ? 'in-stock' : 'out-of-stock'}`}>
                  {inStock ? 'In Stock' : 'Out of Stock'}
                </div>
                {discountedPrice && (
                  <div className="offer-badge">20% OFF</div>
                )}
              </div>
              <div className="product-details">
                <h3 className="product-title">{title}</h3>
                <p className="product-description">{description}</p>
                <p className="product-category">{category}</p>
                <div className="product-price">
                  {originalPrice && (
                    <span className="original-price">Rs {originalPrice}</span>
                  )}
                  {discountedPrice && (
                    <span className="discounted-price">Rs {discountedPrice}</span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
