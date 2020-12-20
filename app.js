const express = require('express');
const app = express();
const port = 3000;

app.get('/time', (req, res) => {
  res.send({time: new Date().toLocaleTimeString('tr')});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});