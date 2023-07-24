import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateNavBar2 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
    setEndDate(new Date(date.getTime() + 6 * 24 * 60 * 60 * 1000)); // Set the end date to 6 days after the selected start date
  };

  return (
    <div className="date-nav">
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        selectsRange
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()} // Prevent selecting dates before today
        maxDate={new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000)} // Allow selecting dates within a 7-day range
        dateFormat="dd MMM yyyy"
        inline
      />
    </div>
  );
};

export default DateNavBar2;
