import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Modal from '../modal/modal';
import './Shopping.css';

const ShoppingCart = ({ cartItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="shopping-cart">
     <button className="cart-button" onClick={() => setIsModalOpen(true)}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="badge">{totalItems}</span>
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Shopping Cart</h2>
        <p>Total Items: {totalItems}</p>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div>
                <span>{item.name}</span>
                <span>${item.price}</span>
                <span>Quantity: {item.quantity}</span>
              </div>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default ShoppingCart;
