
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import ShowAll from '../client/src/components/showAll/ShowAll'
import CategoryControl from '../client/src/components/categoryButtons/CategoryControl'
import UserReviews from '../client/src/components/userReviews/UserReviews'
import CategoryGraphs from '../client/src/components/categoryGraphs/CategoryGraphs'
import sampleData from '../__testData__/sampleData'


//basic render test, no data
describe('ShowAll', () => {
  it('renders the CategoryGraphs component', () => {
    render(
      <ShowAll show={true} close={false}>
      <CategoryGraphs ratings={[]} />
      <CategoryControl categories={[]} clicked={()=>{}}/>
      <UserReviews reviews={[]}/>
    </ShowAll>
    );
    // screen.debug();
  });
});