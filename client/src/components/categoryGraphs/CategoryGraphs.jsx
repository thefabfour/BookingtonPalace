import React from 'react';
import classes from './Graph.module.css'
import GraphRender from './GraphRender'


function CategoryGraphs({ratings}) {

  return (

    <div className={classes.allGraphs}>
      {ratings.map( (data) => (
      <GraphRender rating={data}/>
      ))}
    </div>



  )
};

export default CategoryGraphs;