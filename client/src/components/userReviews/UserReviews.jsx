import React from 'react';
import PropTypes from 'prop-types';
import ReviewRender from './ReviewRender';
import classes from './UserReviews.module.css';

export default function UserReviews({ reviews }) {
  const itemsArr = reviews.slice(0, 6);
  const reviewsList = itemsArr.map((review) => (
    <ReviewRender
      reviewBody={review.body}
      profilePicture={review.user_info.pictureUrl}
      firstName={review.user_info.firstName}
      entryDate={review.entry_date}
    />
  ));

  return (
    <div className={classes.container}>
      {reviewsList}
    </div>
  );
}

UserReviews.propTypes = {
  reviews: PropTypes.shape({
    slice: PropTypes.func.isRequired,
    profilePicture: PropTypes.string.isRequired,
    reviewBody: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    entryDate: PropTypes.string.isRequired,
  }).isRequired,
};
