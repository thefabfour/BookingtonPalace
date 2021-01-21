import React from 'react';
import ReviewHeader from './ReviewHeader';
import classes from '../UserReviews.module.css'

const ShortReviewRender = (props) => (
  <div className={classes.userReview}>
    <ReviewHeader review={props.review}/>
    <div>{props.review.body}</div>
  </div>
)

export default ShortReviewRender;