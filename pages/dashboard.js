// pages/dashboard.js
import { Pie, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const Dashboard = () => {
  // Dummy data for demonstration
  const appointmentsToday = 5;
  const numberOfCalls = 23;

  // Data for Pie Chart
  const pieData = {
    labels: ['Completed', 'Pending', 'Cancelled'],
    datasets: [
      {
        data: [10, 5, 2],
        backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
      },
    ],
  };

  // Data for Line Chart
  const lineData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Number of Calls',
        data: [12, 19, 10, 17, 14, 20, 23],
        fill: false,
        backgroundColor: '#2196F3',
        borderColor: '#2196F3',
      },
    ],
  };

  // Data for Bar Chart (Call Recorder Stats)
  const barData = {
    labels: ['Recording 1', 'Recording 2', 'Recording 3', 'Recording 4'],
    datasets: [
      {
        label: 'Recording Duration (mins)',
        data: [15, 30, 25, 40],
        backgroundColor: '#FF5722',
        borderColor: '#FF5722',
        borderWidth: 1,
      },
    ],
  };

  // Data for Line Chart (Recent Call Trends)
  const trendData = {
    labels: ['Last Week', 'This Week'],
    datasets: [
      {
        label: 'Call Volume',
        data: [150, 180],
        fill: false,
        backgroundColor: '#9C27B0',
        borderColor: '#9C27B0',
      },
    ],
  };

  // Data for AI Tech Overview
  const aiTechData = {
    labels: ['Speech Recognition', 'Sentiment Analysis', 'Caller Identification'],
    datasets: [
      {
        data: [70, 50, 80],
        backgroundColor: ['#3F51B5', '#E91E63', '#4CAF50'],
      },
    ],
  };

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
        <div className="w-full h-64 bg-white rounded-lg shadow-lg p-4">
          <Pie data={pieData} />
        </div>
        <div className="w-full h-64 bg-white rounded-lg shadow-lg p-4">
          <Line data={lineData} />
        </div>
        <div className="w-full h-64 bg-white rounded-lg shadow-lg p-4">
          <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw} mins` } } } }} />
        </div>
        <div className="w-full h-64 bg-white rounded-lg shadow-lg p-4">
          <Line data={trendData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
        <div className="w-full h-64 bg-white rounded-lg shadow-lg p-4">
          <Pie data={aiTechData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
