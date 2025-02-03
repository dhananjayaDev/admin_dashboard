import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";

const channelData = [
  { name: "Organic", value: 40 },
  { name: "Paid", value: 30 },
  { name: "Social", value: 20 },
  { name: "Email", value: 10 },
];

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EC4899"];

export default function ChannelPerformanceChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold mb-4">Channel Performance</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={channelData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {channelData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </motion.div>
  );
}