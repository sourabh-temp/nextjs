"use client"
import React, { useState } from 'react';
import '@/styles/CartPage.css'; // Include the styles for the cart page
import { FaTrash } from 'react-icons/fa'; // Trash icon for removing items
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubFooter from '@/components/SubFooter'

const Page = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Protein Powder',
      price: 29.99,
      quantity: 2,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Vitamins Pack',
      price: 19.99,
      quantity: 1,
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleProceedToPurchase = () => {
    // Logic to proceed to checkout (e.g., navigate to checkout page)
    alert('Proceeding to checkout');
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div> 
      <Header />
        <div className="cart-page">
          <h1>Your Cart</h1>
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">Rs {item.price.toFixed(2)} x {item.quantity}</p>
                    <p className="cart-item-subtotal">
                      Subtotal: Rs {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="cart-item-remove" onClick={() => handleRemoveItem(item.id)}>
                    <FaTrash />
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <p>Total: Rs {calculateTotal()}</p>
            </div>
            <button className="cart-purchase-btn" onClick={handleProceedToPurchase}>
              Proceed to Purchase
            </button>
          </div>
        </div>
      <Footer />
    <SubFooter />
    </div>
  );
};

export default Page;
