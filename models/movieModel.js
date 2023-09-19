const { Double } = require('mongodb');
const mongoose = require('mongoose');
const movieSchema = mongoose.Schema({
  age_certification: {
    type: String,
  },
  description: {
    type: String,
  },
  genres: {
    type: Array,
  },
  id: {
    type: String,
  },
  imdb_score: {
    type: Double,
  },
  production_countries: {
    type: Array,
  },
  release_year: {
    type: Number,
  },
  runtime: {
    type: Number,
  },
  title: {
    type: String,
  },
  type: {
    type: String,
  },
});

const movie = mongoose.model('movie', movieSchema);
module.exports = movie;
