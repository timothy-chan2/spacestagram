const getLongDate = (defaultDate) => {
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'][defaultDate.getMonth()];
  const longDate = `${month} ${defaultDate.getDate() + 1}, ${defaultDate.getFullYear()}`;

  return longDate;
};

export { getLongDate };