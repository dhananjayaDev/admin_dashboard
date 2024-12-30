import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';

const COLORS = [
    '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'
  ];
  
const SALES_CHANNEL_DATA = [
  { name: 'Online', value: 4000 },
  { name: 'In-Store', value: 3000 },
  { name: 'Mail Order', value: 2000 },
  { name: 'Telephone', value: 2780 },
  { name: 'Other', value: 1890 },
];

const SalesChannelChart = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 shadow-lg rounded-xl lg:col-span-2 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales by Channel</h2>
      <div className='h-80'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={SALES_CHANNEL_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                background: "rgba(31, 41, 55, 0.8)",
                border: 'none',
              }}
              itemStyle={{ color: '#E5B7EB' }}
            />
            <Legend />
            <Bar dataKey="value" fill="#8884d8">
              {SALES_CHANNEL_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesChannelChart;
