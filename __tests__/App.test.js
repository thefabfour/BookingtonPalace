import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from '../client/src/components/App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);
    screen.debug();
  });
});