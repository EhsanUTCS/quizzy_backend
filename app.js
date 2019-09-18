const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.status(200).send({
    message: 'Hello World',
  });
});

const PORT = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server Created on ${PORT}`));
