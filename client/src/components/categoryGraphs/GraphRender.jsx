import React from 'react';
import PropTypes from 'prop-types';
import classes from './Graph.module.css';

export default function GraphRender({ rating }) {
  const percentage = (rating.rating / 5) * 100;

  function Filler(precentage) {
    return <div className={classes.filler} style={{ width: `${precentage}%` }} />;
  }

  const fill = Filler(percentage);

  return (
    <div className={classes.container}>
      <div className={classes.indivGraph}>
        <div className={classes.ratingTitle}>{rating.title}</div>
        <div className={classes.pushRight}>
          <div className={classes.ratingBar}>
            <div className={classes.baseBar}>
              {fill}
            </div>
          </div>
          <span className={classes.ratingNum}> 4.1 </span>
        </div>
      </div>

    </div>
  );
}

GraphRender.propTypes = {
  rating: PropTypes.shape({
    title: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
