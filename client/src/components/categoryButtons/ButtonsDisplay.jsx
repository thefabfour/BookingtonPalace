import React from 'react';

const ButtonsDisplay = (props) => (
  <div>
    <div>
      {props.categories.map((category) =>
      <button> {category.title}  {category.count} </button>
      )}
    </div>
  </div>
);

export default ButtonsDisplay;
