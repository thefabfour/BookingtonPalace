// below is code for users
const mongoose = require('mongoose');
const db = require('./index.js');

const usersSchema = new mongoose.Schema({
  user_id: Number,
  firstName: String,
  lastName: String,
  email: String,
  profileUrl: String,
  pictureUrl: String,
  password: String,
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
