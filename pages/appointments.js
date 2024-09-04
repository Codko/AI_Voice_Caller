// pages/appointments.js
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default react-calendar styles
import styles from '../styles/Calendar.module.css'; // Custom styles
import AppointmentTile from '../components/AppointmentTile';
import AppointmentList from '../components/AppointmentList';

const Appointments = () => {
  const [date, setDate] = useState(new Date());
  const [showAllAppointments, setShowAllAppointments] = useState(false);

  // Sample appointment data
  const appointments = [
    { id: 1, date: new Date(), description: 'Dentist Appointment' }, // Today
    { id: 2, date: new Date(new Date().setDate(new Date().getDate() + 2)), description: 'Follow-up with Dr. Smith' }, // Upcoming
    { id: 3, date: new Date(new Date().setDate(new Date().getDate() - 5)), description: 'Annual Check-up' }, // Past
  ];

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (date < new Date()) {
        return styles.pastDate;
      }
    }
    return '';
  };

  const todayAppointments = appointments.filter(app => 
    app.date.toDateString() === new Date().toDateString()
  );

  const upcomingAppointments = appointments.filter(app => 
    app.date > new Date() && app.date.toDateString() !== new Date().toDateString()
  );

  const pastAppointments = appointments.filter(app => 
    app.date < new Date()
  );

  const toggleShowAllAppointments = () => {
    setShowAllAppointments(!showAllAppointments);
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

      <div className="mb-6">
        <button
          onClick={toggleShowAllAppointments}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          {showAllAppointments ? 'Hide All Appointments' : 'Show All Appointments'}
        </button>
      </div>

      {/* Section for All Appointments */}
      <div className="w-full max-w-4xl">
        {showAllAppointments ? (
          <AppointmentList appointments={appointments} /> // Display AppointmentList when showAllAppointments is true
        ) : (
          <>
            <div className="w-full mb-6">
              <h2 className="text-2xl font-bold mb-4">Appointments Scheduled Today</h2>
              <AppointmentList appointments={todayAppointments} />
            </div>
            <div className="w-full mb-6">
              <h2 className="text-2xl font-bold mb-4">Upcoming Appointments</h2>
              <AppointmentList appointments={upcomingAppointments} />
            </div>
            <div className="w-full mb-6">
              <h2 className="text-2xl font-bold mb-4">Past Appointments</h2>
              <AppointmentList appointments={pastAppointments} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Appointments;
