const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
  res.send('News server is running...');
});

app.get('/categories', (req, res) => {
  res.send(categories);
});

app.get('/news', (req, res) => {
  res.send(news);
});

app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const newsByID = news.find(item => item._id === id);

  res.send(newsByID);
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});