const express = require('express');
const dadJokeRouter = require('./routes/dadjoke');

const app = express();
const port = process.env.PORT || 3000;

// Use dad joke route handler
app.use('/api/dadjoke', dadJokeRouter);

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise rejection:', err);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

