import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { queryByText } = render(<App />);
  expect(queryByText('Employee Title Generator')).not.toBeNull();
});
