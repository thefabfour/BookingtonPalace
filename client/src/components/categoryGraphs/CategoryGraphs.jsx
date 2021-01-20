import React from 'react';
import classes from './Graph.module.css'
import GraphRender from './GraphRender'


function CategoryGraphs({ratings}) {

  return (
    <div>
      {ratings.map( (data) => (
      <GraphRender rating={data}/>
      ))}
    </div>

  )
};

export default CategoryGraphs;