import React from 'react';
import PropTypes from 'prop-types';

import classes from './Buttons.module.css'

const ButtonsDisplay = (props) => (

    <div>
      {props.categories.map((category) =>
      <button type="button"  className= {classes.btn} id={category.title} onClick={props.clicked}> {category.title}  {category.count} </button>

      )}
    </div>

);


export default ButtonsDisplay;
