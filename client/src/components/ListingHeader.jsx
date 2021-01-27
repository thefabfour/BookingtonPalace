/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './App.module.css';

export default function ListingHeader({ overallRatingAvg, numReviews }) {
  return (
    <div className={classes.header}>
      <span className={classes.star}> &#9733; </span>
      <span className={classes.headerText}>
        {overallRatingAvg} ({numReviews} reviews)
      </span>
    </div>
  );
}

ListingHeader.propTypes = {
  overallRatingAvg: PropTypes.number.isRequired,
  numReviews: PropTypes.string.isRequired,
};
