import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}), { virtual: true });

jest.mock('./Routes', () => () => <div>Routes Placeholder</div>);

import App from './App';

test('renders app header and routes container', () => {
  render(<App />);

  expect(screen.getByText(/my financial planner/i)).toBeInTheDocument();
  expect(screen.getByText(/routes placeholder/i)).toBeInTheDocument();
});
