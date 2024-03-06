import React, { useState, useEffect } from 'react';
import OpenAI from 'openai-api';

const openai = new OpenAI('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');

const JuzcarChatbot = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const fetchAnswer = async (questionText) => {
        const response = await openai.complete({
            engine: 'davinci',
            prompt: `¿Qué quieres saber sobre Júzcar? ${questionText}`,
            temperature: 0.7,
            max_tokens: 100,
        });
        setAnswer(response.choices[0].text);
    };

    const handleSubmit = async () => {
        await fetchAnswer(question);
    };

    useEffect(() => {
        const defaultQuestion = '¿Qué puedo hacer en Júzcar?';
        fetchAnswer(defaultQuestion);
    }, []);

    return (
        <div>
            <h1>¡Pregúntale a Pitufo!</h1>
            <img src="https://i.imgur.com/Sm5yT9F.png" alt="Pitufo con gafas" />
            <p>Pregunta todo lo que quieras saber sobre Júzcar:</p>
            <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
            <button onClick={handleSubmit}>Enviar pregunta</button>
            <p>Respuesta:</p>
            <p>{answer}</p>
        </div>
    );
};

export default JuzcarChatbot;


