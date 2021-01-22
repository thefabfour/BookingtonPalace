import React from 'react';
import axios from 'axios';

import CategoryControl from '../categoryButtons/CategoryControl';
import CategoryGraphs from '../categoryGraphs/CategoryGraphs';
import UserReviews from '../userReviews/UserReviews';
import Backdrop from './backdrop/Backdrop'
import classes from './ShowAll.module.css'
import {BsX} from 'react-icons/bs'


export default function ShowAll({show, close, children}) {
  console.log(children)
  return (

    <>
      <Backdrop show={show} clicked={close}/>
      <div className={classes.modal}
      style={{transform: show ? 'translateY(0)' : 'translateY(-100vh)',opacity: show ? '1' : '0',}}>

                    <div className={classes.exitBar}>
                      <BsX type="button" onClick={close} className={classes.exitBtn}/>


                              <div className={classes.modalHeader}>
                                        <div className={classes.starAndText}>

                                            <span className={classes.star}> &#9733;</span>

                                            <span className={classes.header}> 4.83 (70 reviews) </span>
                                        </div>
                                        <div className={classes.searchBarContainer}>
                                          <form className={classes.searchBar}>
                                            <input  className={classes.searchBar} placeholder="Search reviews">
                                            </input>

                                          </form>
                                        </div>
                              </div>


                              <div className={classes.something}>
                                        <div className={classes.graphsAndButtonContainer}>
                                          {children[0]}
                                          {children[1]}
                                        </div>
                                        <div className={classes.reviewsContainer}>
                                          {children[2]}
                                        </div>
                              </div>
                    </div>
        </div>

    </>
  );
}