"use client"
import React, { useState } from 'react';
import { ProductType } from '@/types/Product'; // Import ProductType
import '@/styles/admin/ProductForm.css';

interface ProductFormProps {
  onSubmit: (product: ProductType) => void;
  onClose: () => void;
  editingProduct: ProductType | null;
}

function ProductForm({ onSubmit, onClose, editingProduct }: ProductFormProps) {
  // Set the initial state with proper type, ensuring id is included
  const [product, setProduct] = useState<ProductType>(
    editingProduct || {
      id: 0, // Default id
      name: '',
      price: 0,
      stock: 'in-stock',
      description: '',
      discount: 0,
      category: 'Electronics',
      originalPrice: 0,
    }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    // Check if the element is an HTMLInputElement and if it's a checkbox
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setProduct({
      ...product,
      [name]: newValue,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(product); // Call onSubmit with the product state
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{editingProduct ? 'Edit Product' : 'Create Product'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Stock</label>
            <select name="stock" value={product.stock} onChange={handleInputChange}>
              <option value="in-stock">In Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={product.discount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select name="category" value={product.category} onChange={handleInputChange}>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Home">Home</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <div className="form-group">
            <label>Original Price</label>
            <input
              type="number"
              name="originalPrice"
              value={product.originalPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="modal-actions">
            <button type="submit" className="btn-primary">{editingProduct ? 'Update Product' : 'Create Product'}</button>
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
