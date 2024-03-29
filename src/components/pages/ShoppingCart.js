import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal/modal";
import "./Shopping.css";

const ShoppingCart = ({ cartItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="shopping-cart">
      <button className="cart-button" onClick={() => setIsModalOpen(true)}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div>
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default ShoppingCart;
