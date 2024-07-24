// pages/dashboard.js
const Dashboard = () => {
  // Dummy data for demonstration
  const appointmentsToday = 5;
  const numberOfCalls = 23;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mt-4 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="flex items-center justify-center w-full h-64 bg-blue-200 rounded-lg shadow-lg hover:bg-blue-300 transition-transform transform hover:scale-105">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Appointments Today</h2>
            <p className="text-4xl font-semibold">{appointmentsToday}</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-64 bg-green-200 rounded-lg shadow-lg hover:bg-green-300 transition-transform transform hover:scale-105">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Number of Calls</h2>
            <p className="text-4xl font-semibold">{numberOfCalls}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
