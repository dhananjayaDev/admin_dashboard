import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import 'chart.js/auto';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title);

const heatmapData = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  datasets: [
    {
      label: 'User Activity',
      data: [2, 5, 3, 4, 7, 1, 6, 8, 0, 4, 5],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: '#36A2EB',
      borderWidth: 1,
    }
  ]
};

const options = {
  maintainAspectRatio: false,
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        color: '#9ca3af'
      },
      grid: {
        color: '#4B5563'
      }
    },
    y: {
      beginAtZero: true,
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
      <h2 className="text-lg font-medium mb-4 text-gray-100">User Activity Heatmap</h2>
      <div className="h-80">
        <Bar data={heatmapData} options={options} />
      </div>
    </motion.div>
  );
};

export default UserActivityHeatmap;
