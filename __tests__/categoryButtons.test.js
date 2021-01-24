
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

  test('show change from show more to show fewer', () => {
    const handleClick =jest.fn()

    render(<CategoryControl categories={sampleData.review_categories} clicked={handleClick}/>);
    const buttonToClick = screen.getByTestId("showMore")
    fireEvent.click(buttonToClick);
    expect(buttonToClick).toHaveTextContent('Show fewer')
  // screen.debug();
  });

});



