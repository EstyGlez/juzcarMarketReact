import React, { useState } from 'react';
import './login.css';

function Login({ isOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación, por ejemplo, enviar los datos de inicio de sesión a tu servidor
    console.log('Iniciar sesión con:', { username, password });
    // Luego puedes cerrar el modal
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
              <label>
                Usuario:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </label>
              <label>
                Contraseña:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <button type="submit">Iniciar Sesión</button>
            </form>
            <button onClick={onClose}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
