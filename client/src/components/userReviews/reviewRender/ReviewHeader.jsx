import React from 'react';
import classes from '../UserReviews.module.css';
import moment from 'moment';

const ReviewsHeader = ({profilePicture, firstName, entryDate}) => (
     <div>
       <img className={classes.userPhoto} src={profilePicture + "?dummy=8484744"} />
       <div>{firstName}</div>
       <div> {moment(entryDate).format("MMMM YYYY")}</div>
    </div>
)

export default ReviewsHeader;