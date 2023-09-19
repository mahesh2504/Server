const mongoose = require('mongoose');
const express = require('express');
const morgon = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const movie = require('./models/movieModel');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('hello');
});
app.post('/movie', (req, res) => {
  console.log(req.body);
  res.send(req.body);
  try {
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
mongoose
  .connect('mongodb+srv://maheshraju9381:Mongodb@cluster0.svxpsr5.mongodb.net/')
  .then(() => {
    console.log('connected to the mongodb');
    app.listen(3000, () => {
      console.log('server running on port 3000');
    });
  })
  .catch((error) => {
    console.log(error);
  });
