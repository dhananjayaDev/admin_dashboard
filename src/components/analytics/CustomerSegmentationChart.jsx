import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";

const segmentationData = [
  { category: "Age 18-24", value: 80 },
  { category: "Age 25-34", value: 90 },
  { category: "Age 35-44", value: 70 },
  { category: "Age 45+", value: 60 },
];

export default function CustomerSegmentationChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold mb-4">Customer Segmentation</h2>
      <RadarChart width={500} height={300} data={segmentationData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="category" />
        <PolarRadiusAxis />
        <Tooltip />
        <Legend />
        <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </motion.div>
  );
}