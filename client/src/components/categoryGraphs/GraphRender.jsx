import React from 'react';
import classes from './Graph.module.css'


function GraphRender({rating}) {

  const percentage = (rating.rating/5)*100;

  function Filler(precentage){
    return <div className={classes.filler} style={{width:`${precentage}%`}}/>
  }

  const fill = Filler(percentage)

  return (
    <div className={classes.item}>
      <div className={classes.rating}>
        {rating.title}
      <span> 4.1 </span>
      <div className={classes.ratingBar}>
        {fill}
      </div>

    </div>
  </div>
  )

};

export default GraphRender;