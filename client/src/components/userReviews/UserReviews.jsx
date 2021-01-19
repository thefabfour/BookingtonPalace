import React from 'react';
import UserReviewsControl from './UserReviewsControl';


function UserReviews (props) {
  const leftArr = props.reviews.slice(1,4);
  const rightArr = props.reviews.slice(5,8);

  const leftList = leftArr.map((review) =>
  <UserReviewsControl review={review} />
  // <li> {review.body} </li>
  );

  const rightList = rightArr.map((review) =>
  <UserReviewsControl review={review}/>
  // <li> {review.body} </li>
  );

  return (
    <div>
      <ul> {leftList} </ul>
      <ul> {rightList} </ul>
    </div>
  )
}

export default UserReviews;