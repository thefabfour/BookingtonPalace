import React from 'react';
import PropTypes from 'prop-types';
import ReviewRender from './ReviewRender';
import classes from './UserReviews.module.css';

// eslint-disable-next-line react/prop-types
export default function UserReviews({ reviews, dummyFunc }) {
  const itemsArr = reviews.slice(0, 6);
  const reviewsList = itemsArr.map((review, index) => (
    <ReviewRender
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      reviewBody={review.body}
      profilePicture={review.user_info.pictureUrl}
      firstName={review.user_info.firstName}
      entryDate={review.entry_date}
      userId={review.user_info.user_id}
      dummyFunc={dummyFunc}
    />
  ));

  return (
    <div className={classes.container}>
      {reviewsList}
    </div>
  );
}

UserReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
