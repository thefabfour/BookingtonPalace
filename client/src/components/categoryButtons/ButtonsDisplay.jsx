import React from 'react';
import PropTypes from 'prop-types';

import classes from './Buttons.module.css';

export default function ButtonsDisplay({ categories, clicked }) {
  return (
    <div>
      {categories.map((category) => (
        <button type="button" className={classes.btn} id={category.title} onClick={clicked}>
          {category.title}
          {category.count}
        </button>
      ))}
    </div>
  );
}

ButtonsDisplay.propTypes = {
  categories: PropTypes.shape({
    title: PropTypes.string,
    count: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
  clicked: PropTypes.func.isRequired,
};
