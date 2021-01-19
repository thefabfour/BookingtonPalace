import React, { useState, useEffect } from 'react';
import LongReviewRender from './reviewRender/LongReviewRender.jsx'
import ShortReviewRender from './reviewRender/ShortReviewRender.jsx'

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
      <div>
        <LongReviewRender review={review}/>
      </div>
    );
  }

  return (
    <div>
      <ShortReviewRender review={review}/>
    </div>
  );
}

