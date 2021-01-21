// preparation for refactoring



import React, { useState, useEffect } from 'react';
import ReviewHeader from './ReviewHeader';
import classes from '../UserReviews.module.css';
import moment from 'moment';

export default function ReviewRender({reviewBody, profilePicture, firstName, entryDate}){

  const [isLongReview, setIsLongReview] = useState(false);
  useEffect(() => {
    const reviewLength = reviewBody.split('').length;
    if (reviewLength > 180) {
      setIsLongReview(true);
    }
  }, []);

  const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

  const handleShowMoreClick = () => {
  setIsShowMoreClicked(!isShowMoreClicked);
};


  function LongReview({lengthReview}) {
      return (
      <div>
           {lengthReview}
        <button type="button" onClick={handleShowMoreClick}> {isShowMoreClicked ? 'read less' : 'read more'} </button>
      </div>
      )
  }

  function ShortReview ({lengthReview}){
    return (
      <div>
        {lengthReview}
      </div>
    )
  }

    let lengthReview;
    let reviewElem;

    if (isLongReview) {
      if (isShowMoreClicked) {
        lengthReview = reviewBody;
      } else {
        lengthReview = reviewBody.slice(0,180) + "..."
      }
      reviewElem = <LongReview lengthReview={lengthReview} />

    } else {
      lengthReview= reviewBody;
      reviewElem = <ShortReview lengthReview={lengthReview} />
    }



  return (
    <div>
      <ReviewHeader profilePicture={profilePicture} firstName={firstName} entryDate={entryDate} />
      {reviewElem}
    </div>
  )
}



