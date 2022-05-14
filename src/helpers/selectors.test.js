import { getLongDate, getCurrentTime, getShortDate } from './selectors';

test('getLongDate returns a string', () => {
  const result = getLongDate(new Date('2022-05-12'));
  expect(typeof result).toBe('string');
});

test('getLongDate returns the correct long date', () => {
  const result = getLongDate(new Date(`2022-05-12 ${getCurrentTime()}`));
  expect(result).toBe('May 12, 2022');
});

test('getShortDate returns a string', () => {
  const result = getLongDate(new Date('Mon May 2, 2022 9:00:00'));
  expect(typeof result).toBe('string');
});

test('getShortDate returns the date with 2 digits', () => {
  const result = getShortDate(new Date('Mon May 2, 2022 13:00:00'));
  const day = result.slice(8, 10);
  expect(day).toBe('02');
});

test('getShortDate returns the month with 2 digits', () => {
  const result = getShortDate(new Date('Mon May 2, 2022 13:00:00'));
  const month = result.slice(5, 7);
  expect(month).toBe('05');
});

test('getShortDate returns the correct short date', () => {
  const result = getShortDate(new Date('Fri May 13, 2022 22:30:00'));
  expect(result).toBe('2022-05-13');
});