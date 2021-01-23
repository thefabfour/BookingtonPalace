
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import UserReviews from '../client/src/components/userReviews/UserReviews'

//basic render test, no data
describe('UserReviews', () => {
  it('renders the UserReviews component', () => {
    render(<UserReviews reviews={[]}/>);
    // screen.debug();

  });
});