
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import UserReviews from '../client/src/components/userReviews/UserReviews'

//basic render test, no data
describe('UserReviews', () => {

  // render component
  test('renders the UserReviews component', () => {
    render(<UserReviews reviews={[]}/>);
    // screen.debug();
  });


  //  // generates picture, body, name, and data
  //  test('renders the UserReviews component', () => {
  //   render(<UserReviews reviews={[]}/>);
  //   // screen.debug();
  // });

  //  // read more button clicks
  //  test('renders the UserReviews component', () => {
  //   render(<UserReviews reviews={[]}/>);
  //   // screen.debug();
  // });
});