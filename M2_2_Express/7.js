const express = require('express');
const app = express();

const { returnzero } = require('./archivo_7.js');
const { randomNum } = require('./random_7.js');

const zeros = returnzero();

app.get('/numbers', (req, res) => {
  let index = randomNum();
  zeros[index] += 1;
  res.send(zeros);
});

app.listen(3000);