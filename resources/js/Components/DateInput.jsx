// DateInput.jsx

import React, { useState, forwardRef } from 'react';;
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = forwardRef((props, ref) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    const currentDate = new Date();
    if (date >= currentDate) {
      setSelectedDate(date);
    }
  };

  return (
    <div>
      <DatePicker
        id="date"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        minDate={new Date()}
        className="border p-2 mt-2 rounded-lg"
        ref={(datepicker) => {
          if (datepicker) ref.current = datepicker.input;
        }}
      />
    </div>
  );
});

export default DateInput;
