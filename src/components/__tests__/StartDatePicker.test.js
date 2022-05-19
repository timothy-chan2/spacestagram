import { render, cleanup, screen } from '@testing-library/react';

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