import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('will grow lion', () => {
  render(<App />);
  const linkElement = screen.getByText(/Grow Lion/i);
  expect(linkElement).toBeInTheDocument();
});

test('if user clicks on tiger button, a tiger will be added to page', () => {
  render(<App />);
  const tigerElementsOnLoad = screen.getAllByText(/🐅/i);
  expect(tigerElementsOnLoad.length).toBe(1);

  const tigerButton = screen.getByText(/Tiger/i);

  fireEvent.click(tigerButton);
  const tigerElementAfterClick = screen.getAllByText(/🐅/i);
  expect(tigerElementAfterClick.length).toBe(2);
});

test('if user clicks on zebra button, a zebra will be added to the page', () => {
  render(<App />);
  const zebraElementsOnLoad = screen.getAllByText(/🦓/i);
  expect(zebraElementsOnLoad.length).toBe(1);

  const zebraButton = screen.getByText(/Zebra/i);

  fireEvent.click(zebraButton);
  const zebraElementAfterClick = screen.getAllByText(/🦓/i);
  expect(zebraElementAfterClick.length).toBe(2);
});