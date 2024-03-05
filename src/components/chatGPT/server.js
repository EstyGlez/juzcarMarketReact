const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');
const axios = require('axios');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    const result = await openai.chat.completions.create({
      model: "gpt-4",
      messages,
    });
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
