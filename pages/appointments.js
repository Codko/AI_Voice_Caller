// pages/appointments.js
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default react-calendar styles
import styles from '../styles/Calendar.module.css'; // Custom styles

const Appointments = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      // Check if the date is in the past
      if (date < new Date()) {
        return styles.pastDate;
      }
    }
    return '';
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mt-4 mb-8 text-center">Appointments</h1>
      <div className={styles.reactCalendarContainer}>
        <Calendar
          onChange={handleDateChange}
          value={date}
          className={styles.reactCalendar}
          tileClassName={tileClassName}
        />
      </div>
    </div>
  );
};

export default Appointments;
