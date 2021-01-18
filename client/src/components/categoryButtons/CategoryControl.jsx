import React, { useState, useEffect } from 'react';
import ButtonsDisplay from './ButtonsDisplay.jsx'

  export default function categoryControl(props) {
    const [isLongList, setIsLongList] = useState(false);
    useEffect(() => {
      if (props.categories.length >= 5) {
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
        lengthList = props.categories;
      } else {
        lengthList = props.categories.slice(0, 4);
      }
      return (
        <div>
          <ButtonsDisplay categories={lengthList} />
          <button type="button" onClick={handleShowMoreClick}> {isShowMoreClicked ? 'Show Less' : 'Show More'} </button>
        </div>
      );
    }
    return (
      <div>
        <ButtonsDisplay categories={props.categories} />
      </div>
    );
  }
