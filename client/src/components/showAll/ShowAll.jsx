import React from 'react';
import PropTypes from 'prop-types';
import { BsX } from 'react-icons/bs';
import Backdrop from './backdrop/Backdrop';
import ShowAllHeader from './ShowAllHeader';
import classes from './ShowAll.module.css';

export default function ShowAll({
  // eslint-disable-next-line react/prop-types
  show, close, categorySelected, numReviews, overallRatingAvg, children,
}) {
  // const [textSearched, setTextSearched] = useState('');

  // const handleSearch = (event) => {
  //   setTextSearched = event.target.value;
  // };

  let bannerSentence;

  // eslint-disable-next-line react/prop-types
  if (categorySelected.title) {
    // eslint-disable-next-line react/prop-types
    bannerSentence = `Showing all ${categorySelected.count} reviews with ${categorySelected.title}`;
  } else {
    bannerSentence = '';
  }

  return (
    <>
      <Backdrop show={show} clicked={close} />
      <div
        className={classes.modal}
        style={{ transform: show ? 'translateY(0)' : 'translateY(-100vh)', opacity: show ? '1' : '0' }}
      >
        <div className={classes.exitBar}>
          <BsX type="button" onClick={close} className={classes.exitBtn} />
          <ShowAllHeader
            // eslint-disable-next-line react/prop-types
            categorySelected={categorySelected.title}
            numReviews={numReviews}
            overallRatingAvg={overallRatingAvg}
          />
          <div className={classes.something}>
            <div className={classes.graphsAndButtonContainer}>
              {children[0]}
              {children[1]}
            </div>
            <div className={classes.reviewsContainer}>
              <div className={classes.listDescription}>
                {bannerSentence}
              </div>
              {children[2]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ShowAll.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
