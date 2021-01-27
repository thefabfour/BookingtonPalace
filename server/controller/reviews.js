const Reviews = require('../../database/Reviews.js');

const reviews = (req, res) => {
  const { propertyId } = req.params;
  const query = Reviews.where({ listing_id: propertyId });
  query.findOne((err, userReviews) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(userReviews);
    }
  });
};

module.exports = reviews;
