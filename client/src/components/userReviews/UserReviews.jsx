import React from 'react';
import UserReviewsControl from './UserReviewsControl';
import ReviewRender from './reviewRender/ReviewRender';
import classes from './UserReviews.module.css';

function UserReviews({reviews}) {
  const itemsArr = reviews.slice(1,7);
  const reviewsList = itemsArr.map((review, index) => <ReviewRender
  reviewBody={review.body}
  profilePicture= {review.user_info.pictureUrl}
  firstName = {review.user_info.firstName}
  entryDate= {review.entry_date}
  />);

  return (
    <div className={classes.container}>
      {reviewsList}
    </div>
  );
}

export default UserReviews;


