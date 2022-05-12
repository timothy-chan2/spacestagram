import { getLongDate } from './selectors';

test('getLongDate returns a string', () => {
  const result = getLongDate(new Date('2022-05-12'));
  expect(typeof result).toBe('string');
});