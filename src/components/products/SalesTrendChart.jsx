import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const SalesData = [
    { name: 'Jan', Sales: 4000 },
    { name: 'Feb', Sales: 3000 },
    { name: 'Mar', Sales: 2000 },
    { name: 'Apr', Sales: 2780 },
    { name: 'May', Sales: 1890 },
    { name: 'Jun', Sales: 2390 },
    { name: 'Jul', Sales: 3490 },
    { name: 'Aug', Sales: 4000 },
    { name: 'Sep', Sales: 3000 },
    { name: 'Oct', Sales: 2000 },
    { name: 'Nov', Sales: 2780 },
    { name: 'Dec', Sales: 1890 }
  ];
  

const SalesTrendChart = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 shadow-lg rounded-xl border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={SalesData}>
            <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
            <XAxis dataKey='name' stroke='#9ca3af' />
            <YAxis stroke='#9ca3af' />
            <Tooltip
              contentStyle={{
                background: "rgba(31, 41, 55, 0.8)",
                border: '#4B5563',
              }}
              itemStyle={{ color: '#E5B7EB' }}
            />
            <Line 
              type='monotone' 
              dataKey='Sales' 
              stroke='#6366F1'
              strokeWidth={3}
              dot={{ fill: '#6366F1', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default SalesTrendChart
