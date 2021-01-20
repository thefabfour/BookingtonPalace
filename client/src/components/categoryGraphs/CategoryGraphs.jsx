import React from 'react';
import classes from './Graph.module.css'
import GraphRender from './GraphRender'


function CategoryGraphs({ratings}) {

//   const ratingsList = [];

// const keys = Object.keys(ratings);

// for(let i = 0; i < keys.length; i++) {
//   ratingsList.push({
//     title: keys[i],
//     number: ratings[keys[i]]
//   })
// }

  return (
    <div>
      {ratings.map( (data) => (
      <GraphRender rating={data}/>
      ))}
    </div>

  )
};

export default CategoryGraphs;