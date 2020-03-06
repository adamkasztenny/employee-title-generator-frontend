import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EmployeeTitleGenerator from './EmployeeTitleGenerator';
import * as faker from 'faker';

test('renders employee title', async () => {
  const title = faker.company.bs();
  setupMockAPICall(title);

  render(<EmployeeTitleGenerator />);

  checkContainsTitle(title);
  expect(fetch.mock.calls.length).toBe(1);
});

test('renders a new employee title on mouse click', async () => {
  const originalTitle = faker.company.bs();
  setupMockAPICall(originalTitle);

  render(<EmployeeTitleGenerator />);

  const newTitle = faker.hacker.noun();
  setupMockAPICall(newTitle);

  clickButton();
  checkContainsTitle(newTitle);
  expect(fetch.mock.calls.length).toBe(1);
});

function setupMockAPICall(title) {
  const mockJsonFunction = function () {
    return Promise.resolve({title: title});
  };
  fetch = jest.fn().mockImplementation(() => Promise.resolve({json: mockJsonFunction}))
}

async function checkContainsTitle(title) {
  const renderedTitle = await screen.findByText(title);
  expect(renderedTitle.innerHTML).toMatch(title);
}

function clickButton() {
  const buttonText = 'Generate a new title';
  const button = screen.getByText(buttonText);
  fireEvent.click(button);
}
