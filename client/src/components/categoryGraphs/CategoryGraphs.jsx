import React from 'react';
import classes from './Graph.module.css'
import GraphRender from './GraphRender'


function CategoryGraphs({ratings}) {

  return (
    <div>
    <div className={classes.container}>
      {ratings.map( (data) => (
      <GraphRender rating={data}/>
      ))}
    </div>

  </div>

  )
};

export default CategoryGraphs;