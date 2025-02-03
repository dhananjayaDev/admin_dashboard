import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const monthlySalesData = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4000 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 4000 },
    { month: 'Jul', sales: 7000 },
    { month: 'Aug', sales: 8000 },
    { month: 'Sep', sales: 9000 },
    { month: 'Oct', sales: 10000 },
    { month: 'Nov', sales: 12000 },
    { month: 'Dec', sales: 14000 },
    ];

const SalesOverviewChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('This Month');

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 shadow-lg rounded-xl border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-100'>Sales Overview</h2>

        <select
          name='timeRange'
          id='timeRange'
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
          className='bg-gray-700 text-gray-100 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <option value='This Week'>This Week</option>
          <option value='This Month'>This Month</option>
          <option value='This Quarter'>This Quarter</option>
          <option value='This Year'>This Year</option>
        </select>
      </div>

      <div
      className='h-80 w-full'
      >
        <ResponsiveContainer width='100%' height='100%'>
            <AreaChart data={monthlySalesData}>
                <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
                <XAxis dataKey='month' stroke='#9ca3af' />
                <YAxis stroke='#9ca3af' />
                <Tooltip
                    contentStyle={{
                    background: 'rgba(31, 41, 55, 0.8)',
                    border: '#4B5563',
                    }}
                    itemStyle={{ color: '#E5B7EB' }}
                />
                <Area
                    type='monotone'
                    dataKey='sales'
                    stroke='#6366F1'
                    fill='#6366F1'
                    strokeWidth={3}
                    dot={{ fill: '#6366F1', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, strokeWidth: 2 }}
                />
            </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesOverviewChart;
