import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Home & Garden', value: 200 },
  { name: 'Books', value: 100 },
  { name: 'Others', value: 150 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe'];

const SalesByCategoryChart = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 shadow-lg rounded-xl border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}>
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales by Category</h2>
      <div style={{width: "100%", height: 300}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
          contentStyle={{
            background: 'rgba(31, 41, 55, 0.8)',
            border: '#4B5563',
          }}
          itemStyle={{ color: "#E5E7EB"}} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesByCategoryChart;
