import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Post from '../Post';

afterEach(cleanup);

it('renders without crashing', () => {
  render(<Post />);
});

it('renders the default like button', () => {
  render(<Post />);
  expect(screen.getByText('Like')).toBeInTheDocument();
});

it('renders the unlike button after the like button is clicked', () => {
  render(<Post />);

  const button = screen.getByText('Like');
  fireEvent.click(button);

  expect(screen.getByText('Unlike')).toBeInTheDocument();
});

it('renders the like button after the unlike button is clicked', () => {
  render(<Post />);

  const button = screen.getByText('Unlike');
  fireEvent.click(button);

  expect(screen.getByText('Like')).toBeInTheDocument();
});