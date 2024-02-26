import React from 'react';
import Carousel1 from "../../Carousel/Carousel";
import './Homeview.css';

const HomeView = () => {
  const imageUrl = "https://i.postimg.cc/TPmwVpvy/bodybeb.jpg"; 
  const price = "20,00€"; 
  const title = "Body bebé pitufo"; 
  const shoppingCart = "src/assets/carritocard.svg";

  return (
    <div className='home-view'>
        <img className='home-view-photo' src="https://i.postimg.cc/Ss5SPGVD/pisajej-zcar-1-1.png" alt="" />

        <h1 className='home-view-title'>Colaboradores</h1>
      <Carousel1/> 
      <h1 className='home-view-title'>Nuestros productos</h1>
      <div className="product-card">
        <img src={imageUrl} alt="Producto" className="product-image" />
        <div className="product-title">{title}</div>
        <div className="product-info">
          <span className="product-price">{price}</span>
          <img src={shoppingCart} alt="Carrito" className="product-icon" /> 
        </div>
      </div>
      
      <img className='photo-pitufos'src="https://i.postimg.cc/fW2TtMNY/pngwing-com-1.png" alt="" />
       <img className='photo-mayor' src="https://i.postimg.cc/nrxdhNkC/alcalde-1-1.png" alt="" />
       
    </div>
  );
}

export default HomeView;

