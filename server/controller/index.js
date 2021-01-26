const reviews = require('./reviews');

module.exports = {
  getReviews: (req, res) => reviews(req, res),
};
