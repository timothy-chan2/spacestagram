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