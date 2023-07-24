import React, { useState } from 'react';
import "../dateNavBar/Calender.css"

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDay()
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = [];

    for (let date = new Date(firstDay); date <= lastDay; date.setDate(date.getDate() + 1)) {
      daysInMonth.push(new Date(date));
    }

    return daysInMonth;
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth();

    return daysInMonth.map((day) => (
      <li key={day.toISOString()} className='carosel-item' >
        <span className="day">{day.getDate()}</span>
        <span className="month">{months[day.getMonth()]}</span>
        <span className="year">{daysOfWeek[day.getDay()]}</span>
      </li>
    ));
  };

  return (
    <div className="calendar col-12">
      <div className="calendar-header">
        <button className="nav-btn" onClick={prevMonth}>Prev</button>
        {/* <span className="current-month">{months[currentDate.getMonth()]} {currentDate.getFullYear()}</span> */}
        <div className="calendar-body slide" >
        <ul className="calendar-days d-flex">
          {renderCalendarDays()}
        </ul>
      </div>
        <button className="nav-btn" onClick={nextMonth}>Next</button>
      </div>
      
    </div>
  );
};

export default Calendar;
