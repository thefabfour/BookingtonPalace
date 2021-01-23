import React from 'react';
import PropTypes from 'prop-types';
import classes from './Graph.module.css';
import GraphRender from './GraphRender';

export default function CategoryGraphs({ ratings }) {
  return (
    <div className={classes.allGraphs}>
      {ratings.map((data) => (
        <GraphRender rating={data} />
      ))}
    </div>
  );
}

CategoryGraphs.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.object).isRequired,
};
