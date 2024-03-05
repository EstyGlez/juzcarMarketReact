import React from 'react';
import CardsForm from '../../cardsform/CardsForm.jsx';

const UserProfile = () => {
  const username = localStorage.getItem('username');

  
  const handleLogout = () => {
   
    localStorage.removeItem('username');
    
  };

  return (
    <div>
      
      <h2>Bienvenid@ {username} a tu perfil de usuario</h2>
      
      <button onClick={handleLogout}>Cerrar sesión</button>
      
      <CardsForm />
    </div>
  );
};

export default UserProfile;

