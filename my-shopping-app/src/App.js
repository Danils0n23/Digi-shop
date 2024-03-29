// src/App.js
import React, { useState } from 'react';
import './App.css';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import { getProducts } from './services/productService';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <div className="product-list">
        <h2>Products</h2>
        {getProducts().map((product, index) => (
          <Product key={index} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
}

export default App;
