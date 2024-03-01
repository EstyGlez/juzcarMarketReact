import React from "react";

const ProductModal = ({ product, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} />
        <p>{product.price}</p>
        {product.description && <p>{product.description}</p>}
      </div>
    </div>
  );
};

export default ProductModal;
