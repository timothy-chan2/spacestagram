import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Post from '../Post';

afterEach(cleanup);

it('renders without crashing', () => {
  render(<Post />);
});

it('renders the default like button and the ❤️ is not visible', () => {
  render(<Post />);
  expect(screen.getByText('Like')).toBeInTheDocument();
  expect(screen.queryByText('❤️')).not.toBeInTheDocument();
});

it('renders the unlike button and ❤️ after the like button is clicked', () => {
  render(<Post />);

  const button = screen.getByText('Like');
  fireEvent.click(button);

  expect(screen.getByText('Unlike')).toBeInTheDocument();
  expect(screen.getByText('❤️')).toBeInTheDocument();
});

it('renders the like button and removes the ❤️ after the unlike button is clicked', () => {
  render(<Post />);

  const button = screen.getByText('Unlike');
  fireEvent.click(button);

  expect(screen.getByText('Like')).toBeInTheDocument();
  expect(screen.queryByText('❤️')).not.toBeInTheDocument();
});