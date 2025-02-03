import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Title, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import 'chart.js/auto';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Low Activity',
      data: [20, 30, 25, 35, 50, 40, 60, 70, 45, 55, 65, 75],
      backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue
      borderColor: '#36A2EB',
      borderWidth: 1,
    },
    {
      label: 'Medium Activity',
      data: [15, 20, 15, 25, 30, 20, 30, 35, 25, 35, 45, 50],
      backgroundColor: 'rgba(255, 206, 86, 0.6)', // Yellow
      borderColor: '#FFCE56',
      borderWidth: 1,
    },
    {
      label: 'High Activity',
      data: [10, 15, 10, 20, 25, 15, 25, 30, 20, 25, 35, 40],
      backgroundColor: 'rgba(75, 192, 192, 0.6)', // Green
      borderColor: '#4BC0C0',
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    x: {
      beginAtZero: true,
      stacked: true,
      ticks: {
        color: '#9ca3af'
      },
      grid: {
        color: '#4B5563'
      }
    },
    y: {
      beginAtZero: true,
      stacked: true,
      ticks: {
        color: '#9ca3af'
      },
      grid: {
        color: '#4B5563'
      }
    }
  },
  plugins: {
    tooltip: {
      backgroundColor: 'rgba(31, 41, 55, 0.8)',
      titleColor: '#E5B7EB',
      bodyColor: '#E5B7EB',
      borderColor: '#4B5563',
      borderWidth: 1,
    },
    legend: {
      labels: {
        color: '#9ca3af'
      }
    }
  },
};

const UserActivityHeatmap = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 shadow-lg rounded-xl border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">User Activity</h2>
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
    </motion.div>
  );
};

export default UserActivityHeatmap;
