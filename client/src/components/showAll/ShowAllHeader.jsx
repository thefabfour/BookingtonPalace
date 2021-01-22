import React from 'react';
import classes from './ShowAll.module.css'

export default function ShowAllHeader() {
  return (
    <div className={classes.modalHeader}>
      <div className={classes.starAndText}>
        <span className={classes.star}> &#9733;</span>
        <span className={classes.header}> 4.83 (70 reviews) </span>
      </div>
      <div className={classes.searchBarContainer}>
        <form className={classes.searchBar}>
          <input className={classes.searchBar} placeholder="Search reviews"></input>
        </form>
      </div>
    </div>
  );
}
