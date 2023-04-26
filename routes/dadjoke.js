const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://dad-jokes.p.rapidapi.com/random/joke', {
      headers: {
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
        'X-RapidAPI-Key': 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637',
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch dad joke' });
  }
});

module.exports = router;