import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importe o componente FontAwesomeIcon
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Importe o ícone específico do carrinho de compras do FontAwesome
import './Shopping.css';

const ShoppingCart = ({ cartItems }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart <FontAwesomeIcon icon={faShoppingCart} /></h2> {/* Use FontAwesomeIcon para adicionar o ícone do carrinho */}
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
    </div>
  );
};

export default ShoppingCart;
