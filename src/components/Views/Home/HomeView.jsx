import React from 'react';
import Carousel1 from "../../Carousel/Carousel";
import './Homeview.css';

const HomeView = () => {
  const imageUrl = "https://i.postimg.cc/TPmwVpvy/bodybeb.jpg"; 
  const price = "20,00€"; 
  const title = "Body bebé pitufo"; 
  const shoppingCart = "src/assets/carritocard.svg";

  return (
    <div>
      <Carousel1/>
      <img src="https://i.postimg.cc/nrxdhNkC/alcalde-1-1.png" alt="" />
      <div className="product-card">
        <img src={imageUrl} alt="Producto" className="product-image" />
        <div className="product-title">{title}</div>
        <div className="product-info">
          <span className="product-price">{price}</span>
          <img src={shoppingCart} alt="Carrito" className="product-icon" /> 
        </div>
      </div>
    </div>
  );
}

export default HomeView;

