import { useState } from 'react';
import DatePicker from 'sassy-datepicker';

import { getLongDate } from '../helpers/selectors';

const StartDatePicker = (props) => {
  const [visible, setVisible] = useState(false);

  let tempDate = new Date(props.date);
  tempDate.setDate(tempDate.getDate() - 1);
  const longStartDate = getLongDate(tempDate);

  const handleDateSelect = (newDate) => {
    props.setDate(newDate);
    setVisible(false);
  };

  const togglePicker = () => setVisible(prev => !prev);
  
  return (
    <section>
      <button
        onClick={togglePicker}
        className='start-date-picker-btn'
      >
        Pick Start Date
      </button>
      <p className='start-date-selected'>{longStartDate}</p>
      {visible ? (
        <DatePicker
          selected={props.date}
          onChange={handleDateSelect}
          maxDate={new Date()}
          className='calendar'
        />
      ) : null}
    </section>
  );
}

export default StartDatePicker;