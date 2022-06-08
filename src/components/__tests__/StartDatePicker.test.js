import { render, cleanup, fireEvent, screen } from '@testing-library/react';

import StartDatePicker from '../StartDatePicker';
import { getCurrentTime } from '../../helpers/selectors';

afterEach(cleanup);

it('renders without crashing', () => {
  render(<StartDatePicker />);
});

it('renders "Pictures from May 15, 2022 onward" when May 15 is picked as the start date' , () => {
  render(<StartDatePicker date={new Date(`Sun May 15 2022 ${getCurrentTime()}`)} />);
  expect(screen.getByText('Pictures from May 15, 2022 onward')).toBeInTheDocument();
});

it('does not render the date picker calendar when the page first loads', () => {
  render(<StartDatePicker />);

  expect(screen.queryByTestId('calendar')).toBeNull();
});

it('renders the date picker calendar after Pick Start Date button is pressed', () => {
  render(<StartDatePicker />);

  const button = screen.getByText('Pick Start Date');
  fireEvent.click(button);

  expect(screen.getByTestId('calendar')).toBeTruthy();
});