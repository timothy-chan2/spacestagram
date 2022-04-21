import { useState } from 'react';
import DatePicker from 'sassy-datepicker';

const StartDatePicker = () => {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleDateSelect = (newDate) => {
    setDate(newDate);
    setVisible(false);
  };

  const togglePicker = () => setVisible(prev => !prev);
  
  return (
    <section>
      <button onClick={togglePicker}>Pick Start Date</button>
      <p>{date.toDateString()}</p>
      {visible ? (
        <DatePicker
          selected={date}
          onChange={handleDateSelect}
          maxDate={new Date()}
          className='calendar'
        />
      ) : null}
    </section>
  );
}

export default StartDatePicker;