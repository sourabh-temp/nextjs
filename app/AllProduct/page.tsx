"use client"
import React, { useState } from 'react';
import '@/styles/AllProduct.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubFooter from '@/components/SubFooter'
import Link from 'next/link';
import Image from 'next/image';

const AllProduct = () => {
  const [filters, setFilters] = useState({
    availability: '',
    minPrice: 0,
    maxPrice: 10000,
    brand: '',
  });

  const [page, setPage] = useState(1);

  const products = [
    {
      id: 1,
      image: '/logo.webp',
      title: 'Protein',
      description: 'AS-IT-IS ATOM Whey Protein - 1 kg, 27GM Protein',
      category: 'ASITIS NUTRITION',
      price: 1790.00,
      brand: 'ASITIS',
      inStock: true
    },
    {
      id: 2,
      image: '/logo.webp',
      title: 'Gainer',
      description: 'Portable bluetooth speaker with 10 hours of battery life.',
      category: 'Electronics',
      price: 60,
      brand: 'BrandX',
      inStock: false
    },
    {
      id: 3,
      image: '/logo.webp',
      title: 'Creatine',
      description: 'Fitness tracker with heart rate monitor and GPS.',
      category: 'Wearables',
      price: 100,
      brand: 'BrandY',
      inStock: true
    },
    {
      id: 4,
      image: '/logo.webp',
      title: 'Multivitamin',
      description: 'Ergonomic mouse designed for gaming with customizable DPI.',
      category: 'Accessories',
      price: 35,
      brand: 'BrandZ',
      inStock: true
    },
    {
      id: 5,
      image: '/logo.webp',
      title: 'PreWorkout',
      description: 'Adjustable laptop stand for better posture and ventilation.',
      category: 'Accessories',
      price: 25,
      brand: 'BrandX',
      inStock: true
    },
    {
      id: 6,
      image: '/logo.webp',
      title: 'AminoAcid',
      description: 'Compact wireless keyboard with a long battery life.',
      category: 'Accessories',
      price: 45,
      brand: 'BrandY',
      inStock: false
    },
    {
      id: 7,
      image: '/logo.webp',
      title: 'Protein',
      description: 'AS-IT-IS ATOM Whey Protein - 1 kg, 27GM Protein',
      category: 'ASITIS NUTRITION',
      price: 1790.00,
      brand: 'ASITIS',
      inStock: true
    },
    {
      id: 8,
      image: '/logo.webp',
      title: 'Gainer',
      description: 'Portable bluetooth speaker with 10 hours of battery life.',
      category: 'Electronics',
      price: 60,
      brand: 'BrandX',
      inStock: false
    },
    {
      id: 9,
      image: '/logo.webp',
      title: 'Creatine',
      description: 'Fitness tracker with heart rate monitor and GPS.',
      category: 'Wearables',
      price: 100,
      brand: 'BrandY',
      inStock: true
    },
    {
      id: 10,
      image: '/logo.webp',
      title: 'Multivitamin',
      description: 'Ergonomic mouse designed for gaming with customizable DPI.',
      category: 'Accessories',
      price: 35,
      brand: 'BrandZ',
      inStock: true
    },
    {
      id: 11,
      image: '/logo.webp',
      title: 'PreWorkout',
      description: 'Adjustable laptop stand for better posture and ventilation.',
      category: 'Accessories',
      price: 25,
      brand: 'BrandX',
      inStock: true
    },
    {
      id: 12,
      image: '/logo.webp',
      title: 'AminoAcid',
      description: 'Compact wireless keyboard with a long battery life.',
      category: 'Accessories',
      price: 45,
      brand: 'BrandY',
      inStock: false
    },
    {
      id: 13,
      image: '/logo.webp',
      title: 'Protein',
      description: 'AS-IT-IS ATOM Whey Protein - 1 kg, 27GM Protein',
      category: 'ASITIS NUTRITION',
      price: 1790.00,
      brand: 'ASITIS',
      inStock: true
    },
    {
      id: 14,
      image: '/logo.webp',
      title: 'Gainer',
      description: 'Portable bluetooth speaker with 10 hours of battery life.',
      category: 'Electronics',
      price: 60,
      brand: 'BrandX',
      inStock: false
    },
    {
      id: 15,
      image: '/logo.webp',
      title: 'Creatine',
      description: 'Fitness tracker with heart rate monitor and GPS.',
      category: 'Wearables',
      price: 100,
      brand: 'BrandY',
      inStock: true
    },
    {
      id: 16,
      image: '/logo.webp',
      title: 'Multivitamin',
      description: 'Ergonomic mouse designed for gaming with customizable DPI.',
      category: 'Accessories',
      price: 35,
      brand: 'BrandZ',
      inStock: true
    },
    {
      id: 17,
      image: '/logo.webp',
      title: 'PreWorkout',
      description: 'Adjustable laptop stand for better posture and ventilation.',
      category: 'Accessories',
      price: 25,
      brand: 'BrandX',
      inStock: true
    },
    {
      id: 18,
      image: '/logo.webp',
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
    .slice((page - 1) * 16, page * 16);

  const totalProducts = products.filter(product =>
    (filters.availability ? product.inStock === (filters.availability === 'in-stock') : true) &&
    (product.price >= filters.minPrice && product.price <= filters.maxPrice) &&
    (filters.brand ? product.brand.toLowerCase().includes(filters.brand.toLowerCase()) : true)
  ).length;

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

	        <select name="brand" value={filters.brand} onChange={handleFilterChange}>
	          <option value="">Filter by Brand</option>
	          <option value="BrandX">BrandX</option>
	          <option value="BrandY">BrandY</option>
	          <option value="BrandZ">BrandZ</option>
	          <option value="ASITIS">ASITIS</option>
	        </select>

	        <button className="remove-filters" onClick={handleRemoveFilters}>
	          Remove Filters
	        </button>
	      </div>

	      <div className="all-product-grid">
	        {filteredProducts.map((product) => {
	          const { image, title, description, category, price, inStock } = product;

	          return (
	            <div className="all-product-card" key={product.id}>
	              <Link href={`/ProductView/${product.id}`}>
                  <div className="all-product-image-wrapper">
  	                <Image src={image} alt={title} width={300} height={200} layout="responsive" className="all-product-image" />
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

	      <div className="pagination-info">
	        <p>
	          Showing {Math.min((page - 1) * 16 + 1, totalProducts)} - {Math.min(page * 16, totalProducts)} of {totalProducts} products
	        </p>
	      </div>

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
