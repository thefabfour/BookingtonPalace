import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import CategoryGraphs from '../client/src/components/categoryGraphs/CategoryGraphs'

describe('CategoryGraphs', () => {
  it('renders the CategoryGraphs component', () => {
    render(<CategoryGraphs ratings={[]}/>);
    screen.debug();
  });
});