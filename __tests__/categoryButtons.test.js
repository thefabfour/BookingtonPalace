
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import CategoryControl from '../client/src/components/categoryButtons/CategoryControl'
import sampleData from '../__testData__/sampleData'



describe('categoryButtons', () => {

  //basic render test, no data
  test('renders the CategoryControl component', () => {
    render(<CategoryControl categories={[]}/>);
    // screen.debug();

    const buttonList = screen.getByTestId('ButtonList');
    expect(buttonList.length).toBe(0);
  });


});

