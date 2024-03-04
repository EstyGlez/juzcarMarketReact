import React, { useState } from 'react';
import axios from 'axios';

const ChatGPT = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        'http://localhost:3001/chat', // Asegúrate de que esta URL coincida con tu servidor Express.js
        {
          messages: [{ role: "user", content: question }],
        }
      );
      setResponse(result.data.choices[0].text.trim());
    } catch (error) {
      console.error('Error al obtener respuesta:', error);
    }
  };

  return (
    <div>
      <img
 src="https://i.pinimg.com/originals/d5/4e/61/d54e61233c804b66da89f9f06a9caae9.png"
 alt="Pitufo"
 style={{ width: '200px', height: '300px' }}
/>

      <p>Pregúntame lo que quieras saber de Júzcar:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
};

export default ChatGPT;

