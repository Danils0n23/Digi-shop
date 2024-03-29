import React, { useEffect, useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsActive(true); // Ativa o modal quando ele for aberto
    } else {
      setTimeout(() => setIsActive(false), 300); // Desativa o modal após a animação de fechamento
    }
  }, [isOpen]);

  if (!isActive) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content active" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
