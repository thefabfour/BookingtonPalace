import React from 'react';
import classes from '../UserReviews.module.css';
import moment from 'moment';

const ReviewsHeader = (props) => (
     <div className={classes.header}>
       <img className={classes.userPhoto} src={props.review.user_info.pictureUrl + "?dummy=8484744"} />
       <div className={classes.textContainer}>
       {props.review.user_info.firstName}

          <div className={classes.date}>
            {moment(props.review.entry_date).format("MMMM YYYY")}
          </div>
       </div>
    </div>
)

export default ReviewsHeader;