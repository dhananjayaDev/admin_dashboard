
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', users: 400 },
  { name: 'Group B', users: 300 },
  { name: 'Group C', users: 300 },
  { name: 'Group D', users: 200 },
  { name: 'Group E', users: 278 },
  { name: 'Group F', users: 189 },
];

const UserDemographicsChart = () => {
  return (
    <div className='bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 shadow-lg rounded-xl border border-gray-700 w-full'>
      <h2 className='text-lg font-medium mb-4 text-gray-100'>User Demographics</h2>
      <div className='w-full h-80'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                background: "rgba(31, 41, 55, 0.8)",
                border: "#4B5563"
              }}
              itemStyle={{ color: "#E5B7EB" }}
            />
            <Bar dataKey="users" fill="#6366F1" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserDemographicsChart;
