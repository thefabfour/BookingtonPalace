import React, { useState, useEffect } from 'react';
import ButtonsDisplay from './ButtonsDisplay.jsx'
import classes from './Buttons.module.css'

export default function categoryControl({ categories }) {
  const [isLongList, setIsLongList] = useState(false);
  useEffect(() => {
    if (categories.length >= 5) {
      setIsLongList(true);
    }
  }, []);

  const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

  const handleShowMoreClick = () => {
    setIsShowMoreClicked(!isShowMoreClicked);
  };

  if (isLongList) {
    let lengthList;

    if (isShowMoreClicked) {
      lengthList = categories;
    } else {
      lengthList = categories.slice(0, 4);
    }
    return (
      <div className={classes.container}>
        <ButtonsDisplay  categories={lengthList} />
        <button className={classes.showMore} type="button" onClick={handleShowMoreClick}> {isShowMoreClicked ? 'Show fewer ' : 'Show more'} </button>
      </div>
    );
  }
  return (
    <div>
      <ButtonsDisplay categories={categories} />
    </div>
  );
}