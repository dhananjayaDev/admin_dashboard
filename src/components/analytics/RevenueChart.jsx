import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const revenueData = [
  { month: "Jan", revenue: 4000, target: 3000 },
  { month: "Feb", revenue: 3000, target: 3500 },
  { month: "Mar", revenue: 2000, target: 2500 },
  { month: "Apr", revenue: 5000, target: 4500 },
  { month: "May", revenue: 6000, target: 5500 },
  { month: "Jun", revenue: 7000, target: 6500 },
];

export default function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold mb-4">Revenue vs Target</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="target" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
