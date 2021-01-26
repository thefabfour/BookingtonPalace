const Reviews = require('../database/Reviews.js');

const reviews = (req, res) => {
  const { propertyId } = req.params;
  const query = Reviews.where({ listing_id: propertyId });
  query.findOne((err, reviews) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(reviews);
    }
  });
};

module.exports = reviews;
