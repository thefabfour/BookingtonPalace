import React from 'react';
import PropTypes from 'prop-types';

import classes from './Buttons.module.css'

const ButtonsDisplay = (props) => (
  <div>
    <div className={classes.container}>
      {props.categories.map((category) =>
      <button type="button"  className= {classes.item}> {category.title}  {category.count} </button>

      )}
    </div>
  </div>
);


export default ButtonsDisplay;
