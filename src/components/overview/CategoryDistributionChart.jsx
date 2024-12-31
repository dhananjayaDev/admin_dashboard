import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const categoryData = [
  { name: 'Electronics', value: 4000 },
  { name: 'Clothing', value: 3000 },
  { name: 'Books', value: 2000 },
  { name: 'Home & Garden', value: 2780 },
  { name: 'Health & Beauty', value: 1890 },
  { name: 'Toys & Games', value: 2390 },
  { name: 'Sports & Outdoors', value: 3490 },
  { name: 'Automotive', value: 4000 },
  { name: 'Movies & Music', value: 3000 },
  { name: 'Food & Drink', value: 2000 },
  { name: 'Other', value: 2780 },
];

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', 
  '#FF5F57', '#4CAF50', '#FF8C00', '#B8860B', '#4682B4', '#E6E6FA'
];

const CategoryDistributionChart = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 shadow-lg rounded-xl border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Category Distribution</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie 
              data={categoryData} 
              dataKey="value" 
              nameKey="name" 
              cx="50%" 
              cy="50%" 
              labelLine
              outerRadius={80} 
              fill="#8884d8"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default CategoryDistributionChart;
