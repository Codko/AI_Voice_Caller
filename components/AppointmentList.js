// components/AppointmentList.js
import AppointmentTile from './AppointmentTile';

const AppointmentList = ({ appointments }) => {
  return (
    <div>
      {appointments.length > 0 ? (
        appointments.map(app => (
          <AppointmentTile key={app.id} appointment={app} />
        ))
      ) : (
        <p>No appointments available.</p>
      )}
    </div>
  );
};

export default AppointmentList;
