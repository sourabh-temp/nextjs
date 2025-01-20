"use client"
import React, { useState } from 'react';
import '@/styles/admin/Product.css';
import ProductForm from '@/components/admin/ProductForm';
import { ProductType } from '@/types/Product'; // Make sure to import ProductType

function Product() {
  const [products, setProducts] = useState<ProductType[]>([
    { id: 1, name: 'Laptop', price: 1000, stock: 'in-stock', description: 'A powerful laptop', discount: 10, category: 'Electronics', originalPrice: 1200},
    { id: 2, name: 'T-shirt', price: 25, stock: 'out-of-stock', description: 'Comfortable cotton t-shirt', discount: 5, category: 'Clothing', originalPrice: 30}
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductType | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [stockFilter, setStockFilter] = useState('all');

  // Filter products based on name and stock
  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStockFilter = stockFilter === 'all' || product.stock === stockFilter;
    return matchesSearchTerm && matchesStockFilter;
  });

  const openForm = (product: ProductType | null = null) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingProduct(null);
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
    setPopupMessage('Product deleted successfully.');
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleCreateOrUpdateProduct = (product: ProductType) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === product.id ? product : p));
      setPopupMessage('Product updated successfully.');
    } else {
      setProducts([...products, { ...product, id: products.length + 1 }]);
      setPopupMessage('Product created successfully.');
    }
    closeForm();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="content">
      <h2>Product Management</h2>

      <div className="product-controls">
        {/* Search by name */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        {/* Filter by stock status */}
        <select
          value={stockFilter}
          onChange={(e) => setStockFilter(e.target.value)}
          className="stock-filter"
        >
          <option value="all">All</option>
          <option value="in-stock">In Stock</option>
          <option value="out-of-stock">Out of Stock</option>
        </select>

        <button onClick={() => openForm()} className="create-product">Create Product</button>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
              <td>
                <button onClick={() => openForm(product)} className="edit-button">Edit</button>
                <button
                  onClick={() => product.id && handleDelete(product.id)} // Check for undefined id
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isFormOpen && (
        <ProductForm
          onClose={closeForm}
          onSubmit={handleCreateOrUpdateProduct}
          editingProduct={editingProduct}
        />
      )}

      {showPopup && <div className="popup">{popupMessage}</div>}
    </div>
  );
}

export default Product;
