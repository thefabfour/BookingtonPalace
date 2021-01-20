import React from 'react';
import classes from './Graph.module.css'


function GraphRender({rating}) {

  const percentage = (rating.number/5)*100;

  function Filler(precentage){
    return <div className={classes.filler} style={{width:`${precentage}%`}}/>
  }

  const fill = Filler(percentage)

  return (
    <div>
     <div className={classes.ratingBar}>
       {rating.title}
       {fill}
     </div>
  </div>
  )

};

export default GraphRender;