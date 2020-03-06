import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeTitleGenerator from './EmployeeTitleGenerator';
import * as faker from 'faker';

test('renders employee title', async () => {
  const title = faker.company.bs();
  setupMockAPICall(title);

  render(<EmployeeTitleGenerator />);

  checkDisplaysTitle(title);
  expect(fetch.mock.calls.length).toBe(1);
});

test('renders a new employee title on button click', async () => {
  const originalTitle = faker.company.bs();
  setupMockAPICall(originalTitle);

  render(<EmployeeTitleGenerator />);

  const newTitle = faker.hacker.noun();
  setupMockAPICall(newTitle);

  clickButton();
  checkDisplaysTitle(newTitle);
  expect(fetch.mock.calls.length).toBe(1);
});

function setupMockAPICall(title) {
  const mockJsonFunction = function () {
    return Promise.resolve({title: title});
  };
  fetch = jest.fn().mockImplementation(() => Promise.resolve({json: mockJsonFunction}))
}

async function checkDisplaysTitle(title) {
  const renderedTitle = await screen.findByText(title);
  expect(renderedTitle.innerHTML).toMatch(title);
}

function clickButton() {
  const buttonText = 'Generate a new title';
  const button = screen.getByText(buttonText);
  fireEvent.click(button);
}
