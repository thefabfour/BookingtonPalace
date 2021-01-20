import React, { useState, useEffect } from 'react';
import classes from '../UserReviews.module.css';
import moment from 'moment';

export default function ReviewRender({profilePicture, firstName, entryDate}){

  const handleShowMoreClick = () => {
  setIsShowMoreClicked(!isShowMoreClicked);
};

  let lengthReview;

  if (isShowMoreClicked) {
    lengthReview = review.body;
  } else {
    lengthReview = review.body.slice(0,180) + "..."
  }


  function Header=() {
    return(
      <div>
       <img className={classes.userPhoto} src={profilePicture}/>
       <div>{firstName}</div>
       <div>
         {moment(entryDate).format("MMMM YYYY")}
      </div>
    </div>
    )
  }

  function LongReview=({}) {
      return (
      <div>
            <ReviewHeader review={review}/>
            <div>{lengthReview}</div>
        <button type="button" onClick={handleShowMoreClick}> {isShowMoreClicked ? 'read less' : 'read more'} </button>
      </div>
      )
  }

  function ShortReviewRender ({}){
    return (
      <div>
        <ReviewHeader review={props.review}/>
        <div>{props.review.body}</div>
      </div>
    )
  }

// export default ReviewsHeader;


// export default function LongReviewRender({review}) {
//   const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

//   const handleShowMoreClick = () => {
//     setIsShowMoreClicked(!isShowMoreClicked);
//   };

//     let lengthReview;

//     if (isShowMoreClicked) {
//       lengthReview = review.body;
//     } else {
//       lengthReview = review.body.slice(0,180) + "..."
//     }

//     return (
//       <div>
//             <ReviewHeader review={review}/>
//             <div>{lengthReview}</div>
//         <button type="button" onClick={handleShowMoreClick}> {isShowMoreClicked ? 'read less' : 'read more'} </button>
//       </div>
//     );
//   }