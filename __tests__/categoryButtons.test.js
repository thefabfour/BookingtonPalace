
import React from 'react';
import { render, screen, fireEvent, queryByAttribute } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import CategoryControl from '../client/src/components/categoryButtons/CategoryControl'
import sampleData from '../__testData__/sampleData'



describe('categoryButtons', () => {

  //basic render test, no data
  test('renders the CategoryControl component', () => {
    render(<CategoryControl categories={[]} clicked={()=>{}}/>);
    // screen.debug();
  });




  test('handles clicks on category specific buttons', () => {
    const handleClick =jest.fn()

    render(<CategoryControl categories={sampleData.review_categories} clicked={handleClick}/>);
    fireEvent.click(screen.getByText('Central location 1'));
    expect(handleClick).toHaveBeenCalledTimes(1)
  // screen.debug();
  });

  test('handles clicks on show more/show less buttons', () => {
    const handleClick =jest.fn()

    render(<CategoryControl categories={sampleData.review_categories} clicked={handleClick}/>);
    fireEvent.click(screen.getByTestId("showMore"));
    expect(handleClick).toHaveBeenCalledTimes(1)
  // screen.debug();
  });

});



