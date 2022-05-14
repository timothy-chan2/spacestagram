import { getLongDate, getCurrentTime, getShortDate } from './selectors';

test('getLongDate returns a string', () => {
  const result = getLongDate(new Date('2022-05-12'));
  expect(typeof result).toBe('string');
});

test('getLongDate returns the correct long date', () => {
  const result = getLongDate(new Date(`2022-05-12 ${getCurrentTime()}`));
  expect(result).toBe('May 12, 2022');
});

test('getShortDate returns the correct short date', () => {
  const result = getShortDate(new Date('Fri May 13, 2022 22:36:00'));
  expect(result).toBe('2022-05-13');
});