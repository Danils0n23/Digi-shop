import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal/modal";
import "./Shopping.css";

const ShoppingCart = ({ cartItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Função para calcular o número total de itens no carrinho
    const calculateTotalItems = () => {
      // Verifica se cartItems não é nulo ou indefinido antes de fazer a redução
      if (cartItems && cartItems.length > 0) {
        const total = cartItems.reduce((total, item) => total + item.quantity, 0);
        setItemCount(total);
      } else {
        setItemCount(0); // Define como 0 se não houver itens no carrinho
      }
    };

    // Chama a função para calcular o número total de itens no carrinho
    calculateTotalItems();
  }, [cartItems]);

  return (
    <div className="shopping-cart">
      <button className="cart-button" onClick={() => setIsModalOpen(true)}>
        <FontAwesomeIcon icon={faShoppingCart} />
        {/* Exibe o número total de itens no carrinho */}
        <span className="item-count">{itemCount}</span>
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Shopping Cart</h2>
        <p>Total Items: {itemCount}</p>
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
