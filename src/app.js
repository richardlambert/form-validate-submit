const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: true }));

app.post('/auth/signup', (req, res) => {
  const { username, password } = req.body;
  return res.json({ username, password });
});

app.listen(3000, () => {
  console.log('listening at http://localhost:3000');
});
