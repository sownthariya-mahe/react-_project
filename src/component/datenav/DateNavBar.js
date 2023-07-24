import React, { useState } from 'react';

const DateNavBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const updateDateDisplay = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = currentDate.toLocaleDateString(undefined, options);
    return dateString;
  };

  const changeDate = (daysToAdd) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
    return (<li>{currentDate}</li>)
  };

  return (
    <div className="date-nav">
      <button className="nav-btn" onClick={() => changeDate(-1)}>Previous</button>
      <span id="current-date">{updateDateDisplay()}</span>
      <button className="nav-btn" onClick={() => changeDate(1)}>Next</button>
      <ul>
        {
            <li>{currentDate}</li>
          
          
        }

      </ul>
    </div>
  );
};

export default DateNavBar;
