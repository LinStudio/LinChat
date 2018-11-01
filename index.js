
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('linchat is on!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('App listening on port 3000!');
});
