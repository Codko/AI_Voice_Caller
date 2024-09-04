import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const activeUsers = 1200;
  const voiceRecognitionCompletion = 75; // in percentage
  const apiCosts = 400;
  const serverCosts = 300;
  const supportCosts = 200;

  const costData = {
    labels: ['API Usage', 'Server Costs', 'Support Costs'],
    datasets: [
      {
        data: [apiCosts, serverCosts, supportCosts],
        backgroundColor: ['#0088FE', '#00C49F', '#FFBB28'],
        hoverBackgroundColor: ['#0070E0', '#00B68F', '#FFAA00'],
      },
    ],
  };

  const callData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Calls',
        data: [400, 300, 200, 278, 189],
        fill: false,
        backgroundColor: '#8884d8',
        borderColor: '#8884d8',
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">AI Voice Caller Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        {/* Project Information */}
        <div className="col-span-3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Project Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>Project Name:</strong> AI Voice Caller Application</p>
              <p><strong>Client:</strong> Internal Project</p>
              <p><strong>Project Type:</strong> Software Development</p>
            </div>
            <div>
              <p><strong>Project Status:</strong> In Development</p>
              <p><strong>Project Manager:</strong> Your Name</p>
              <p><strong>Project Start:</strong> 01.01.2024</p>
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-2">Active Users</h2>
          <p className="text-4xl font-semibold">{activeUsers}</p>
        </div>

        <div className="bg-purple-200 p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-2">Voice Recognition Completion</h2>
          <p className="text-4xl font-semibold">{voiceRecognitionCompletion}%</p>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center col-span-3">
          <h2 className="text-2xl font-bold mb-4">Cost Breakdown</h2>
          <Pie data={costData} />
        </div>

        {/* Call Volume Over Time */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-3">
          <h2 className="text-2xl font-bold mb-4">Call Volume Over Time</h2>
          <Line data={callData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
