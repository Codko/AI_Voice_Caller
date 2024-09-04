// components/AppointmentTile.js
const AppointmentTile = ({ appointment }) => {
    return (
      <div className="w-full p-4 bg-white rounded-lg shadow-lg mb-4 hover:bg-gray-100 transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold">{appointment.description}</h3>
        <p className="text-gray-600">{appointment.date.toDateString()}</p>
      </div>
    );
  };
  
  export default AppointmentTile;
  