import React from 'react';
import ReviewHeader from './ReviewHeader';


const ShortReviewRender = (props) => (
  <div>
    <ReviewHeader review={props.review}/>
    <div>{props.review.body}</div>
  </div>
)

export default ShortReviewRender;