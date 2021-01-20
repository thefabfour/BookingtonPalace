const mongoose = require('mongoose');
const db = require('./index.js');

const reviewsSchema = new mongoose.Schema({
  listing_id: Number,
  all_reviews: [{
    user_info: {
      user_id: Number,
      firstName: String,
      lastName: String,
      email: String,
      profileUrl: String,
      pictureUrl: String,
      password: String,
    },
    body: String,
    entry_date: String,
    category: String,
  }],
  review_categories: [{
    title: String,
    count: Number,
  }],
  review_ratings: [{
    title: String,
    rating: Number,
  }],
});

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;
