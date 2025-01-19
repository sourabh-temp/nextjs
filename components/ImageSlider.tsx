"use client"
import React, { useState } from 'react';
import '@/styles/ImageSlider.css';
import Image from 'next/image';

const ImageSlider = () => {
  const offerImages = [
    { src: 'https://hsfnutrition.in/cdn/shop/files/style_.section-_section.id_.custom-marquee_display_flex_align-items_center_height_section.settings.marquee_height_px_width_100vw_max-width_100_overflow-x_hidden_background_section.png?v=1730661571', alt: 'Offer 1' },
    { src: 'https://hsfnutrition.in/cdn/shop/files/payday-sale-banner-new-50_39498d53-d3b8-4de8-8447-18803c5231a1.webp?v=1729167890', alt: 'Offer 2' },
    { src: 'https://hsfnutrition.in/cdn/shop/files/bnr_3591513_o.webp?v=1730830660&width=3840', alt: 'Offer 3' },
    { src: 'https://via.placeholder.com/1200x400?text=Offer+4', alt: 'Offer 4' },
    { src: 'https://via.placeholder.com/1200x400?text=Offer+5', alt: 'Offer 5' },
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

  const goToSlide = (index) => {
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
