import React from 'react';
import './Product.css';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product bg-white rounded-lg shadow-md p-4">
      <img src={product.image} alt={product.name} className="w-full h-auto mb-4 rounded" />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-sm mb-2">{product.detail}</p>
      <p className="text-gray-700 mb-2">Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
