import { getLongDate, getCurrentTime } from './selectors';

test('getLongDate returns a string', () => {
  const result = getLongDate(new Date('2022-05-12'));
  expect(typeof result).toBe('string');
});

test('getLongDate returns the correct long date', () => {
  const result = getLongDate(new Date(`2022-05-12 ${getCurrentTime()}`));
  expect(result).toBe('May 12, 2022');
});