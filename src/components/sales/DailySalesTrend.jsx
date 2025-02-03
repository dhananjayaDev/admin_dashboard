import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Mon', sales: 1200 },
  { name: 'Tue', sales: 1400 },
  { name: 'Wed', sales: 900 },
  { name: 'Thu', sales: 1100 },
  { name: 'Fri', sales: 1300 },
  { name: 'Sat', sales: 1600 },
  { name: 'Sun', sales: 1400 },
];

const DailySalesTrend = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 shadow-lg rounded-xl border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}>
      <h2 className="text-lg font-medium mb-4 text-gray-100">Daily Sales Trend</h2>
      <div style={{width: "100%", height: 300}}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default DailySalesTrend;
