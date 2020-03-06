import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.doMock('./EmployeeTitleGenerator', () => {
  return EmployeeTitleGenerator = () => <div />;
});

test('renders title', () => {
  const { queryByText } = render(<App />);
  expect(queryByText('Employee Title Generator')).not.toBeNull();
});
