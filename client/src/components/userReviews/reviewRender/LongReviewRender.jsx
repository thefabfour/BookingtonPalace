
import React, { useState, useEffect } from 'react';
import ReviewHeader from './ReviewHeader';


export default function LongReviewRender({review}) {
    const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

    const handleShowMoreClick = () => {
      setIsShowMoreClicked(!isShowMoreClicked);
    };

      let lengthReview;

      if (isShowMoreClicked) {
        lengthReview = review.body;
      } else {
        lengthReview = review.body.slice(180) + "..."
      }

      return (
        <div>
              <ReviewHeader review={review}/>
              <div>{lengthReview}</div>
          <button type="button" onClick={handleShowMoreClick}> {isShowMoreClicked ? 'Show Less' : 'Show More'} </button>
        </div>
      );
    }



