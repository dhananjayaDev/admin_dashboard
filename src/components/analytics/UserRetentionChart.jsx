import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";

const retentionData = [
  { week: "Week 1", retention: 90 },
  { week: "Week 2", retention: 80 },
  { week: "Week 3", retention: 70 },
  { week: "Week 4", retention: 60 },
];

export default function UserRetentionChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold mb-4">User Retention</h2>
      <LineChart width={500} height={300} data={retentionData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="retention" stroke="#8884d8" />
      </LineChart>
    </motion.div>
  );
}