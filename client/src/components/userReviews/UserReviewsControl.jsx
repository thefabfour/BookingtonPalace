import React, { useState, useEffect } from 'react';
import LongReviewRender from './reviewRender/LongReviewRender';
import ShortReviewRender from './reviewRender/ShortReviewRender';

import classes from './UserReviews.module.css'

export default function UserReviewsControl({review}) {
  const [isLongReview, setIsLongReview] = useState(false);
  useEffect(() => {
    const reviewLength = review.body.split('').length;
    if (reviewLength > 180) {
      setIsLongReview(true);
    }
  }, []);
  if (isLongReview) {
    return (
      <div className={classes.children}>
        <LongReviewRender review={review} />
      </div>
    );
  }
  return (
    <div className={classes.children}>
      <ShortReviewRender review={review} />
    </div>
  );
}
