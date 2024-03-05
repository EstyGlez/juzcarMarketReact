import React from 'react';
import CardsForm from '../../cardsform/CardsForm.jsx';

const UserProfile = () => {
  // Recuperar el nombre de usuario del almacenamiento local
  const username = localStorage.getItem('username');

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    // Eliminar el nombre de usuario del almacenamiento local
    localStorage.removeItem('username');
    // Redirigir al usuario a la página de inicio de sesión o a donde prefieras
    // Aquí podrías utilizar react-router para la navegación
  };

  return (
    <div>
      {/* Mostrar un mensaje de bienvenida personalizado */}
      <h2>Bienvenid@ {username} a tu perfil de usuario</h2>
      {/* Agregar un botón de salida */}
      <button onClick={handleLogout}>Cerrar sesión</button>
      {/* Agregar el componente CardsForm */}
      <CardsForm />
    </div>
  );
};

export default UserProfile;

