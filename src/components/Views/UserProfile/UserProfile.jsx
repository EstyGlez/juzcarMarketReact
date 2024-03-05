import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardsForm from '../../cardsform/CardsForm.jsx';
import './UserProfile.css'

const UserProfile = () => {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleUploadProductClick = () => {
    localStorage.removeItem('username');
    navigate('/homeView'); 
  };

  return (
    <div>
      <h2>Bienvenid@ {username} a tu perfil de usuario</h2>
      <button className='btn-log-out' onClick={handleUploadProductClick}>Cerrar sesión</button>
      <CardsForm />
    </div>
  );
};

export default UserProfile;
