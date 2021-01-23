// make sure buttons render
// make sure buttons have correct information (title/count)
// make sure buttons handle click events
// make sure buttons render
// make sure buttons have correct information (title/count)
// make sure buttons handle click events

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import CategoryControl from '../client/src/components/categoryButtons/CategoryControl'
import sampleData from '../__testData__/sampleData'

//basic render test, no data
describe('CategoryControl', () => {
  it('renders the CategoryControl component', () => {
    render(<CategoryControl categories={[]}/>);
    screen.debug();
  });
});


describe('CategoryControl', () => {
  it('renders the CategoryControl component', () => {
    render(<CategoryControl categories={sampleData.review_categories}/>);
    screen.debug();
  });
});