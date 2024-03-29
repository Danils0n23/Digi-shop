import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="product bg-white rounded-lg shadow-md p-4 m-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <img src={product.image} alt={product.name} className="w-full h-auto mb-4 rounded" style={{ maxWidth: '100%' }} />
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        {product.hero && <p className="text-green-500 font-semibold mb-2">{product.hero}</p>}
        <p className="text-sm mb-2">{product.detail}</p>
        <p className="text-gray-700 mb-2">Price: ${product.price}</p>
        {product.info && <p className="text-gray-700 mb-2">{product.info}</p>}
        {product.offer && <p className="text-red-500 font-semibold mb-2">Offer: {product.offer}</p>}
        <button onClick={() => onAddToCart(product)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
