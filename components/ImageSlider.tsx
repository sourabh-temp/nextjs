"use client"
import React, { useState } from 'react';
import '@/styles/ImageSlider.css';
import Image from 'next/image';

const ImageSlider = () => {
  const offerImages = [
    { src: '/logo.webp', alt: 'Offer 1' },
    { src: '/logo.webp', alt: 'Offer 2' },
    { src: '/logo.webp', alt: 'Offer 3' },
    { src: '/logo.webp', alt: 'Offer 4' },
    { src: '/logo.webp', alt: 'Offer 5' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? offerImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === offerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-wrapper">
      <h1 className="slider-title">Special Offers</h1>

      <div className="slider-container">
        <div className="slider-images">
          <Image
            src={offerImages[currentIndex].src}
            alt={offerImages[currentIndex].alt}
            width={300} 
            height={200} 
            layout="responsive"
            className="slider-image"
          />
        </div>

        <div className="slider-nav">
          <button className="slider-button left" onClick={prevSlide}>
            &#8249;
          </button>
          <button className="slider-button right" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
      </div>

      <div className="dots-container">
        {offerImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
