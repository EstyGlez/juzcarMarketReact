import React, { useState } from 'react';
import './Loginmodal.css';
import userService from '../../../userService.js';

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [secondLastName, setSecondLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const users = await userService.getAllUsers();
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        alert('Inicio de sesión exitoso');
        setShowModal(false);
      } else {
        alert('Nombre de usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error(error);
      alert('Ocurrió un error al iniciar sesión');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const newUserObj = {
      name,
      lastName,
      secondLastName,
      email, 
      phone, 
      username,
      password
    };
    try {
      await userService.addUser(newUserObj);
      alert('Usuario registrado exitosamente');
      setShowModal(false);
    } catch (error) {
      console.error(error);
      alert('Ocurrió un error al registrar el usuario');
    }
  };

  return (
    <div className="App">
      <button className="btn-user" onClick={() => setShowModal(true)}>
        <img src="src\assets\icon-user.svg" className="icon-user mx-3" alt="" />
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <img className='modal-photo'src="https://i.postimg.cc/bwY00vtc/Property-1-OIG3-removebg-preview-1-1.png" alt="" />
            <h2>{newUser ? "Registrarse" : "Iniciar Sesión"}</h2>
            <form onSubmit={newUser ? handleRegister : handleLogin}>
              {newUser && (
                <>
                  <label htmlFor="name">Nombre:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label htmlFor="lastName">Apellido:</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <label htmlFor="secondLastName">Segundo Apellido:</label>
                  <input
                    type="text"
                    id="secondLastName"
                    value={secondLastName}
                    onChange={(e) => setSecondLastName(e.target.value)}
                    required
                  />
                  <label htmlFor="phone">Teléfono:</label>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </>
              )}
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className='button-submit'>
                {newUser ? "Registrarse" : "Iniciar Sesión"}
              </button>
            </form>
            {!newUser && (
              <p>
                ¿Todavía no estás registrado?{" "}
                <button className='button-register' onClick={() => setNewUser(true)}>
                  Regístrate aquí
                </button>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginModal;
