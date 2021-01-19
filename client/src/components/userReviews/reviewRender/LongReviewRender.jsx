// after 180 chars it is considered a long sentence
import React, { useState, useEffect } from 'react';


// export default function LongReviewRender({reviewBody}) {
//   const [isLongReview, setIsLongReview] = useState(false);
//   useEffect(() => {
//     const reviewLength = reviewBody.split('').length;
//     if (reviewLength > 180) {
//       setIsLongReview(true);
//     }
//   }, []);

//     const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

//     const handleShowMoreClick = () => {
//       setIsShowMoreClicked(!isShowMoreClicked);
//     };

//     if (isLongReview) {
//       let lengthList;

//       if (isShowMoreClicked) {
//         lengthList = categories;
//       } else {
//         lengthList = categories.slice(0, 4);
//       }

//       return (
//         <div>
//           <ButtonsDisplay categories={lengthList} />
//           <button type="button" onClick={handleShowMoreClick}> {isShowMoreClicked ? 'Show Less' : 'Show More'} </button>
//         </div>
//       );
//     }

//     return (
//       <div>
//         <ButtonsDisplay categories={categories} />
//       </div>
//     );
//   }


//   export default function categoryControl({ categories }) {
//     const [isLongList, setIsLongList] = useState(false);
//     useEffect(() => {
//       if (categories.length >= 5) {
//         setIsLongList(true);
//       }
//     }, []);

//     const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

//     const handleShowMoreClick = () => {
//       setIsShowMoreClicked(!isShowMoreClicked);
//     };

//     if (isLongList) {
//       let lengthList;

//       if (isShowMoreClicked) {
//         lengthList = categories;
//       } else {
//         lengthList = categories.slice(0, 4);
//       }
//       return (
//         <div>
//           <ButtonsDisplay categories={lengthList} />
//           <button type="button" onClick={handleShowMoreClick}> {isShowMoreClicked ? 'Show Less' : 'Show More'} </button>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <ButtonsDisplay categories={categories} />
//       </div>
//     );
//   }
