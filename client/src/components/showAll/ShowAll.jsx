import React from 'react';
import axios from 'axios';

import CategoryControl from '../categoryButtons/CategoryControl';
import CategoryGraphs from '../categoryGraphs/CategoryGraphs';
import UserReviews from '../userReviews/UserReviews';
import Modal from '../modal/Modal';


function ShowAll({ratings, reviews, categories}) {

  return (
    <div>
      Hi from ShowAll!
      <CategoryGraphs ratings={ratings} />
      <CategoryControl categories={categories}/>
      <UserReviews reviews={reviews}/>

    </div>
  );
}

export default ShowAll;
