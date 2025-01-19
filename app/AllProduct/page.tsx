"use client"
import React, { useState } from 'react';
import '@/styles/AllProduct.css';
// import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubFooter from '@/components/SubFooter'
import Link from 'next/link';

const AllProduct = () => {
  // const navigate = useNavigate();
  const [filters, setFilters] = useState({
    availability: '',
    minPrice: 0,
    maxPrice: 10000,
    brand: '',
  });

  const [page, setPage] = useState(1);
  const [priceOpen, setPriceOpen] = useState(false); // To toggle price filter visibility

  const products = [
    {
      id: 1,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Protein',
      description: 'AS-IT-IS ATOM Whey Protein - 1 kg, 27GM Protein',
      category: 'ASITIS NUTRITION',
      price: 1790.00,
      brand: 'ASITIS',
      inStock: true
    },
    {
      id: 2,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Gainer',
      description: 'Portable bluetooth speaker with 10 hours of battery life.',
      category: 'Electronics',
      price: 60,
      brand: 'BrandX',
      inStock: false
    },
    {
      id: 3,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Creatine',
      description: 'Fitness tracker with heart rate monitor and GPS.',
      category: 'Wearables',
      price: 100,
      brand: 'BrandY',
      inStock: true
    },
    {
      id: 4,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Multivitamin',
      description: 'Ergonomic mouse designed for gaming with customizable DPI.',
      category: 'Accessories',
      price: 35,
      brand: 'BrandZ',
      inStock: true
    },
    {
      id: 5,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'PreWorkout',
      description: 'Adjustable laptop stand for better posture and ventilation.',
      category: 'Accessories',
      price: 25,
      brand: 'BrandX',
      inStock: true
    },
    {
      id: 6,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'AminoAcid',
      description: 'Compact wireless keyboard with a long battery life.',
      category: 'Accessories',
      price: 45,
      brand: 'BrandY',
      inStock: false
    },
    {
      id: 7,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Protein',
      description: 'AS-IT-IS ATOM Whey Protein - 1 kg, 27GM Protein',
      category: 'ASITIS NUTRITION',
      price: 1790.00,
      brand: 'ASITIS',
      inStock: true
    },
    {
      id: 8,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Gainer',
      description: 'Portable bluetooth speaker with 10 hours of battery life.',
      category: 'Electronics',
      price: 60,
      brand: 'BrandX',
      inStock: false
    },
    {
      id: 9,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Creatine',
      description: 'Fitness tracker with heart rate monitor and GPS.',
      category: 'Wearables',
      price: 100,
      brand: 'BrandY',
      inStock: true
    },
    {
      id: 10,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Multivitamin',
      description: 'Ergonomic mouse designed for gaming with customizable DPI.',
      category: 'Accessories',
      price: 35,
      brand: 'BrandZ',
      inStock: true
    },
    {
      id: 11,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'PreWorkout',
      description: 'Adjustable laptop stand for better posture and ventilation.',
      category: 'Accessories',
      price: 25,
      brand: 'BrandX',
      inStock: true
    },
    {
      id: 12,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'AminoAcid',
      description: 'Compact wireless keyboard with a long battery life.',
      category: 'Accessories',
      price: 45,
      brand: 'BrandY',
      inStock: false
    },
    {
      id: 13,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Protein',
      description: 'AS-IT-IS ATOM Whey Protein - 1 kg, 27GM Protein',
      category: 'ASITIS NUTRITION',
      price: 1790.00,
      brand: 'ASITIS',
      inStock: true
    },
    {
      id: 14,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Gainer',
      description: 'Portable bluetooth speaker with 10 hours of battery life.',
      category: 'Electronics',
      price: 60,
      brand: 'BrandX',
      inStock: false
    },
    {
      id: 15,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Creatine',
      description: 'Fitness tracker with heart rate monitor and GPS.',
      category: 'Wearables',
      price: 100,
      brand: 'BrandY',
      inStock: true
    },
    {
      id: 16,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'Multivitamin',
      description: 'Ergonomic mouse designed for gaming with customizable DPI.',
      category: 'Accessories',
      price: 35,
      brand: 'BrandZ',
      inStock: true
    },
    {
      id: 17,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'PreWorkout',
      description: 'Adjustable laptop stand for better posture and ventilation.',
      category: 'Accessories',
      price: 25,
      brand: 'BrandX',
      inStock: true
    },
    {
      id: 18,
      image: 'http://hsfnutrition.in/cdn/shop/files/1_1ef33aa5-3f5e-47e4-96d2-446e23b1e9a4.png?v=1728185570',
      title: 'AminoAcid',
      description: 'Compact wireless keyboard with a long battery life.',
      category: 'Accessories',
      price: 45,
      brand: 'BrandY',
      inStock: false
    }
	];

  const filteredProducts = products
    .filter(product =>
      (filters.availability ? product.inStock === (filters.availability === 'in-stock') : true) &&
      (product.price >= filters.minPrice && product.price <= filters.maxPrice) &&
      (filters.brand ? product.brand.toLowerCase().includes(filters.brand.toLowerCase()) : true)
    )
    .slice((page - 1) * 16, page * 16); // Pagination: Show 16 products per page

  const totalProducts = products.filter(product =>
    (filters.availability ? product.inStock === (filters.availability === 'in-stock') : true) &&
    (product.price >= filters.minPrice && product.price <= filters.maxPrice) &&
    (filters.brand ? product.brand.toLowerCase().includes(filters.brand.toLowerCase()) : true)
  ).length; // Filtered total count

  const handleClick = (productId) => {
    // navigate(`/product/${productId}`);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleRemoveFilters = () => {
    setFilters({ availability: '', minPrice: 0, maxPrice: 10000, brand: '' });
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handlePriceFocus = () => {
    setPriceOpen(true); // Open the price filter when the user focuses on the input
  };

  const handlePriceBlur = (e) => {
    if (e.relatedTarget && e.relatedTarget.name !== 'minPrice' && e.relatedTarget.name !== 'maxPrice') {
      setPriceOpen(false); // Close the price filter if the user clicks outside
    }
  };

  return (
  	<div>
  	<Header />
	    <div className="all-product-list">
	      <h2>All Products</h2>
	      
	      <div className="filter-section">
	        {/* Filter by availability */}
	        <select name="availability" value={filters.availability} onChange={handleFilterChange}>
	          <option value="">Filter by Availability</option>
	          <option value="in-stock">In Stock</option>
	          <option value="out-of-stock">Out of Stock</option>
	        </select>

	        {/* Price Filter */}
	        {/*<div className="price-filter" onClick={() => setPriceOpen(!priceOpen)}>
	          <span>Price</span>
	          {priceOpen && (
	            <div className="price-range" onBlur={handlePriceBlur} tabIndex={0}>
	              <input
	                type="number"
	                name="minPrice"
	                placeholder="Min Price"
	                value={filters.minPrice}
	                onChange={handleFilterChange}
	                onFocus={handlePriceFocus}
	              />
	              <input
	                type="number"
	                name="maxPrice"
	                placeholder="Max Price"
	                value={filters.maxPrice}
	                onChange={handleFilterChange}
	                onFocus={handlePriceFocus}
	              />
	            </div>
	          )}
	        </div>*/}

	        {/* Filter by brand */}
	        <select name="brand" value={filters.brand} onChange={handleFilterChange}>
	          <option value="">Filter by Brand</option>
	          <option value="BrandX">BrandX</option>
	          <option value="BrandY">BrandY</option>
	          <option value="BrandZ">BrandZ</option>
	          <option value="ASITIS">ASITIS</option>
	        </select>

	        {/* Remove all filters */}
	        <button className="remove-filters" onClick={handleRemoveFilters}>
	          Remove Filters
	        </button>
	      </div>

	      <div className="all-product-grid">
	        {filteredProducts.map((product) => {
	          const { image, title, description, category, price, inStock } = product;

	          return (
	            <div className="all-product-card" key={product.id} onClick={() => handleClick(product.id)}>
	              <Link href={`/ProductView/${product.id}`}>
                  <div className="all-product-image-wrapper">
  	                <img src={image} alt={title} className="all-product-image" />
  	                <div className={`stock-status-badge ${inStock ? 'in-stock' : 'out-of-stock'}`}>
  	                  {inStock ? 'In Stock' : 'Out of Stock'}
  	                </div>
  	              </div>

  	              <div className="all-product-details">
  	                <h3 className="all-product-title">{title}</h3>
  	                <p className="all-product-description">{description}</p>
  	                <p className="all-product-category">{category}</p>
  	                <div className="all-product-price">
  	                  <span className="discounted-price">Rs {price}</span>
  	                </div>
  	              </div>
                </Link>
	            </div>
	          );
	        })}
	      </div>

	      {/* Page count and total products */}
	      <div className="pagination-info">
	        <p>
	          Showing {Math.min((page - 1) * 16 + 1, totalProducts)} - {Math.min(page * 16, totalProducts)} of {totalProducts} products
	        </p>
	      </div>

	      {/* Pagination */}
	      <div className="pagination">
	        <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
	        <button onClick={handleNextPage} disabled={filteredProducts.length < 16}>Next</button>
	      </div>
	    </div>
	    <Footer />
      <SubFooter />
	   </div>
  );
};

export default AllProduct;
