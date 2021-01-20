import React from 'react';
import UserReviewsControl from './UserReviewsControl';

function UserReviews({reviews}) {
  const leftArr = reviews.slice(1,4);
  const rightArr = reviews.slice(5,8);

  const leftList = leftArr.map((review) => <UserReviewsControl review={review} />);

  const rightList = rightArr.map((review) => <UserReviewsControl review={review} />);

  return (
    <div>
      <ul>
        {leftList}
      </ul>
      <ul>
        {rightList}
      </ul>
    </div>
  );
}

export default UserReviews;
