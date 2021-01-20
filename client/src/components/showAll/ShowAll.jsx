import React from 'react';
import axios from 'axios';

import CategoryControl from '../categoryButtons/CategoryControl';
import CategoryGraphs from '../categoryGraphs/CategoryGraphs';
import UserReviews from '../userReviews/UserReviews';
import Backdrop from './backdrop/Backdrop'
import classes from './ShowAll.module.css'


export default function ShowAll({show, close, children}) {

  return (

    <>
      <Backdrop show={show} clicked={close}/>
      <div
        className={classes.modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    </>
  );
}