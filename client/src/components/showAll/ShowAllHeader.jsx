/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import classes from './ShowAll.module.css';

// eslint-disable-next-line react/prop-types
export default function ShowAllHeader({ overallRatingAvg, numReviews, onChange }) {
  return (
    <div className={classes.modalHeader}>
      <div className={classes.starAndText}>
        <span className={classes.star}> &#9733;</span>
        <span className={classes.header}> {overallRatingAvg} ({numReviews}) </span>
      </div>
      <div className={classes.searchBarContainer} onChange={onChange}>
        <form className={classes.searchBar}>
          <input className={classes.searchBar} placeholder="Search reviews" />
        </form>
      </div>
    </div>
  );
}
