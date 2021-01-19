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
  review_ratings: {
    number_reviews: Number,
    cleanliness_avg: Number,
    communication_avg: Number,
    checkIn_avg: Number,
    accuracy_avg: Number,
    lcoation_avg: Number,
    value_avg: Number,
  },
});

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;

