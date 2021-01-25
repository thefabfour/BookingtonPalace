import React from 'react';
import classes from './ShowAll.module.css';


export default function ShowAllHeader({categorySelected, overallRatingAvg, numReviews}) {
  return (
    <div className={classes.modalHeader}>
      <div className={classes.starAndText}>
        <span className={classes.star}> &#9733;</span>
        <span className={classes.header}> {overallRatingAvg} ({overallRatingAvg}) </span>
      </div>
      <div className={classes.searchBarContainer}>
        <form className={classes.searchBar}>
          <input className={classes.searchBar} placeholder="Search reviews" />
        </form>
      </div>
    </div>
  );
}
